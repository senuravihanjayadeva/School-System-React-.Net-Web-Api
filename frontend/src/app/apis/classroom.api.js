import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BACKEND_API;

export const CLASSROOMAPI = {
    saveClassroom: (data) => axios.post(`${BASE_URL}/api/Classroom/AddClassroom`, data),
    getClassrooms: () => axios.get(`${BASE_URL}/api/Classroom/GetAllClassrooms`),
    getClassroomById: (id) => axios.get(`${BASE_URL}/api/Classroom/GetClassroomById/${id}`),
    updateClassroomById: (id, data) => axios.put(`${BASE_URL}/api/Classroom/UpdateClassroom/${id}`, data),
    deleteClassroomById: (id) => axios.delete(`${BASE_URL}/api/Classroom/DeleteClassroom/${id}`),
};