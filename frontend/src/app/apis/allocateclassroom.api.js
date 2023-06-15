import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BACKEND_API;

export const ALLOCATECLASSROOMAPI = {
    saveAllocateClassroom: (data) => axios.post(`${BASE_URL}/api/AllocateClassroom/AddAllocateClassroom`, data),
    getAllocateClassrooms: () => axios.get(`${BASE_URL}/api/AllocateClassroom/GetAllAllocateClassrooms`),
    getAllocateClassroomById: (id) => axios.get(`${BASE_URL}/api/AllocateClassroom/GetAllocateClassroomById/${id}`),
    updateAllocateClassroomById: (id, data) => axios.put(`${BASE_URL}/api/AllocateClassroom/UpdateAllocateClassroom/${id}`, data),
    deleteAllocateClassroomById: (id) => axios.delete(`${BASE_URL}/api/AllocateClassroom/DeleteAllocateClassroom/${id}`),
};