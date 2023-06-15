import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "reactstrap";
import { saveAllocateSubject } from "../../app/actions/allocatesubject.action";
import AllocateSubjectsTable from "../../Components/AllocateSubjectsTable";
import CardPanel from "../../Components/CardPanel";
import SubjectSelect from "../../Components/SubjectSelectComponent";
import TeacherSelect from "../../Components/TeacherSelectComponent";

function AllocatedSubjects() {
  const dispatch = useDispatch();
  const [teacherID, setTeacherId] = useState();
  const [subjectID, setSubjectId] = useState();

  const onHandleTeacherChange = (value) => {
    setTeacherId(value);
  };

  const onHandleSubjectChange = (value) => {
    setSubjectId(value);
  };

  const handleOnSubmit = () => {
    const allocation = {
      teacherID,
      subjectID,
    };
    dispatch(saveAllocateSubject(allocation));
  };

  return (
    <CardPanel title="Allocated Subjects">
      <TeacherSelect onHandleChange={onHandleTeacherChange} />
      <SubjectSelect onHandleChange={onHandleSubjectChange} />
      <Button onClick={handleOnSubmit}>Allocate</Button>
      <AllocateSubjectsTable teacherId={teacherID} />
    </CardPanel>
  );
}

export default AllocatedSubjects;
