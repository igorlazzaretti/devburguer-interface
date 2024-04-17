// import axios from "axios";

// const apiDevBurguer = axios.create({
//   baseURL: "http://localhost:3001",
// });

// apiDevBurguer.interceptors.request.use(async (config) => {
//   const userData = await localStorage.getItem("devburger:userData");
//   const token = userData && JSON.parse(userData).token;
//   config.headers.Authorization = `Bearer ${token}`;
//   return config;
// });

// export default apiDevBurguer;
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001",
});

api.defaults.headers.common['Authorization'] = "87d386aaa6307cdf5106e1c16e418a13";

export default api;