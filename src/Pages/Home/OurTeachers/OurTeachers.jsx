import { PropagateLoader } from "react-spinners";
import PrimaryBtn from "../../../Components/PrimaryBtn";
import SectionTitle from "../../../Components/SectionTitle";
import useClassesData from "../../../Hooks/useClassesData";
import TeacherCard from "./TeacherCard";

const OurTeachers = () => {
  const [classesData, loading] = useClassesData();

  return (
    <>
      {loading ? (
        <div className="flex justify-center mt-8 items-center md:min-h-[calc(100vh-100px)]">
          <PropagateLoader color="#e6d112" />
        </div>
      ) : (
        <div className="px-3 md:px-10 pb-10 overflow-x-hidden overflow-y-hidden">
          <SectionTitle
            subTitle={"OUR TEACHERS"}
            title={"Meet Our Instructor"}
          ></SectionTitle>
          <div
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
            className="grid md:grid-cols-4 gap-4 mt-10 "
          >
            {classesData?.slice(0, 8).map((classData) => (
              <TeacherCard
                key={classData._id}
                classData={classData}
              ></TeacherCard>
            ))}
          </div>
          <div className="text-center mt-8">
            <PrimaryBtn text={"SEE ALL INSTRUCTOR"}></PrimaryBtn>
          </div>
        </div>
      )}
    </>
  );
};

export default OurTeachers;
