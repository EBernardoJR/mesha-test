import { Navigate } from "react-router-dom";

interface IPrivateRoute {
  children: JSX.Element;
}

const PrivateRoute = ({ children }: IPrivateRoute) => {
  const hasToken = localStorage.getItem("token");
  return children
  //return hasToken ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
