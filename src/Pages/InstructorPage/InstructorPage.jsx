import InstructorCard from "./InstructorCard";
import img from "../../assets/dram.jpg";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../Components/SectionTitle";
import useClassesData from "../../Hooks/useClassesData";
import PrimaryBtn from "../../Components/PrimaryBtn";
import Loader from "../../Components/Loader";
import TopBanner from "../../Components/TopBanner";

const InstructorPage = () => {
  const [classesData, loading] = useClassesData();
  return (
    <>
      {loading ? (
        <Loader></Loader>
      ) : (
        <div>
          <Helmet>
            <title>Instructors - Musiway School </title>
          </Helmet>
          <TopBanner img={img} title={"Our Instructors"}></TopBanner>
          <div className="px-3 md:px-10 pb-10">
            <SectionTitle
              subTitle={"OUR TEACHERS"}
              title={"Meet Our Instructor"}
            ></SectionTitle>
            <div className="grid md:grid-cols-4 gap-4 mt-10 ">
              {classesData?.slice(0, 8).map((classData) => (
                <InstructorCard
                  key={classData._id}
                  classData={classData}
                ></InstructorCard>
              ))}
            </div>
            <div className="text-center mt-8">
              <PrimaryBtn text={"SEE ALL INSTRUCTOR"}></PrimaryBtn>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default InstructorPage;
