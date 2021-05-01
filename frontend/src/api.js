import axios from "axios";

axios.defaults.baseURL = "http://localhost:5000";

const path = "/posts";

export const getPosts = (id) => axios.get(`${path}/${id}`);
