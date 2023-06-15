import { configureStore } from "@reduxjs/toolkit";
import studentReducer from "./slices/student.slice";
import classroomReducer from "./slices/classroom.slice";
import teacherReducer from "./slices/teacher.slice";
import allocateSubjectReducer from "./slices/allocatesubject.slice";
import subjectReducer from "./slices/subject.slice";
import allocateClassroomReducer from "./slices/allocateclassroom.slice";

export const store = configureStore({
  reducer: {
    student: studentReducer,
    classroom: classroomReducer,
    teacher: teacherReducer,
    allocatesubject: allocateSubjectReducer,
    subject: subjectReducer,
    allocateclassroom:allocateClassroomReducer
  },
});
