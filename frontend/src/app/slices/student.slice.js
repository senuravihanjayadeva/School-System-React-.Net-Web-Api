import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  deleteStudentById,
  getStudentById,
  getStudentReportById,
  getStudents,
  saveStudent,
  updateStudentById,
} from "../actions/student.action";

const studentSlice = createSlice({
  name: "student",
  initialState: {
    selectedStudent: null,
    students: [],
    studentsreports:null
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(saveStudent.fulfilled, (state, action) => {
      state.students = [...state.students, action.payload];
      toast.success("Student Added");
    });
    builder.addCase(saveStudent.rejected, (state, action) => {
      toast.error("Something went wrong");
    });
    builder.addCase(getStudentById.fulfilled, (state, action) => {
      state.selectedStudent = action.payload;
    });
    builder.addCase(getStudentById.rejected, (state, action) => {
      toast.error("Something went wrong");
    });
    builder.addCase(getStudentReportById.fulfilled, (state, action) => {
      state.studentsreports = action.payload;
    });
    builder.addCase(getStudentReportById.rejected, (state, action) => {
      toast.error("Something went wrong");
    });
    builder.addCase(getStudents.fulfilled, (state, action) => {
      state.students = action.payload;
    });
    builder.addCase(getStudents.rejected, (state, action) => {
      toast.error("Something went wrong");
    });
    builder.addCase(updateStudentById.fulfilled, (state, action) => {
      state.students = state.students.map((x) =>
        x.id === action.payload.id ? action.payload : x
      );
      toast.success("Student Edited");
    });
    builder.addCase(updateStudentById.rejected, (state, action) => {
      toast.error("Something went wrong");
    });
    builder.addCase(deleteStudentById.fulfilled, (state, action) => {
      state.students = state.students.filter((x) => x.id !== action.payload);
      toast.success("Student Deleted");
    });
    builder.addCase(deleteStudentById.rejected, (state, action) => {
      toast.error("Something went wrong");
    });
  },
});

export default studentSlice.reducer;