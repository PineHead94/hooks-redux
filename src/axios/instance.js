import axios from "axios";

const postsInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

postsInstance.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error)
);

postsInstance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

export { postsInstance };
