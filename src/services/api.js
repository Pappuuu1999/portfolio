// services/api.js
import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

export const fetchServices = () => axios.get(`${API_BASE_URL}/api/services`).then(res => res.data);
export const fetchProjects = () => axios.get(`${API_BASE_URL}/api/projects`).then(res => res.data);
