import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TableComponent from "../../Common/TableComponent";
import {
  deleteAllocateSubjectById,
  getAllocateSubjects,
} from "../../app/actions/allocatesubject.action";

function AllocateSubjectsTable({ teacherId }) {
  const [tableData, setTableData] = useState([]);
  const dispatch = useDispatch();
  const allocateSubjects = useSelector(
    (state) => state.allocatesubject.allocateSubjects
  );

  useEffect(() => {
    dispatch(getAllocateSubjects());
  }, [dispatch,allocateSubjects.length]);

  useEffect(() => {
    let tempTableData = [];
    let filteredList = allocateSubjects.filter(
      (allocation) => allocation.teacher?.teacherID === parseInt(teacherId)
    );
    filteredList.forEach((allocation) => {
      let data = [
        {
          value: allocation.subject.subjectName,
          type: "text",
        },
        {
          value: "Deallocate",
          primaryId: allocation.allocateSubjectID,
          type: "button",
        },
      ];
      tempTableData.push(data);
    });
    setTableData(tempTableData);
  }, [teacherId, allocateSubjects]);

  const tableColumns = ["Subject", "Action"];

  const onClickButton = (value) => {
    dispatch(deleteAllocateSubjectById(value));
  };

  return (
    <>
      {tableData.length ? (
        <TableComponent
          tableColumns={tableColumns}
          tableData={tableData}
          onClickButton={onClickButton}
        />
      ) : (
        ""
      )}
    </>
  );
}

export default AllocateSubjectsTable;
