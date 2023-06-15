import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "reactstrap";
import { saveAllocateClassroom } from "../../app/actions/allocateclassroom.action";
import AllocateClassroomTable from "../../Components/AllocateClassroomTable";
import CardPanel from "../../Components/CardPanel";
import ClassroomSelect from "../../Components/ClassroomSelectComponent";
import TeacherSelect from "../../Components/TeacherSelectComponent";

function AllocateClassrooms() {
  const dispatch = useDispatch();
  const [teacherID, setTeacherId] = useState();
  const [classroomID, setClassroomId] = useState();

  const onHandleTeacherChange = (value) => {
    setTeacherId(value);
  };

  const onHandleClassroomChange = (value) => {
    setClassroomId(value);
  };

  const handleOnSubmit = () => {
    const allocation = {
      teacherID,
      classroomID,
    };
    dispatch(saveAllocateClassroom(allocation));
  };
  return (
    <CardPanel title="Allocated Classrooms">
      <TeacherSelect onHandleChange={onHandleTeacherChange} />
      <ClassroomSelect onHandleChange={onHandleClassroomChange} />
      <Button onClick={handleOnSubmit}>Allocate</Button>
      <AllocateClassroomTable teacherId={teacherID} />
    </CardPanel>
  );
}

export default AllocateClassrooms;
