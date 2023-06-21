import useAuth from "../hooks/useAuth";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {
  const auth = useAuth();
  return auth ? children : <Navigate to="/" />
}

export default PrivateRoute;