import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CardPanel from '../../Common/CardPanel';
import TableComponent from '../../Common/TableComponent';

function StudentReportTable({ teacherId }) {
  const [tableData, setTableData] = useState([]);
  const dispatch = useDispatch();
  const studentsreports = useSelector((state) => state.student.studentsreports);

  useEffect(() => {
    let tempTableData = [];
    studentsreports &&
      studentsreports.length &&
      studentsreports.forEach((report) => {
        let data = [
          {
            value: report.subjectName,
            type: 'text',
          },
          {
            value: report.teacherFirstName + ' ' + report.teacherLastName,
            type: 'text',
          },
        ];
        tempTableData.push(data);
      });
    console.log(tempTableData);
    setTableData(tempTableData);
  }, [dispatch,studentsreports]);

  const tableColumns = ['Subject', 'Teacher'];

  return (
    <CardPanel title="Teacher and Subject Details">
      {tableData.length ? <TableComponent tableColumns={tableColumns} tableData={tableData} /> : ''}
    </CardPanel>
  );
}

export default StudentReportTable;
