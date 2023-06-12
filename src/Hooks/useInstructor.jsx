import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useInstructor = () => {
  const { user, loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();

  const { data: isInstructor, isLoading: isInstructorLoading } = useQuery(
    ["isInstructor", user?.email],
    async () => {
      if (user && user?.email) {
        const res = await axiosSecure.get(`/users/instructor/${user?.email}`);
        return res?.data?.instructor;
      }
      return false;
    },
    {
      enabled: !loading,
    }
  );

  return [isInstructor, isInstructorLoading];
};

export default useInstructor;
