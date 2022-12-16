import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const ReqAuth = ({ children }) => {
  const isAuth = useSelector((state) => state.AuthReducer.isAuth);
  const location = useLocation();
  if (!isAuth) {
    return (
      <Navigate to={"/signin"} replace={true} state={{ from: location }} />
    );
  }
  return children;
};

export default ReqAuth;
