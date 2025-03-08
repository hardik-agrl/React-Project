import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = !!localStorage.getItem("token"); // Check authentication
  return isAuthenticated ? children : <Navigate to="/auth" />;
};

export default ProtectedRoute;
