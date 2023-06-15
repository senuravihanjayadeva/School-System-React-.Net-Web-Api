import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Input } from "reactstrap";
import { getSubjects } from "../../app/actions/subject.action";

function SubjectSelect(props) {
  const dispatch = useDispatch();
  const subjects = useSelector((state) => state.subject.subjects);

  useEffect(() => {
    dispatch(getSubjects());
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
      {subjects.length &&
        subjects.map((subject) => {
          return (
            <option value={subject.subjectID}>
              {subject.subjectName}
            </option>
          );
        })}
    </Input>
  );
}

export default SubjectSelect;
