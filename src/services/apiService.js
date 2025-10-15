// src/services/apiService.js
import axios from "axios";

const BASE_URL = "http://0.0.0.0:8000/api/";

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// 🟢 Get All
export const getAll = async (endpoint, params = {}) => {
  console.log(params);
  
  const response = await api.get(`/${endpoint}`, { params });  
  return response.data.data;
};

// 🟢 Get One
export const getOne = async (endpoint, id) => {
  const response = await api.get(`/${endpoint}/${id}`);
  return response.data.data;
};

// 🟡 Create
export const createItem = async (endpoint, data) => {
  console.log("ddd",data);
  
  const response = await api.post(`/${endpoint}`, data);
  return response.data.data;
};

// 🔵 Update
export const updateItem = async (endpoint, id, data) => {
  const response = await api.put(`/${endpoint}/${id}`, data);
  return response.data.data;
};

// 🔴 Delete
export const deleteItem = async (endpoint, id) => {
  const response = await api.delete(`/${endpoint}/${id}`);
  return response.data.data;
};
