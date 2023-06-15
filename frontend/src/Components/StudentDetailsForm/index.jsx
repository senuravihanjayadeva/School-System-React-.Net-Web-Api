import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import moment from 'moment';
import { Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import CardPanel from '../../Common/CardPanel';
import { saveStudent } from '../../app/actions/student.action';
import { getClassrooms } from '../../app/actions/classroom.action';

const validationSchema = Yup.object({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  contactPerson: Yup.string().required('Contact Person is required'),
  contactNo: Yup.string()
    .required('Phone number is required')
    .matches(/^\d{10}$/, 'Phone number must be 10 digits'),
  emailAddress: Yup.string().email('Invalid email format').required('Email is required'),
  classroomID: Yup.number().required('Classroom is required'),
});

function StudentDetailsForm() {
  const dispatch = useDispatch();
  const classrooms = useSelector((state) => state.classroom.classrooms);

  useEffect(() => {
    dispatch(getClassrooms());
  }, [dispatch]);

  const [age, setAge] = useState('');

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      contactPerson: '',
      contactNo: '',
      emailAddress: '',
      dateOfBirth: '',
      age: '',
      classroomID: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // Handle form submission
      const student = {
        firstName: values.firstName,
        lastName: values.lastName,
        contactPerson: values.contactPerson,
        contactNo: values.contactNo,
        emailAddress: values.emailAddress,
        dateOfBirth: values.dateOfBirth,
        age: age, // Update the age value here
        classroomID: values.classroomID,
      };

      dispatch(saveStudent(student));
    },
    onReset: () => {
      formik.resetForm(); // Reset the form fields
      setAge(''); // Reset the age value
    },
  });

  const calculateAge = (selectedDate) => {
    const currentDate = moment();
    const dob = moment(selectedDate);
    const years = currentDate.diff(dob, 'years');
    setAge(years);
  };

  return (
    <CardPanel title='Student Details'>
      <Form onSubmit={formik.handleSubmit} className='p-2'>
        <Row xs='2'>
          <Col>
            <FormGroup>
              <Label for='firstName'>First Name</Label>
              <Input
                type='text'
                name='firstName'
                id='firstName'
                value={formik.values.firstName}
                onChange={formik.handleChange}
              />
              {formik.touched.firstName && formik.errors.firstName && (
                <div className='text-danger'>{formik.errors.firstName}</div>
              )}
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for='lastName'>Last Name</Label>
              <Input
                type='text'
                name='lastName'
                id='lastName'
                value={formik.values.lastName}
                onChange={formik.handleChange}
              />
              {formik.touched.lastName && formik.errors.lastName && (
                <div className='text-danger'>{formik.errors.lastName}</div>
              )}
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for='contactPerson'>Contact Person</Label>
              <Input
                type='text'
                name='contactPerson'
                id='contactPerson'
                value={formik.values.contactPerson}
                onChange={formik.handleChange}
              />
              {formik.touched.contactPerson && formik.errors.contactPerson && (
                <div className='text-danger'>{formik.errors.contactPerson}</div>
              )}
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for='contactNo'>Contact No</Label>
              <Input
                type='text'
                name='contactNo'
                id='contactNo'
                value={formik.values.contactNo}
                onChange={formik.handleChange}
              />
              {formik.touched.contactNo && formik.errors.contactNo && (
                <div className='text-danger'>{formik.errors.contactNo}</div>
              )}
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for='emailAddress'>Email Address</Label>
              <Input
                type='email'
                name='emailAddress'
                id='emailAddress'
                value={formik.values.emailAddress}
                onChange={formik.handleChange}
              />
              {formik.touched.emailAddress && formik.errors.emailAddress && (
                <div className='text-danger'>{formik.errors.emailAddress}</div>
              )}
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for='dateOfBirth'>Date of Birth</Label>
              <Input
                type='date'
                name='dateOfBirth'
                id='dateOfBirth'
                value={formik.values.dateOfBirth}
                onChange={(e) => {
                  formik.handleChange(e);
                  calculateAge(e.target.value);
                }}
              />
              {formik.touched.dateOfBirth && formik.errors.dateOfBirth && (
                <div className='text-danger'>{formik.errors.dateOfBirth}</div>
              )}
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for='Age'>Age</Label>
              <Input type='number' name='Age' id='Age' value={age} readOnly />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for='classroomID'>Class Room</Label>
              <Input
                type='select'
                name='classroomID'
                id='classroomID'
                value={formik.values.classroomID}
                onChange={formik.handleChange}
              >
                <option value=''>Select an option</option>
                {classrooms.length &&
                  classrooms.map((classroom) => {
                    return (
                      <option key={classroom.classroomID} value={classroom.classroomID}>
                        {classroom.classroomName}
                      </option>
                    );
                  })}
              </Input>
              {formik.touched.classroomID && formik.errors.classroomID && (
                <div className='text-danger'>{formik.errors.classroomID}</div>
              )}
            </FormGroup>
          </Col>
        </Row>
        <Row xs='3' className='p-4'>
          <Col>
            <Button color='success' type='submit'>
              Save
            </Button>
          </Col>
          <Col>
            <Button color='danger' onClick={()=>{}}>Delete</Button>
          </Col>
          <Col>
            <Button color='warning' onClick={formik.handleReset}>Reset</Button>
          </Col>
        </Row>
      </Form>
    </CardPanel>
  );
}

export default StudentDetailsForm;
