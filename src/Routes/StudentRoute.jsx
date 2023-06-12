import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useStudent from "../Hooks/useStudent";
import Loader from "../Components/Loader";

const StudentRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [isStudent, isStudentLoading] = useStudent();
  const location = useLocation();

  if (loading || isStudentLoading) {
    return <Loader></Loader>;
  } else if (user && isStudent) {
    return children;
  } else {
    return <Navigate to="/" state={{ from: location }} replace></Navigate>;
  }
};

export default StudentRoute;
