import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
const ClassCard = ({ classData }) => {
  const { image, title, description, price } = classData;
  return (
    <div className="bg-white p-16 flex flex-col justify-between gap-5 relative rounded-xl hover:shadow-xl">
      <img className="w-32 " src={image} alt="" />
      <div className="space-y-3">
        <h3 className="text-2xl md:text-4xl font-bold text-black">{title}</h3>
        <p>{description}</p>
        <p className="bg-black text-white absolute top-4 right-4 py-2 px-4 font-semibold rounded-md">
          ${price}
        </p>
        <div>
          <Link className="text-[#B38B37] font-semibold">
            LEARN MORE{" "}
            <FaArrowRight className="inline-block ml-5"></FaArrowRight>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
