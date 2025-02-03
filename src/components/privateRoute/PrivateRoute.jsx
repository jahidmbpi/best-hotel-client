import { useContext } from "react";
import { AuthContext } from "../Provider";
import { useNavigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  console.log(user);

  if (user) {
    return children;
  } else {
    return navigate("/login");
  }
};

export default PrivateRoute;
