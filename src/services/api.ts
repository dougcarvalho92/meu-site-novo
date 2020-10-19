import axios from "axios";

const api = axios.create({
  baseURL: "https://meu-site-novo-backend.herokuapp.com/api/",
});

export default api;