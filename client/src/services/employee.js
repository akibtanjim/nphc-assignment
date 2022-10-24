import axios from "axios";

const API_BASE_URL = `/backend/api/v1`;

export const getEmployees = async (
  page = 1,
  limit = 10,
  minSalary,
  maxSalary
) => {
  return axios.get(
    `${API_BASE_URL}/employees?page=${page}&limit=${limit}${
      minSalary ? `&minSalary=${minSalary}` : ""
    }${maxSalary ? `&maxSalary=${maxSalary}` : ""}`
  );
};

export const bulkUploadEmployee = async (formData) => {
  return axios.post(`${API_BASE_URL}/employees/upload`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const editEmployee = async (data, id) => {
  return axios.put(`${API_BASE_URL}/employees/${id}`, data);
};

export const deleteEmployee = async (id) => {
  return axios.delete(`${API_BASE_URL}/employees/${id}`);
};
