import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useFeedbacks = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { data: feedBacks = [] } = useQuery({
    queryKey: ["feedBacks"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/feedback/${user?.email}`);
      return res.data;
    },
  });

  return [feedBacks];
};

export default useFeedbacks;
