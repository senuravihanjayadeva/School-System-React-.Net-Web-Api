import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  deleteClassroomById,
  getClassroomById,
  getClassrooms,
  saveClassroom,
  updateClassroomById,
} from "../actions/classroom.action";

const classroomSlice = createSlice({
  name: "classroom",
  initialState: {
    selectedClassroom: null,
    classrooms: [],
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(saveClassroom.fulfilled, (state, action) => {
      state.classrooms = [...state.classrooms, action.payload];
      toast.success("Classroom Added");
    });
    builder.addCase(saveClassroom.rejected, (state, action) => {
      toast.error("Something went wrong");
    });
    builder.addCase(getClassroomById.fulfilled, (state, action) => {
      state.selectedClassroom = action.payload;
    });
    builder.addCase(getClassroomById.rejected, (state, action) => {
      toast.error("Something went wrong");
    });
    builder.addCase(getClassrooms.fulfilled, (state, action) => {
      state.classrooms = action.payload;
    });
    builder.addCase(getClassrooms.rejected, (state, action) => {
      toast.error("Something went wrong");
    });
    builder.addCase(updateClassroomById.fulfilled, (state, action) => {
      state.classrooms = state.classrooms.map((x) =>
        x.id === action.payload.id ? action.payload : x
      );
      toast.success("Classroom Edited");
    });
    builder.addCase(updateClassroomById.rejected, (state, action) => {
      toast.error("Something went wrong");
    });
    builder.addCase(deleteClassroomById.fulfilled, (state, action) => {
      state.classrooms = state.classrooms.filter((x) => x.id !== action.payload);
      toast.success("Post Deleted");
    });
    builder.addCase(deleteClassroomById.rejected, (state, action) => {
      toast.error("Something went wrong");
    });
  },
});

export default classroomSlice.reducer;