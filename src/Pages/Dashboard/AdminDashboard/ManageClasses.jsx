import { Helmet } from "react-helmet-async";
import TopBanner from "../../../Components/TopBanner";
import img from "../../../assets/hero/hero.jpg";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useState } from "react";
import FeedbackModal from "../../../Components/FeedbackModal";

const ManageClasses = () => {
  const [axiosSecure] = useAxiosSecure();
  const [selectedData, setSelectedData] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  // all classes data
  const { data: classesData = [], refetch } = useQuery({
    queryKey: ["classesData"],
    queryFn: async () => {
      const res = await axiosSecure.get(`${import.meta.env.VITE_HTTP}/classes`);
      return res.data;
    },
  });

  // handle approve
  const handleApprove = (data) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to approve this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, approve it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .patch(`/approve-classes/${data?._id}`, {
            status: "approved",
          })
          .then((response) => {
            if (response.data.modifiedCount > 0) {
              refetch();
              Swal.fire("Approve!", "Your file has been approved.", "success");
            }
          })
          .catch((error) => {
            console.error(error);
          });
      }
    });
  };

  // handle deny
  const handleDeny = (data) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to deny this!!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, deny it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .patch(`/deny-class/${data?._id}`)
          .then((response) => {
            if (response.data.modifiedCount > 0) {
              refetch();
              Swal.fire("Denied!", "Your file has been denied.", "success");
            }
          })
          .catch((error) => {
            console.error(error);
          });
      }
    });
  };

  // handle feedback
  const handleFeedback = (data) => {
    axiosSecure
      .post("/feedback", data)
      .then((data) => {
        if (data.data.insertedId) {
          location.reload();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Feedbavk message send successfully",
            showConfirmButton: false,
            timer: 2000,
          });
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const openModal = (data) => {
    setSelectedData(data);
    setIsOpen(true);
  };

  return (
    <div>
      <Helmet>
        <title>Manage Classes - Musiway School</title>
      </Helmet>
      <TopBanner img={img} title={"Manage Classes"}></TopBanner>
      <div className="overflow-x-auto px-3 md:px-10 pb-10 my-10">
        <table className="table">
          {/* head */}
          <thead className="text-xl text-black">
            <tr>
              <th>#</th>
              <th>Class Image</th>
              <th>Class Name</th>
              <td>Instructor</td>
              <th>Available seats</th>
              <th className="text-right">Price</th>
              <th className="text-center">Status</th>
              <th>Action</th>
              <th>Feedback</th>
            </tr>
          </thead>
          <tbody className="text-xl">
            {classesData?.map((data, i) => (
              <tr key={data._id}>
                <th>{i + 1}</th>
                <td>
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={data?.image} alt="" />
                  </div>
                </td>
                <td>{data?.title}</td>
                <td>
                  <div>
                    <h3 className="">{data?.instructor}</h3>
                    <p className="text-sm opacity-50">{data?.email}</p>
                  </div>
                </td>
                <td>{data?.availableSeats}</td>
                <td className="text-right">${data?.price}</td>
                <td
                  className={
                    data?.status === "approved"
                      ? "text-green-600"
                      : "text-red-500"
                  }
                >
                  {data?.status || "__"}
                </td>
                <td className="flex flex-col gap-3">
                  <button
                    onClick={() => handleApprove(data)}
                    className={`text-white px-4 bg-green-600 hover:bg-red-800 py-1 rounded-md ${
                      data?.status === "approved"
                        ? "opacity-30 cursor-not-allowed"
                        : ""
                    }`}
                    disabled={data?.status === "approved"}
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => handleDeny(data)}
                    className={`text-white px-4 bg-red-600 hover:bg-red-800 py-1 rounded-md ${
                      data?.status === "denied"
                        ? "opacity-30 cursor-not-allowed"
                        : ""
                    }`}
                    disabled={data?.status === "denied"}
                  >
                    Deny
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => openModal(data)}
                    className="bg-[#B38B37] text-sm md:text-base py-2 px-4 rounded-md hover:bg-black  duration-300 text-white"
                  >
                    Send Feedback
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {isOpen && (
        <FeedbackModal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          data={selectedData}
          handleFeedback={handleFeedback}
        />
      )}
    </div>
  );
};

export default ManageClasses;
