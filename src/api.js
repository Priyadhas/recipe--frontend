import axios from 'axios';

const API_URL = 'http://localhost:5000';

export const register = (data) => axios.post(`${API_URL}/users/register`, data);
export const login = (data) => axios.post(`${API_URL}/users/login`, data);
export const getUser = (id) => axios.get(`${API_URL}/users/${id}`);
export const updateUser = (id, data) => axios.put(`${API_URL}/users/${id}`, data);
export const deleteUser = (id) => axios.delete(`${API_URL}/users/${id}`);

export const getRecipes = () => axios.get(`${API_URL}/recipes`);
export const getRecipeById = (id) => axios.get(`${API_URL}/recipes/${id}`);
export const sendRecipeEmail = (data) => axios.post(`${API_URL}/recipes/send-recipe`, data);
// import axios from 'axios';

// const API_URL = 'http://localhost:5000';

// const getToken = () => localStorage.getItem('token');

// export const register = (data) => axios.post(`${API_URL}/users/register`, data);
// export const login = (data) => axios.post(`${API_URL}/users/login`, data);
// export const getUser = (id) => axios.get(`${API_URL}/users/${id}`, {
//   headers: { Authorization: `Bearer ${getToken()}` }
// });
// export const updateUser = (id, data) => axios.put(`${API_URL}/users/${id}`, data, {
//   headers: { Authorization: `Bearer ${getToken()}` }
// });
// export const deleteUser = (id) => axios.delete(`${API_URL}/users/${id}`, {
//   headers: { Authorization: `Bearer ${getToken()}` }
// });

// export const getRecipes = () => axios.get(`${API_URL}/recipes/alluser`, {
//   headers: { Authorization: `Bearer ${getToken()}` }
// });
// export const getRecipeById = (id) => axios.get(`${API_URL}/recipes/${id}`, {
//   headers: { Authorization: `Bearer ${getToken()}` }
// });
// export const sendRecipeEmail = (data) => axios.post(`${API_URL}/recipes/send-recipe`, data, {
//   headers: { Authorization: `Bearer ${getToken()}` }
// });
