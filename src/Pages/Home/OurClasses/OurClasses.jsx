import { PropagateLoader } from "react-spinners";
import PrimaryBtn from "../../../Components/PrimaryBtn";
import SectionTitle from "../../../Components/SectionTitle";
import useClassesData from "../../../Hooks/useClassesData";
import ClassCard from "./ClassCard";

const OurClasses = ({ isDarkTheme }) => {
  const [classesData, loading] = useClassesData();
  return (
    <>
      {loading ? (
        <div className="flex justify-center mt-8 items-center md:min-h-[calc(100vh-100px)]">
          <PropagateLoader color="#e6d112" />
        </div>
      ) : (
        <div
          className={`${
            isDarkTheme ? "bg-gray-900" : "bg-slate-100"
          }  px-3 md:px-10 pb-10`}
        >
          <SectionTitle
            subTitle={"OUR CLASS"}
            title={"Our Music Class"}
            text={
              "Welcome to our music class! In this course, we will embark on an exciting journey through the wonderful world of music. Whether you're a complete beginner or have some musical experience."
            }
          ></SectionTitle>

          <div
            className="grid md:grid-cols-3 gap-4 mt-10 overflow-x-hidden overflow-y-hidden"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            {classesData?.slice(0, 6).map((classData) => (
              <ClassCard
                key={classData._id}
                classData={classData}
                isDarkTheme={isDarkTheme}
              ></ClassCard>
            ))}
          </div>
          <div className="text-center mt-8">
            <PrimaryBtn text={"View All Classes"}></PrimaryBtn>
          </div>
        </div>
      )}
    </>
  );
};

export default OurClasses;
