import axios from "axios";

const url = "http://localhost:5000/user";

export const fetchUsers = () => axios.get(url)
export const deleteOneUser = (id) => axios.delete(`${url}/${id}`);