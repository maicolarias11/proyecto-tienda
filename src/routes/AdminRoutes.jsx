import { Navigate } from "react-router-dom";
import { isAdmin } from "../helpers/auth";

// eslint-disable-next-line react/prop-types
const AdminRoutes = ({ children }) => {
    return isAdmin() ? children: <Navigate to="/" />;
};

export default AdminRoutes