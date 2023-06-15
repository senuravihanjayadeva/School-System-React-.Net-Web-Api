import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Input } from 'reactstrap';
import { getClassrooms } from '../../app/actions/classroom.action';

function ClassroomSelect(props) {
  const dispatch = useDispatch();
  const classrooms = useSelector((state) => state.classroom.classrooms);

  useEffect(() => {
    dispatch(getClassrooms());
  }, [dispatch]);

  return (
    <>
      <h5>Classroom</h5>
      <Input
        type='select'
        className='mt-2 mb-2'
        onChange={(e) => {
          props.onHandleChange(e.target.value);
        }}
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
    </>
  );
}

export default ClassroomSelect;
