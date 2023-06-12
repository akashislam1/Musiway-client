import { Navigate, useLocation } from "react-router";
import useAuth from "../Hooks/useAuth";
import Loader from "../Components/Loader";
import useInstructor from "../Hooks/useInstructor";

const InstructorRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [isInstructor, isInstructorLoading] = useInstructor();
  const location = useLocation();

  if (loading || isInstructorLoading) {
    return <Loader></Loader>;
  } else if (user && isInstructor) {
    return children;
  } else {
    return <Navigate to="/" state={{ from: location }} replace></Navigate>;
  }
};

export default InstructorRoute;
