import Swal from "sweetalert2";
import img from "../../../assets/hero/hero.jpg";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import TopBanner from "../../../Components/TopBanner";
import { Helmet } from "react-helmet-async";
import Loader from "../../../Components/Loader";
const ManageUsers = () => {
  const [axiosSecure] = useAxiosSecure();

  const {
    data: users = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/all-users`);
      return res.data;
    },
  });

  // handle make admin
  const handleMakeAdmin = (user) => {
    fetch(`${import.meta.env.VITE_HTTP}/users/admin/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is an Admin Now!`,
            showConfirmButton: false,
            timer: 700,
          });
        }
      });
  };
  // handle make instructor
  const handleMakeInstructor = (user) => {
    fetch(`${import.meta.env.VITE_HTTP}/users/instructor/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is an Instructor Now!`,
            showConfirmButton: false,
            timer: 700,
          });
        }
      });
  };

  return (
    <>
      {isLoading ? (
        <Loader></Loader>
      ) : (
        <div>
          <Helmet>
            <title>Manage Users - Musiway School </title>
          </Helmet>
          <TopBanner img={img} title={"All Users"}></TopBanner>
          <div className="overflow-x-auto md:w-2/3 mx-auto my-10">
            <table className="table">
              {/* head */}
              <thead className="font-bold text-xl">
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Role</th>
                  <th className="text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {users?.map((user, i) => (
                  <tr key={user._id}>
                    <th>{i + 1}</th>
                    <td>
                      <div>
                        <div className="font-bold">{user.name}</div>
                        <div className="text-sm opacity-50">{user.email}</div>
                      </div>
                    </td>
                    <td>
                      {(user.role === "admin" && (
                        <p className="font-bold text-xl"> Admin</p>
                      )) ||
                        (user.role === "instructor" && (
                          <p className="font-bold text-xl"> Instructor</p>
                        )) || <p className="font-bold"> Student</p>}
                    </td>
                    <td>
                      <div>
                        <div className="flex flex-col gap-2">
                          <button
                            onClick={() => handleMakeAdmin(user)}
                            className={`bg-[#B38B37] py-2 px-4 rounded-md font-semibold hover:bg-black border-b-4 border-[#B38B37] duration-300 text-white ${
                              user.role === "admin"
                                ? "opacity-30 cursor-not-allowed"
                                : ""
                            }`}
                            disabled={user.role === "admin"}
                          >
                            Make Admin
                          </button>
                          <button
                            onClick={() => handleMakeInstructor(user)}
                            className={`bg-[#B38B37] py-2 px-4 rounded-md font-semibold hover:bg-black border-b-4 border-[#B38B37] duration-300 text-white ${
                              user.role === "instructor" ||
                              user.role === "admin"
                                ? "opacity-30 cursor-not-allowed"
                                : ""
                            }`}
                            disabled={user.role === "instructor"}
                          >
                            Make Instructor
                          </button>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
};

export default ManageUsers;
