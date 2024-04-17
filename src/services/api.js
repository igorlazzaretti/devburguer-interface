import axios from "axios";

const apiDevBurguer = axios.create({
  baseURL: "http://localhost:3001",
});

export default apiDevBurguer;
