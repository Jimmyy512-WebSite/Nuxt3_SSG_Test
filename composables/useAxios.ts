import type { AxiosInstance } from 'axios'
import axios from 'axios'

let axiosInstance: AxiosInstance;

export const useAxios = () => {
  if (!axiosInstance) {
    const publicConfig = useRuntimeConfig().public
    // 創建 Axios 實例
    axiosInstance = axios.create({
      baseURL: publicConfig.PUBLIC_API_URL,
      // 你可以在這裡添加更多的全局配置
    })

    // 添加請求攔截器
    axiosInstance.interceptors.request.use((config) => {
      // 這裡添加你的認證 token 或其他邏輯
      // const token = localStorage.getItem("token")
      // const token = "123"
      // 塞入請求頭
      // if (token) {
      //   config.headers.Authorization = `Bearer ${token}`
      // }
      return config
    })
  }

  // 導出 composable 使用的函數
  return axiosInstance
}
