import useClassesData from "../../Hooks/useClassesData";
import img from "../../assets/dram.jpg";
import Loader from "../../Components/Loader";
import TopBanner from "../../Components/TopBanner";
import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import { useNavigate } from "react-router-dom";
import useAdmin from "../../Hooks/useAdmin";
import useInstructor from "../../Hooks/useInstructor";
import ClassesCard from "./ClassesCard";

const ClassesPage = () => {
  const [classesData, loading] = useClassesData();
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();

  const approvedClass = classesData.filter(
    (classes) => classes.status === "approved"
  );
  const navigate = useNavigate();
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();

  // handle Selected classes
  const handleSelect = (data) => {
    if (user && user.email) {
      data.selectedClass = "selected";
      const selectItem = {
        image: data.image,
        email: user.email,
        classId: data._id,
        title: data.title,
        instructor: data.instructor,
        availableSeats: data.availableSeats,
        price: data.price,
        selectedClass: data.selectedClass,
      };

      axiosSecure.post("/selected-classes", selectItem).then((data) => {
        if (data.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Class selected successfully",
            showConfirmButton: false,
            timer: 700,
          });
        }
      });
    } else {
      return (
        navigate("/login"),
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Please Login !",
          showConfirmButton: false,
          timer: 1000,
        })
      );
    }
  };

  return (
    <>
      {loading ? (
        <Loader></Loader>
      ) : (
        <div>
          <Helmet>
            <title>Classes - Musiway School </title>
          </Helmet>
          <TopBanner img={img} title={"Our Classes"}></TopBanner>
          {loading ? (
            <Loader></Loader>
          ) : (
            <div className="grid md:grid-cols-4 gap-4  bg-slate-200 px-3 md:px-10 py-10">
              {approvedClass?.map((classData) => (
                <ClassesCard
                  key={classData._id}
                  classData={classData}
                  isAdmin={isAdmin}
                  isInstructor={isInstructor}
                  handleSelect={handleSelect}
                ></ClassesCard>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default ClassesPage;
