import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const usePayment = () => {
  const [axiosSecure] = useAxiosSecure();

  const { user } = useAuth();
  const { data: paymentHistory = [], isLoading: loading } = useQuery({
    queryKey: ["paymentHistory"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/enrolled-class?email=${user?.email}`);
      return res.data;
    },
  });
  return [paymentHistory, loading];
};

export default usePayment;
