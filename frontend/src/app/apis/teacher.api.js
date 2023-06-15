import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BACKEND_API;

export const TEACHERAPI = {
    saveTeacher: (data) => axios.post(`${BASE_URL}/api/Teacher/AddTeacher`, data),
    getTeachers: () => axios.get(`${BASE_URL}/api/Teacher/GetAllTeachers`),
    getTeacherById: (id) => axios.get(`${BASE_URL}/api/Teacher/GetTeacherById/${id}`),
    updateTeacherById: (id, data) => axios.put(`${BASE_URL}/api/Teacher/UpdateTeacher/${id}`, data),
    deleteTeacherById: (id) => axios.delete(`${BASE_URL}/api/Teacher/DeleteTeacher/${id}`),
};