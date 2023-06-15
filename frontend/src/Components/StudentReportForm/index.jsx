import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';
import CardPanel from '../../Common/CardPanel';
import { getStudents, getStudentReportById } from '../../app/actions/student.action';

function StudentReportForm() {
  const dispatch = useDispatch();
  const students = useSelector((state) => state.student.students);
  const studentsreports = useSelector((state) => state.student.studentsreports);

  useEffect(() => {
    dispatch(getStudents());
  }, [dispatch]);

  const [studentID, setStudentID] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [contactPerson, setContactPerson] = useState('');
  const [contactNo, setContactNo] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [classroomName, setClassroomName] = useState('');

  useEffect(() => {
    if (studentsreports && studentsreports.length) {
      setFirstName(studentsreports[0].firstName);
      setLastName(studentsreports[0].lastName);
      setContactPerson(studentsreports[0].contactPerson);
      setContactNo(studentsreports[0].contactNo);
      setEmailAddress(studentsreports[0].emailAddress);
      setDateOfBirth(studentsreports[0].dateOfBirth);
      setClassroomName(studentsreports[0].classroomName);
    }
  }, [studentsreports]);

  const onChangeHandlers = (id) => {
    dispatch(getStudentReportById(id));
  };

  return (
    <CardPanel title='Student Details'>
      <Form className='p-2'>
        <Row xs='2'>
          <Col>
            <FormGroup>
              <Label for='classroomID'>Student</Label>
              <Input
                type='select'
                name='classroomID'
                id='classroomID'
                value={studentID}
                onChange={(e) => {
                  setStudentID(e.target.value);
                  onChangeHandlers(e.target.value);
                }}
              >
                <option value=''>Select an option</option>
                {students.length &&
                  students.map((student) => {
                    return (
                      <option key={student.studentID} value={student.studentID}>
                        {student.firstName} {student.lastName}
                      </option>
                    );
                  })}
              </Input>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for='firstName'>First Name</Label>
              <Input type='text' name='firstName' id='firstName' value={firstName} />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for='lastName'>Last Name</Label>
              <Input type='text' name='lastName' id='lastName' value={lastName} />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for='contactPerson'>Contact Person</Label>
              <Input type='text' name='contactPerson' id='contactPerson' value={contactPerson} />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for='contactNo'>Contact No</Label>
              <Input type='text' name='contactNo' id='contactNo' value={contactNo} />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for='emailAddress'>Email Address</Label>
              <Input type='email' name='emailAddress' id='emailAddress' value={emailAddress} />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for='dateOfBirth'>Date of Birth</Label>
              <Input type='date' name='dateOfBirth' id='dateOfBirth' value={dateOfBirth} />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for='classroomName'>Classroom Name</Label>
              <Input type='text' name='classroomName' id='classroomName' value={classroomName} />
            </FormGroup>
          </Col>
        </Row>
      </Form>
    </CardPanel>
  );
}

export default StudentReportForm;
