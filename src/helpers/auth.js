import { jwtDecode } from "jwt-decode"

export const getToken = () => {
    return localStorage.getItem("token");
};

export const getUserRole = () => {
    const token = getToken();
    if (!token) return null;

    try {
        const decode = jwtDecode(token);
        return decode.role || null;
    } catch (error) {
        console.error("Error al obtener el token:", error);
        return null;
    }
};

export const isAdmin = () => {
    return getUserRole() === "admin";
};