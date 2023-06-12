import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";
import img from "../../../assets/hero/hero.jpg";
import TopBanner from "../../../Components/TopBanner";
import Loader from "../../../Components/Loader";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import useMyclass from "../../../Hooks/useMyclass";

const MyClasses = () => {
  const [myClasses, isLoading, refetch] = useMyclass();
  const [axiosSecure] = useAxiosSecure();

  // handle delete class
  const handleDeleteClass = (data) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/delete-my-class/${data?._id}`).then((response) => {
          if (response.data.deletedCount > 0) {
            refetch();
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
          }
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
            <title>My Selected Class - Musiway School </title>
          </Helmet>
          <TopBanner img={img} title={"My Selected Class"}></TopBanner>
          {myClasses.length > 0 ? (
            <div className="overflow-x-auto px-3 md:px-10 pb-10 my-10">
              <table className="table">
                {/* head */}
                <thead className="text-xl text-black font-semibold">
                  <tr>
                    <th>
                      <label>#</label>
                    </th>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Instructor Name</th>
                    <th>Available seats</th>
                    <th>Price</th>
                    <th>Pay</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody className="text-xl text-black">
                  {myClasses?.map((data, index) => (
                    <tr key={data?._id}>
                      <th>
                        <label>{index + 1}</label>
                      </th>
                      <td>
                        <div>
                          <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                              <img
                                src={data.image}
                                alt="Avatar Tailwind CSS Component"
                              />
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>{data.title}</td>
                      <td>{data.instructor}</td>
                      <td>{data.availableSeats}</td>
                      <td>${data.price}</td>
                      <td>
                        <Link to={`/payment/${data._id}`}>
                          <button className="bg-[#B38B37] btn-sm px-4 rounded-md font-semibold hover:bg-black  duration-300 text-white">
                            Pay
                          </button>
                        </Link>
                      </td>
                      <td>
                        <button
                          onClick={() => handleDeleteClass(data)}
                          className={`btn normal-case hover:bg-black btn-sm text-white bg-red-600`}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="text-center my-10 text-3xl font-bold text-black">
              <p>No Classes Available</p>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default MyClasses;
