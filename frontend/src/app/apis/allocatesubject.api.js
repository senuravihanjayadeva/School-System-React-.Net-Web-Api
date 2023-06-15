import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BACKEND_API;

export const ALLOCATESUBJECTAPI = {
    saveAllocateSubject: (data) => axios.post(`${BASE_URL}/api/AllocateSubject/AddAllocateSubject`, data),
    getAllocateSubjects: () => axios.get(`${BASE_URL}/api/AllocateSubject/GetAllAllocateSubjects`),
    getAllocateSubjectById: (id) => axios.get(`${BASE_URL}/api/AllocateSubject/GetAllocateSubjectById/${id}`),
    updateAllocateSubjectById: (id, data) => axios.put(`${BASE_URL}/api/AllocateSubject/UpdateAllocateSubject/${id}`, data),
    deleteAllocateSubjectById: (id) => axios.delete(`${BASE_URL}/api/AllocateSubject/DeleteAllocateSubject/${id}`),
};