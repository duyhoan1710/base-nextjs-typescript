import axios, { AxiosRequestConfig } from "axios";
import { getRefreshToken, getToken, setRefreshToken } from "src/Utils";

// config axios
const axiosClient = axios.create({
    baseURL: process.env.REACT_APP_API_URL,

    headers: {
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
    },
});

axiosClient.interceptors.request.use((config: AxiosRequestConfig): AxiosRequestConfig => {
    return {
        ...config,
        headers: {
            Authorization: `Bearer ${getToken()}`,
        },
    };
});

axiosClient.interceptors.response.use(
    (response) => {
        if (response && response.data) {
            return response;
        }
        return response;
    },
    async (error: any) => {
        if (error.response && error.response.status === 401) {
            const refreshTk = getRefreshToken();

            if (refreshTk) {
                const refreshTokenBody = { refreshTk };
                const res = await axios.post("/auth/refresh-token", refreshTokenBody);
                if (res.status === 200) {
                    setRefreshToken(res.data);
                } else {
                    // logout
                }
            } else {
                // logout
            }
        }
        throw error;
    }
);

export default axiosClient;
