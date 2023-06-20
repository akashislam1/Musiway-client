import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
const ClassCard = ({ classData, isDarkTheme }) => {
  const { image, title, description, price } = classData;
  return (
    <div
      className={`${
        isDarkTheme ? "bg-black text-white" : "bg-white"
      } flex flex-col justify-between gap-5 relative rounded-2xl w-full h-64 hover:scale-110 duration-500`}
    >
      <div className="bg-black opacity-60 absolute w-full h-full rounded-2xl"></div>
      <img
        className="w-full h-full object-cover  rounded-2xl"
        src={image}
        alt=""
      />
      <div className="space-y-3 w-3/4  absolute top-16 left-8 ">
        <h3 className={` text-2xl md:text-3xl font-bold text-amber-400`}>
          {title}
        </h3>
        <p className={`text-gray-200`}>{description}</p>

        <div>
          <Link className="text-amber-300">
            LEARN MORE{" "}
            <FaArrowRight className="inline-block ml-5"></FaArrowRight>
          </Link>
        </div>
      </div>
      <p className="bg-white text-black absolute top-4 right-4 py-2 px-3 font-semibold rounded-md">
        ${price}
      </p>
    </div>
  );
};

export default ClassCard;
