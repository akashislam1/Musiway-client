import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useMyclass = () => {
  const [axiosSecure] = useAxiosSecure();

  const { user } = useAuth();
  const {
    data: myClasses = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["myClasses", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/myClasses?email=${user?.email}`);
      return res.data;
    },
  });
  return [myClasses, isLoading, refetch];
};

export default useMyclass;
