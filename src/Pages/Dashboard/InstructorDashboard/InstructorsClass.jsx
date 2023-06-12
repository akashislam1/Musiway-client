import { Helmet } from "react-helmet-async";
import TopBanner from "../../../Components/TopBanner";
import img from "../../../assets/hero/hero.jpg";
import useClassesData from "../../../Hooks/useClassesData";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import Modal from "../../../Components/Modal";
import useFeedbacks from "../../../Hooks/useFeedbacks";
import { Rating } from "@smastrom/react-rating";
import { FaCheckCircle } from "react-icons/fa";

const InstructorsClass = () => {
  const { user } = useAuth();
  // load classes data from useClassesData
  const [classesData] = useClassesData();
  const [axiosSecure] = useAxiosSecure();
  const myClasses = classesData.filter((data) => data?.email === user?.email);
  // load feeback data from useFeedbacks
  const [feedBacks] = useFeedbacks();

  const handleUpdate = (data) => {
    axiosSecure
      .put(`/update-class/${data?._id}`, data)
      .then((response) => {
        if (response.data.modifiedCount > 0) {
          window.location.reload();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Update successfull !",
            showConfirmButton: true,
            timer: 1000,
          });
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      {myClasses.length > 0 ? (
        <>
          <div>
            <Helmet>
              <title>My Classes - Musiway School </title>
            </Helmet>
            <TopBanner img={img} title={"My Classes"}></TopBanner>
            <div className="overflow-x-auto px-3 md:px-10 pb-10 my-10">
              <h4 className="font-bold text-xl">
                Total Enrolled Students: {/* Todo: */}
              </h4>
              <table className="table">
                {/* head */}
                <thead className="text-xl text-black">
                  <tr>
                    <th>#</th>
                    <th>Class Image</th>
                    <th>Class Name</th>
                    <th>Available Seats</th>
                    <th>Price</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody className="text-xl">
                  {myClasses?.map((data, i) => (
                    <tr key={data._id}>
                      <th>{i + 1}</th>
                      <td>
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={data?.image} alt="" />
                        </div>
                      </td>
                      <td>{data?.title}</td>
                      <td>{data?.availableSeats}</td>
                      <td>${data?.price}</td>
                      <td
                        className={
                          data?.status === "approved"
                            ? "text-green-600"
                            : "text-red-500"
                        }
                      >
                        {data?.status}
                      </td>
                      <td>
                        <button
                          className="btn normal-case hover:bg-black btn-sm text-white bg-[#cc9724]"
                          onClick={() => window.my_modal_1.showModal()}
                        >
                          Update
                        </button>
                        {/* Open the modal using ID.showModal() method */}
                        <Modal handleUpdate={handleUpdate} data={data}></Modal>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="px-3 md:px-10 pb-10 my-10">
            <h2 className="text-2xl font-bold text-black">Feedback:</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {feedBacks?.map((data) => (
                <div key={data._id} className="card  bg-base-100 shadow-xl">
                  <div className="card-body">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <img
                          className="rounded-full w-10 h-10 border border-black"
                          src={data.photo}
                          alt=""
                        />
                        <div className="">
                          <h3 className="font-bold from-black">
                            {data.admin}
                            <FaCheckCircle className="inline-block ml-2"></FaCheckCircle>
                          </h3>
                          <p className="text-sm">{data.date}</p>
                        </div>
                      </div>
                      <Rating
                        style={{ maxWidth: 100 }}
                        value={Math.ceil(data.rating || 0)}
                        readOnly
                      />
                    </div>
                    <p>{data.message}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          ;
        </>
      ) : (
        <div className="text-center my-10 text-3xl font-bold text-black">
          <p>No Classes Available</p>
        </div>
      )}
    </>
  );
};

export default InstructorsClass;
