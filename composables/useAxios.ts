// composables/useAxios.ts
import type { AxiosInstance } from "axios";
import axios from "axios";

// import axios, type { AxiosInstance } from "axios";

// 创建 Axios 实例
const axiosInstance: AxiosInstance = axios.create({
  baseURL: "https://api.github.com",
  // 你可以在这里添加更多的全局配置
});

// 添加请求拦截器
axiosInstance.interceptors.request.use((config) => {
  // 这里添加你的认证 token 或其他逻辑
  // const token = localStorage.getItem("token");
  const token = "123";
  // if (token) {
  //   config.headers.Authorization = `Bearer ${token}`;
  // }
  return config;
});

// 导出 composable 使用的函数
export const useAxios = () => {
  return axiosInstance;
};
