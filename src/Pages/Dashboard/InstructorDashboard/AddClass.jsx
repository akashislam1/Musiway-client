import { useForm } from "react-hook-form";
import img from "../../../assets/hero/hero.jpg";
import { Helmet } from "react-helmet-async";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import TopBanner from "../../../Components/TopBanner";

const image_hosting_token = import.meta.env.VITE_Image_upload_Token;
const AddClass = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { register, handleSubmit, reset } = useForm();
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`;

  const onSubmit = (data) => {
    // Handle form submission
    const formData = new FormData();
    formData.append("image", data.image[0]);
    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((imgresponse) => {
        if (imgresponse.success) {
          const image = imgresponse.data.display_url;
          const newClass = {
            title: data.className,
            image: image,
            instructor: user.displayName,
            email: user.email,
            availableSeats: parseInt(data.availableSeats),
            price: parseFloat(data.price),
            status: "pending",
          };
          axiosSecure.post("/add-classes", newClass).then((data) => {
            if (data.data.insertedId) {
              reset();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Item added successfully",
                showConfirmButton: false,
                timer: 700,
              });
            }
          });
        }
      });
  };
  return (
    <div className="">
      <Helmet>
        <title>Add Class - Musiway School </title>
      </Helmet>
      <TopBanner img={img} title={"Add Class"}></TopBanner>
      <div className="my-10 md:my-20 min-h-screen px-3">
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto">
          <div className="mb-4 md:flex gap-5">
            <div className="mb-4 space-y-4">
              <label htmlFor="className" className="text-gray-700">
                Class Name
              </label>
              <input
                type="text"
                id="className"
                {...register("className")}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
              />
            </div>
            <div className="mb-4 space-y-4">
              <label htmlFor="classImage" className="block text-gray-700">
                Class Image
              </label>
              <input
                {...register("image", { required: true })}
                type="file"
                id="classImage"
                accept="image/*"
                className="file-input file-input-bordered w-full max-w-xs"
              />
            </div>
          </div>

          <div className="mb-4 md:flex gap-5">
            <div className="mb-4 space-y-4">
              <label htmlFor="instructorName" className="text-gray-700">
                Instructor Name
              </label>
              <input
                type="text"
                id="instructorName"
                value={user.displayName}
                readOnly
                className="w-full px-3 py-2 border border-gray-300 rounded bg-gray-100"
              />
            </div>
            <div className="mb-4 space-y-4">
              <label htmlFor="instructorEmail" className="text-gray-700">
                Instructor Email
              </label>
              <input
                type="email"
                id="instructorEmail"
                value={user.email}
                readOnly
                className="w-full px-3 py-2 border border-gray-300 rounded bg-gray-100"
              />
            </div>
          </div>

          <div className=" grid md:grid-cols-2 gap-5">
            <div className="mb-4 space-y-4">
              <label htmlFor="availableSeats" className="text-gray-700">
                Available Seats
              </label>
              <input
                type="number"
                id="availableSeats"
                {...register("availableSeats")}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
              />
            </div>
            <div className="mb-4 space-y-4">
              <label htmlFor="price" className="text-gray-700">
                Price
              </label>
              <input
                type="number"
                id="price"
                {...register("price")}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
              />
            </div>
          </div>

          <button
            type="submit"
            className="bg-[#B38B37] py-3 px-4 rounded-md font-semibold hover:bg-black border-b-4 w-full border-[#B38B37] duration-300 text-white"
          >
            Add Class
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddClass;
