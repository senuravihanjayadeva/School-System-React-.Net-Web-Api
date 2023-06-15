import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  deleteTeacherById,
  getTeacherById,
  getTeachers,
  saveTeacher,
  updateTeacherById,
} from "../actions/teacher.action";

const teacherSlice = createSlice({
  name: "teacher",
  initialState: {
    selectedTeacher: null,
    teachers: [],
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(saveTeacher.fulfilled, (state, action) => {
      state.teachers = [...state.teachers, action.payload];
      toast.success("Teacher Added");
    });
    builder.addCase(saveTeacher.rejected, (state, action) => {
      toast.error("Something went wrong");
    });
    builder.addCase(getTeacherById.fulfilled, (state, action) => {
      state.selectedTeacher = action.payload;
    });
    builder.addCase(getTeacherById.rejected, (state, action) => {
      toast.error("Something went wrong");
    });
    builder.addCase(getTeachers.fulfilled, (state, action) => {
      state.teachers = action.payload;
    });
    builder.addCase(getTeachers.rejected, (state, action) => {
      toast.error("Something went wrong");
    });
    builder.addCase(updateTeacherById.fulfilled, (state, action) => {
      state.teachers = state.teachers.map((x) =>
        x.id === action.payload.id ? action.payload : x
      );
      toast.success("Teacher Edited");
    });
    builder.addCase(updateTeacherById.rejected, (state, action) => {
      toast.error("Something went wrong");
    });
    builder.addCase(deleteTeacherById.fulfilled, (state, action) => {
      state.teachers = state.teachers.filter((x) => x.id !== action.payload);
      toast.success("Teacher Deleted");
    });
    builder.addCase(deleteTeacherById.rejected, (state, action) => {
      toast.error("Something went wrong");
    });
  },
});

export default teacherSlice.reducer;