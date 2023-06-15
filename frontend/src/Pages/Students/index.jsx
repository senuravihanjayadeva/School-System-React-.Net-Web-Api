import React from 'react';
import ExistingStudentTable from '../../Components/ExistingStudentTable';
import StudentDetailsForm from '../../Components/StudentDetailsForm';

function Students() {
  return (
    <>
      <StudentDetailsForm />
      <ExistingStudentTable />
    </>
  );
}

export default Students;
