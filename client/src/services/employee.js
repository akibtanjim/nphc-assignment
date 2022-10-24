import axios from "axios";

const API_BASE_URL = `/backend/api/v1`;

export const getEmployees = async (page = 1, limit = 10) => {
  return axios.get(`${API_BASE_URL}/employees?page=${page}&limit=${limit}`);
};
