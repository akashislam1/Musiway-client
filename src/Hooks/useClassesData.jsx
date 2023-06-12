import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useClassesData = () => {
  const {
    data: classesData = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["classesData"],
    queryFn: async () => {
      const res = await axios.get(`${import.meta.env.VITE_HTTP}/classes`);
      return res.data;
    },
  });

  return [classesData, loading, refetch];
};

export default useClassesData;
