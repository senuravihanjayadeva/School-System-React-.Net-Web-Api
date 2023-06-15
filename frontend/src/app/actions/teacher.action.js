import { createAsyncThunk } from "@reduxjs/toolkit";
import { TEACHERAPI } from "../apis/teacher.api";

export const saveTeacher = createAsyncThunk("teacher/saveTeacher", async (data) => {
  const response = await TEACHERAPI.saveTeacher(data);
  return response.data;
});

export const getTeachers = createAsyncThunk("teacher/getTeachers", async () => {
  const response = await TEACHERAPI.getTeachers();
  return response.data;
});

export const getTeacherById = createAsyncThunk("teacher/getTeacherById", async (id) => {
  const response = await TEACHERAPI.getTeacherById(id);
  return response.data;
});

export const updateTeacherById = createAsyncThunk(
  "teacher/updateTeacherById",
  async (data) => {
    const response = await TEACHERAPI.updateTeacherById(data.id, data);
    return response.data;
  }
);

export const deleteTeacherById = createAsyncThunk(
  "teacher/deleteTeacherById",
  async (id) => {
    const response = await TEACHERAPI.deleteTeacherById(id);
    return id;
  }
);