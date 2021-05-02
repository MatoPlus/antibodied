import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

const path = "/posts";

export const getPosts = (id) => axios.get(`${path}/${id}`);
