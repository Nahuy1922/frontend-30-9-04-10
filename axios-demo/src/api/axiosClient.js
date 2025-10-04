import axios from "axios";

// Tạo instance với config chung
const axiosClient = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com", // API test miễn phí
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor
axiosClient.interceptors.request.use(
  (config) => {
    console.log("📤 Request:", config);
    // thêm token giả
    config.headers.Authorization = "Bearer fake-token";
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor
axiosClient.interceptors.response.use(
  (response) => {
    console.log("📥 Response:", response);
    return response.data; // chỉ trả về data
  },
  (error) => {
    if (error.response) {
      console.error("❌ Server error:", error.response.status);
    } else if (error.request) {
      console.error("⚠️ No response from server");
    } else {
      console.error("⚡ Request setup error:", error.message);
    }
    return Promise.reject(error);
  }
);

export default axiosClient;
