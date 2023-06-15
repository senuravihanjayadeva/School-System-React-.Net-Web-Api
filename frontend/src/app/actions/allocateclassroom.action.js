import { createAsyncThunk } from "@reduxjs/toolkit";
import { ALLOCATECLASSROOMAPI } from "../apis/allocateclassroom.api";

export const saveAllocateClassroom = createAsyncThunk("allocateclassroom/saveAllocateClassroom", async (data) => {
  const response = await ALLOCATECLASSROOMAPI.saveAllocateClassroom(data);
  return response.data;
});

export const getAllocateClassrooms = createAsyncThunk("allocateclassroom/getAllocateClassrooms", async () => {
  const response = await ALLOCATECLASSROOMAPI.getAllocateClassrooms();
  return response.data;
});

export const getAllocateClassroomById = createAsyncThunk("allocateclassroom/getAllocateClassroomById", async (id) => {
  const response = await ALLOCATECLASSROOMAPI.getAllocateClassroomById(id);
  return response.data;
});

export const updateAllocateClassroomById = createAsyncThunk(
  "allocateclassroom/updateAllocateClassroomById",
  async (data) => {
    const response = await ALLOCATECLASSROOMAPI.updateAllocateClassroomById(data.id, data);
    return response.data;
  }
);

export const deleteAllocateClassroomById = createAsyncThunk(
  "allocateclassroom/deleteAllocateClassroomById",
  async (id) => {
    await ALLOCATECLASSROOMAPI.deleteAllocateClassroomById(id);
    return id;
  }
);