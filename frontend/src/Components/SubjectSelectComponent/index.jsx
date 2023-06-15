import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Input } from "reactstrap";
import { getSubjects } from "../../app/actions/subject.action";

function SubjectSelect(props) {
  const dispatch = useDispatch();
  const subjects = useSelector((state) => state.subject.subjects);

  useEffect(() => {
    dispatch(getSubjects());
  }, [dispatch]);

  return (
    <>
      <h5>Subject</h5>
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
              <option key={subject.subjectID} value={subject.subjectID}>
                {subject.subjectName}
              </option>
            );
          })}
      </Input>
    </>
  );
}

export default SubjectSelect;
