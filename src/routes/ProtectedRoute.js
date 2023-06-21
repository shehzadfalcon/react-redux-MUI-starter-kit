import useAuth from "../hooks/useAuth";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({children}) => {
  const auth = useAuth();
  return auth ? <Navigate to="/" /> : children
}

export default ProtectedRoute;