import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  deleteAllocateClassroomById,
  getAllocateClassroomById,
  getAllocateClassrooms,
  saveAllocateClassroom,
  updateAllocateClassroomById,
} from "../actions/allocateclassroom.action";

const allocateClassroomSlice = createSlice({
  name: "allocateclassroom",
  initialState: {
    selectedAllocateClassroom: null,
    allocateClassrooms: [],
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(saveAllocateClassroom.fulfilled, (state, action) => {
      state.allocateClassrooms = [...state.allocateClassrooms, action.payload];
      toast.success("Allocation Added");
    });
    builder.addCase(saveAllocateClassroom.rejected, (state, action) => {
      toast.error("Something went wrong");
    });
    builder.addCase(getAllocateClassroomById.fulfilled, (state, action) => {
      state.selectedAllocateClassroom = action.payload;
    });
    builder.addCase(getAllocateClassroomById.rejected, (state, action) => {
      toast.error("Something went wrong");
    });
    builder.addCase(getAllocateClassrooms.fulfilled, (state, action) => {
      state.allocateClassrooms = action.payload;
    });
    builder.addCase(getAllocateClassrooms.rejected, (state, action) => {
      toast.error("Something went wrong");
    });
    builder.addCase(updateAllocateClassroomById.fulfilled, (state, action) => {
      state.allocateClassrooms = state.allocateClassrooms.map((x) =>
        x.id === action.payload.id ? action.payload : x
      );
      toast.success("Allocation Edited");
    });
    builder.addCase(updateAllocateClassroomById.rejected, (state, action) => {
      toast.error("Something went wrong");
    });
    builder.addCase(deleteAllocateClassroomById.fulfilled, (state, action) => {
      state.allocateClassrooms = state.allocateClassrooms.filter((x) => x.allocateClassroomID !== action.payload);
      toast.success("Allocation Deleted");
    });
    builder.addCase(deleteAllocateClassroomById.rejected, (state, action) => {
      toast.error("Something went wrong");
    });
  },
});

export default allocateClassroomSlice.reducer;