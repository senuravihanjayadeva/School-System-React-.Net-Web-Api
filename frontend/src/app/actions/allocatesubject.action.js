import { createAsyncThunk } from "@reduxjs/toolkit";
import { ALLOCATESUBJECTAPI } from "../apis/allocatesubject.api";

export const saveAllocateSubject = createAsyncThunk("allocatesubject/saveAllocateSubject", async (data) => {
  const response = await ALLOCATESUBJECTAPI.saveAllocateSubject(data);
  return response.data;
});

export const getAllocateSubjects = createAsyncThunk("allocatesubject/getAllocateSubjects", async () => {
  const response = await ALLOCATESUBJECTAPI.getAllocateSubjects();
  return response.data;
});

export const getAllocateSubjectById = createAsyncThunk("allocatesubject/getAllocateSubjectById", async (id) => {
  const response = await ALLOCATESUBJECTAPI.getAllocateSubjectById(id);
  return response.data;
});

export const updateAllocateSubjectById = createAsyncThunk(
  "allocatesubject/updateAllocateSubjectById",
  async (data) => {
    const response = await ALLOCATESUBJECTAPI.updateAllocateSubjectById(data.id, data);
    return response.data;
  }
);

export const deleteAllocateSubjectById = createAsyncThunk(
  "allocatesubject/deleteAllocateSubjectById",
  async (id) => {
    const response = await ALLOCATESUBJECTAPI.deleteAllocateSubjectById(id);
    return id;
  }
);