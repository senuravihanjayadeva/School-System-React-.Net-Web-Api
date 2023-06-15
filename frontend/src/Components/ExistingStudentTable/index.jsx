import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardPanel from "../CardPanel";
import TableComponent from "../TableComponent";
import { getStudents } from "../../app/actions/student.action";

function ExistingStudentTable() {
  const [tableData, setTableData] = useState([]);
  const dispatch = useDispatch();
  const students = useSelector((state) => state.student.students);

  useEffect(() => {
    dispatch(getStudents());
  }, []);

  useEffect(() => {
    let tempTableData = [];
    students.forEach((student) => {
      let data = [
        {
          value: student.firstName,
          type: "text",
        },
        {
          value: student.lastName,
          type: "text",
        },
        {
          value: student.contactPerson,
          type: "text",
        },
        {
          value: student.contactNo,
          type: "text",
        },
      ];
      tempTableData.push(data);
    });
    setTableData(tempTableData);
  }, [students]);

  const tableColumns = [
    "First Name",
    "Last Name",
    "Contact Person",
    "Contact No",
  ];

  return (
    <CardPanel title="Existing Students">
      {tableData.length ? (
        <TableComponent tableColumns={tableColumns} tableData={tableData} />
      ) : (
        ""
      )}
    </CardPanel>
  );
}

export default ExistingStudentTable;
