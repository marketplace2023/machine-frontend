import axios from "axios";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:3000",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

// Request interceptor
apiClient.interceptors.request.use(
  (config) => {
    // Aquí se puede agregar token de autenticación si es necesario
    // const token = localStorage.getItem('token');
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// Response interceptor
apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Manejo de errores global
    if (error.response) {
      // El servidor respondió con un código de error
      console.error("Error de respuesta:", error.response.data);
    } else if (error.request) {
      // La petición fue hecha pero no hubo respuesta
      console.error("Error de red:", error.message);
    } else {
      // Algo pasó al configurar la petición
      console.error("Error:", error.message);
    }
    return Promise.reject(error);
  },
);

export default apiClient;
