import { createAsyncThunk } from "@reduxjs/toolkit";
import { SUBJECTAPI } from "../apis/subject.api";

export const saveSubject = createAsyncThunk("subject/saveSubject", async (data) => {
  const response = await SUBJECTAPI.saveSubject(data);
  return response.data;
});

export const getSubjects = createAsyncThunk("subject/getSubjects", async () => {
  const response = await SUBJECTAPI.getSubjects();
  return response.data;
});

export const getSubjectById = createAsyncThunk("subject/getSubjectById", async (id) => {
  const response = await SUBJECTAPI.getSubjectById(id);
  return response.data;
});

export const updateSubjectById = createAsyncThunk(
  "subject/updateSubjectById",
  async (data) => {
    const response = await SUBJECTAPI.updateSubjectById(data.id, data);
    return response.data;
  }
);

export const deleteSubjectById = createAsyncThunk(
  "subject/deleteSubjectById",
  async (id) => {
    await SUBJECTAPI.deleteSubjectById(id);
    return id;
  }
);