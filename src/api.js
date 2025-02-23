import axios from "axios";


// Create an Axios instance with the base URL from environment variables
const api = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL, // Using my environment variable
});


//Request inteceptor to add the access token to headers
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("access_token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);


// Response inteceptor to handle token refresh
api.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        // Check if the error is due to an expired access token
        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true; // Mark the request as retried

            try {
                // Attempt to refresh the access token using the refresh token
                const refreshToken = localStorage.getItem("refresh_token");
                const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/auth/jwt/refresh/`, {
                    refresh: refreshToken,
                });

                // Update the access token in localStorage
                localStorage.setItem("access_token", response.data.access);

                // Retry the original request with the new access token
                originalRequest.headers.Authorization = `Bearer ${response.data.access}`;
                return api(originalRequest);
            } catch (err) {
                // If refresh fails, clear tokens and redirect to login
                localStorage.removeItem("access_token");
                localStorage.removeItem("refresh_token");
                window.location.href = "/login";
            }
        }

        return Promise.reject(error);
    }
);


export default api;