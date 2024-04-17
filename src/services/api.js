import axios from "axios";

const apiDevBurguer = axios.create({
  baseURL: "http://localhost:3001",
});

apiDevBurguer.interceptors.request.use(async (config) => {
  const userData = await localStorage.getItem("codeburger:userData");
  const token = userData && JSON.parse(userData).token;
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default apiDevBurguer;
