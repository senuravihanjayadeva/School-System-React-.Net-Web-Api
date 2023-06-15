import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  deleteSubjectById,
  getSubjectById,
  getSubjects,
  saveSubject,
  updateSubjectById,
} from "../actions/subject.action";

const subjectSlice = createSlice({
  name: "subject",
  initialState: {
    selectedSubject: null,
    subjects: [],
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(saveSubject.fulfilled, (state, action) => {
      state.subjects = [...state.subjects, action.payload];
      toast.success("Subject Added");
    });
    builder.addCase(saveSubject.rejected, (state, action) => {
      toast.error("Something went wrong");
    });
    builder.addCase(getSubjectById.fulfilled, (state, action) => {
      state.selectedSubject = action.payload;
    });
    builder.addCase(getSubjectById.rejected, (state, action) => {
      toast.error("Something went wrong");
    });
    builder.addCase(getSubjects.fulfilled, (state, action) => {
      state.subjects = action.payload;
    });
    builder.addCase(getSubjects.rejected, (state, action) => {
      toast.error("Something went wrong");
    });
    builder.addCase(updateSubjectById.fulfilled, (state, action) => {
      state.subjects = state.subjects.map((x) =>
        x.id === action.payload.id ? action.payload : x
      );
      toast.success("Subject Edited");
    });
    builder.addCase(updateSubjectById.rejected, (state, action) => {
      toast.error("Something went wrong");
    });
    builder.addCase(deleteSubjectById.fulfilled, (state, action) => {
      state.subjects = state.subjects.filter((x) => x.id !== action.payload);
      toast.success("Subject Deleted");
    });
    builder.addCase(deleteSubjectById.rejected, (state, action) => {
      toast.error("Something went wrong");
    });
  },
});

export default subjectSlice.reducer;