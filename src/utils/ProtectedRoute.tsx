import { useAppSelector } from "../store/hooks";
import { Navigate } from "react-router-dom";

interface Children {
  children: JSX.Element;
}

const ProtectedRoute = ({ children }: Children) => {
  const { isAuthenticated } = useAppSelector((state) => state.user);

  return isAuthenticated ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
