import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  deleteAllocateSubjectById,
  getAllocateSubjectById,
  getAllocateSubjects,
  saveAllocateSubject,
  updateAllocateSubjectById,
} from "../actions/allocatesubject.action";

const allocateSubjectSlice = createSlice({
  name: "allocatesubject",
  initialState: {
    selectedAllocateSubject: null,
    allocateSubjects: [],
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(saveAllocateSubject.fulfilled, (state, action) => {
      state.allocateSubjects = [...state.allocateSubjects, action.payload];
      toast.success("Allocation Added");
    });
    builder.addCase(saveAllocateSubject.rejected, (state, action) => {
      toast.error("Something went wrong");
    });
    builder.addCase(getAllocateSubjectById.fulfilled, (state, action) => {
      state.selectedAllocateSubject = action.payload;
    });
    builder.addCase(getAllocateSubjectById.rejected, (state, action) => {
      toast.error("Something went wrong");
    });
    builder.addCase(getAllocateSubjects.fulfilled, (state, action) => {
      state.allocateSubjects = action.payload;
    });
    builder.addCase(getAllocateSubjects.rejected, (state, action) => {
      toast.error("Something went wrong");
    });
    builder.addCase(updateAllocateSubjectById.fulfilled, (state, action) => {
      state.allocateSubjects = state.allocateSubjects.map((x) =>
        x.id === action.payload.id ? action.payload : x
      );
      toast.success("Allocation Edited");
    });
    builder.addCase(updateAllocateSubjectById.rejected, (state, action) => {
      toast.error("Something went wrong");
    });
    builder.addCase(deleteAllocateSubjectById.fulfilled, (state, action) => {
      state.allocateSubjects = state.allocateSubjects.filter((x) => x.allocateSubjectID !== action.payload);
      toast.success("Allocation Deleted");
    });
    builder.addCase(deleteAllocateSubjectById.rejected, (state, action) => {
      toast.error("Something went wrong");
    });
  },
});

export default allocateSubjectSlice.reducer;