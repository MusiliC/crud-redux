import axios from "axios";

const url = "http://localhost:5000/user";

export const fetchUsers = () => axios.get(url)
export const deleteOneUser = (id) => axios.delete(`${url}/${id}`);
export const addUser = (user) => axios.post(url, user)
export const getUser = (id) => axios.get(`${url}/${id}`)
export const updateUser = (id, user) => axios.put(`${url}/${id}`, user);