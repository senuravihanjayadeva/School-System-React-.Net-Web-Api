import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Input } from "reactstrap";
import { getTeachers } from "../../app/actions/teacher.action";

function TeacherSelect(props) {
  const dispatch = useDispatch();
  const teachers = useSelector((state) => state.teacher.teachers);

  useEffect(() => {
    dispatch(getTeachers());
  }, []);

  return (
    <Input
      type="select"
      className="mt-2 mb-2"
      onChange={(e) => {
        props.onHandleChange(e.target.value);
      }}
    >
      <option value="">Select an option</option>
      {teachers.length &&
        teachers.map((teacher) => {
          return (
            <option value={teacher.teacherID}>
              {`${teacher.firstName} ${teacher.lastName}`}
            </option>
          );
        })}
    </Input>
  );
}

export default TeacherSelect;
