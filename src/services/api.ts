import axios from "axios";
import { getToken, removeToken } from "../utils/token";

export const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL || "http://localhost:3000",
});

api.interceptors.request.use((config) => {
    const token = getToken();
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
});

api.interceptors.response.use(
    (res) => res,
    (err) => {
        // Si token expiró o inválido
        if (err?.response?.status === 401) {
            removeToken();
            // Por ahora simple, luego lo haremos más elegante con router
            window.location.href = "/login";
        }
        return Promise.reject(err);
    }
);
