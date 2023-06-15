import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BACKEND_API;

export const SUBJECTAPI = {
    saveSubject: (data) => axios.post(`${BASE_URL}/api/Subject/AddSubject`, data),
    getSubjects: () => axios.get(`${BASE_URL}/api/Subject/GetAllSubjects`),
    getSubjectById: (id) => axios.get(`${BASE_URL}/api/Subject/GetSubjectById/${id}`),
    updateSubjectById: (id, data) => axios.put(`${BASE_URL}/api/Subject/UpdateSubject/${id}`, data),
    deleteSubjectById: (id) => axios.delete(`${BASE_URL}/api/Subject/DeleteSubject/${id}`),
};