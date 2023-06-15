import { createAsyncThunk } from "@reduxjs/toolkit";
import { CLASSROOMAPI } from "../apis/classroom.api";

export const saveClassroom = createAsyncThunk("classroom/saveClassroom", async (data) => {
  const response = await CLASSROOMAPI.saveClassroom(data);
  return response.data;
});

export const getClassrooms = createAsyncThunk("classroom/getClassrooms", async () => {
  const response = await CLASSROOMAPI.getClassrooms();
  return response.data;
});

export const getClassroomById = createAsyncThunk("classroom/getClassroomById", async (id) => {
  const response = await CLASSROOMAPI.getClassroomById(id);
  return response.data;
});

export const updateClassroomById = createAsyncThunk(
  "classroom/updateClassroomById",
  async (data) => {
    const response = await CLASSROOMAPI.updateClassroomById(data.id, data);
    return response.data;
  }
);

export const deleteClassroomById = createAsyncThunk(
  "classroom/deleteClassroomById",
  async (id) => {
    await CLASSROOMAPI.deleteClassroomById(id);
    return id;
  }
);