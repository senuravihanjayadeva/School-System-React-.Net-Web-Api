import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TableComponent from "../TableComponent";
import {
  deleteAllocateClassroomById,
  getAllocateClassrooms,
} from "../../app/actions/allocateclassroom.action";

function AllocateClassroomTable({ teacherId }) {
  const [tableData, setTableData] = useState([]);
  const dispatch = useDispatch();
  const allocateClassrooms = useSelector(
    (state) => state.allocateclassroom.allocateClassrooms
  );

  useEffect(() => {
    dispatch(getAllocateClassrooms());
  }, [allocateClassrooms.length]);

  useEffect(() => {
    let tempTableData = [];
    let filteredList = allocateClassrooms.filter(
      (allocation) => allocation.teacher?.teacherID === parseInt(teacherId)
    );
    filteredList.forEach((allocation) => {
      let data = [
        {
          value: allocation.classroom.classroomName,
          type: "text",
        },
        {
          value: "Deallocate",
          primaryId: allocation.allocateClassroomID,
          type: "button",
        },
      ];
      tempTableData.push(data);
    });
    setTableData(tempTableData);
  }, [teacherId, allocateClassrooms]);

  const tableColumns = ["Classroom", "Action"];

  const onClickButton = (value) => {
    dispatch(deleteAllocateClassroomById(value));
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

export default AllocateClassroomTable;
