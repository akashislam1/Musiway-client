import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useStudent = () => {
  const { user, loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();

  const { data: isStudent, isLoading: isStudentLoading } = useQuery(
    ["isStudent", user?.email],
    async () => {
      if (user && user?.email) {
        const res = await axiosSecure.get(`/users/student/${user?.email}`);
        return res?.data?.student;
      }
      return false;
    },
    {
      enabled: !loading,
    }
  );

  return [isStudent, isStudentLoading];
};

export default useStudent;
