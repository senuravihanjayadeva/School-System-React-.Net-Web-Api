import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";
import CardPanel from "../CardPanel";
import { saveStudent } from "../../app/actions/student.action";
import { getClassrooms } from "../../app/actions/classroom.action";

function StudentDetailsForm() {
  const dispatch = useDispatch();
  const classrooms = useSelector((state) => state.classroom.classrooms);

  useEffect(() => {
    dispatch(getClassrooms());
  }, []);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [contactPerson, setContactPerson] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [age, setAge] = useState("");
  const [classroomID, setClassroomID] = useState("");

  const onHandleSubmit = (e) => {
    e.preventDefault();

    const student = {
      firstName,
      lastName,
      contactPerson,
      contactNo,
      emailAddress,
      dateOfBirth,
      age,
      classroomID,
    };

    dispatch(saveStudent(student));
  };
  return (
    <CardPanel title="Student Details">
      <Form onSubmit={onHandleSubmit} className="p-2">
        <Row xs="2">
          <Col>
            <FormGroup>
              <Label for="FirstName">First Name</Label>
              <Input
                type="text"
                name="FirstName"
                id="FirstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="LastName">Last Name</Label>
              <Input
                type="text"
                name="LastName"
                id="LastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="ContactPerson">Contact Person</Label>
              <Input
                type="text"
                name="ContactPerson"
                id="ContactPerson"
                value={contactPerson}
                onChange={(e) => setContactPerson(e.target.value)}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="ContactNo">Contact No</Label>
              <Input
                type="text"
                name="ContactNo"
                id="ContactNo"
                value={contactNo}
                onChange={(e) => setContactNo(e.target.value)}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="EmailAddress">Email Address</Label>
              <Input
                type="email"
                name="EmailAddress"
                id="EmailAddress"
                value={emailAddress}
                onChange={(e) => setEmailAddress(e.target.value)}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="DateOfBirth">Date of Birth</Label>
              <Input
                type="date"
                name="DateOfBirth"
                id="DateOfBirth"
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="Age">Age</Label>
              <Input
                type="number"
                name="Age"
                id="Age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="ClassroomID">Class Room</Label>
              <Input
                type="select"
                value={classroomID}
                onChange={(e) => {
                  setClassroomID(e.target.value);
                }}
              >
                <option value="">Select an option</option>
                {classrooms.length &&
                  classrooms.map((classroom) => {
                    return (
                      <option key={classroom.classroomID} value={classroom.classroomID}>
                        {classroom.classroomName}
                      </option>
                    );
                  })}
              </Input>
            </FormGroup>
          </Col>
        </Row>
        <Row xs="3" className="p-4">
          <Col>
            <Button color="success" type="submit">
              Save
            </Button>
          </Col>
          <Col>
            <Button color="danger">Delete</Button>
          </Col>
          <Col>
            <Button color="warning">Reset</Button>
          </Col>
        </Row>
      </Form>
    </CardPanel>
  );
}

export default StudentDetailsForm;
