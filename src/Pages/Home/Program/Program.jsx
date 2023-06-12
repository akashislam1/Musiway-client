import { Link } from "react-router-dom";
import SectionTitle from "../../../Components/SectionTitle";
import image1 from "../../../assets/program/image1.jpg";
import image2 from "../../../assets/program/image2.jpg";
import image3 from "../../../assets/program/image3.jpg";
import { FaArrowRight } from "react-icons/fa";
import PrimaryBtn from "../../../Components/PrimaryBtn";

const Program = () => {
  return (
    <div className="px-3 md:px-10 pb-10 bg-slate-100">
      <SectionTitle
        subTitle={"OUR PROGRAM"}
        title={"Grade Programs"}
      ></SectionTitle>
      <div className="grid md:grid-cols-3 gap-4 mt-10 overflow-x-hidden overflow-y-hidden">
        {/* Card 1 */}
        <div className="bg-white p-8 flex flex-col justify-between gap-5 relative rounded-xl hover:shadow-xl">
          <img
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
            className="w-full h-full rounded-xl"
            src={image1}
            alt=""
          />
          <div className="space-y-3">
            <h3
              data-aos="fade-right"
              data-aos-easing="linear"
              data-aos-duration="1500"
              className="text-3xl font-bold text-black"
            >
              Preschool
            </h3>
            <p>
              Healing Through Sound Music therapy utilizes the power of music to
              and....
            </p>

            <div>
              <Link className="text-[#B38B37] font-semibold">
                READ MORE{" "}
                <FaArrowRight className="inline-block ml-5"></FaArrowRight>
              </Link>
            </div>
          </div>
        </div>
        {/* Card 2 */}
        <div className="bg-white p-8 flex flex-col justify-between gap-5 relative rounded-xl hover:shadow-xl">
          <img
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="1500"
            className="w-full h-full rounded-xl"
            src={image2}
            alt=""
          />
          <div className="space-y-3">
            <h3
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1500"
              className="text-3xl font-bold text-black"
            >
              Schooler
            </h3>
            <p>
              Music has been a source of inspiration and creativity for
              centuries, captivating the hearts....
            </p>

            <div>
              <Link className="text-[#B38B37] font-semibold">
                READ MORE{" "}
                <FaArrowRight className="inline-block ml-5"></FaArrowRight>
              </Link>
            </div>
          </div>
        </div>
        {/* Card 3 */}
        <div className="bg-white p-8 flex flex-col justify-between gap-5 relative rounded-xl hover:shadow-xl">
          <img
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
            className="w-full h-full rounded-xl"
            src={image3}
            alt=""
          />
          <div className="space-y-3">
            <h3
              data-aos="fade-left"
              data-aos-easing="linear"
              data-aos-duration="1500"
              className="text-3xl font-bold text-black"
            >
              Teenager
            </h3>
            <p>
              Music education has been proven to enhance academic performance
              and....
            </p>

            <div>
              <Link className="text-[#B38B37] font-semibold">
                READ MORE{" "}
                <FaArrowRight className="inline-block ml-5"></FaArrowRight>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center my-8">
        <PrimaryBtn text={"SEE ALL PROGRAMS"}></PrimaryBtn>
      </div>
    </div>
  );
};

export default Program;
