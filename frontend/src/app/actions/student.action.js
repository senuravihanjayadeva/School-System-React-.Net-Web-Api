import { createAsyncThunk } from "@reduxjs/toolkit";
import { STUDENTAPI } from "../apis/student.api";

export const saveStudent = createAsyncThunk("student/saveStudent", async (data) => {
  const response = await STUDENTAPI.saveStudent(data);
  return response.data;
});

export const getStudents = createAsyncThunk("student/getStudents", async () => {
  const response = await STUDENTAPI.getStudents();
  return response.data;
});

export const getStudentById = createAsyncThunk("student/getStudentById", async (id) => {
  const response = await STUDENTAPI.getStudentById(id);
  return response.data;
});

export const updateStudentById = createAsyncThunk(
  "student/updateStudentById",
  async (data) => {
    const response = await STUDENTAPI.updateStudentById(data.id, data);
    return response.data;
  }
);

export const deleteStudentById = createAsyncThunk(
  "student/deleteStudentById",
  async (id) => {
    await STUDENTAPI.deleteStudentById(id);
    return id;
  }
);