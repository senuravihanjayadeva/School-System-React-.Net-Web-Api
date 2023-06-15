import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BACKEND_API;

export const STUDENTAPI = {
    saveStudent: (data) => axios.post(`${BASE_URL}/api/Student/AddStudent`, data),
    getStudents: () => axios.get(`${BASE_URL}/api/Student/GetAllStudents`),
    getStudentById: (id) => axios.get(`${BASE_URL}/api/Student/GetStudentById/${id}`),
    updateStudentById: (id, data) => axios.put(`${BASE_URL}/api/Student/UpdateStudent/${id}`, data),
    deleteStudentById: (id) => axios.delete(`${BASE_URL}/api/Student/DeleteStudent/${id}`),
};