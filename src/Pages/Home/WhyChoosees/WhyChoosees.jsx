import img from "../../../assets/countbg/dram.jpg";
import { FaGuitar, FaHotel, FaUsers } from "react-icons/fa";

const WhyChoosees = () => {
  return (
    <div className="px-3 md:px-32 py-32 grid md:grid-cols-2 gap-10 overflow-x-hidden overflow-y-hidden text-center md:text-left">
      <div className="w-9/12 mx-auto space-y-10">
        <div className="space-y-4">
          <h5 className="text-[#c2880a] text-xl font-semibold">
            WHY CHOOSE US
          </h5>
          <h2 className="text-2xl md:text-5xl font-bold">
            Why You Should Choose Us
          </h2>
          <p>
            Musical contexts refer to the different environments, genres, or
            settings in which music is created.
          </p>
        </div>
        <div className="space-y-10">
          {/* item 1 */}
          <div
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="1500"
            className="flex flex-col md:flex-row justify-center items-center md:justify-items-start md:items-start gap-8"
          >
            <div className="bg-[#b38b37] w-16 h-16 flex items-center justify-center rounded-full p-5">
              <FaGuitar className="text-2xl text-white"></FaGuitar>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Free Equipment</h3>
              <p>
                Music composed in the Western classical tradition, spanning.
              </p>
            </div>
          </div>
          {/* item 2 */}
          <div
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
            className="flex flex-col md:flex-row justify-center items-center md:justify-items-start md:items-start gap-8"
          >
            <div className="bg-[#b38b37] w-16 h-16 flex items-center justify-center rounded-full p-5">
              <FaHotel className="text-2xl text-white"></FaHotel>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Music Studio</h3>
              <p>
                Music composed in the Western classical tradition, spanning.
              </p>
            </div>
          </div>
          {/* item 3 */}
          <div
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
            className="flex flex-col md:flex-row justify-center items-center md:justify-items-start md:items-start gap-8"
          >
            <div className="bg-[#b38b37] w-16 h-16 flex items-center justify-center rounded-full p-5">
              <FaUsers className="text-2xl text-white"></FaUsers>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Expert Teacher</h3>
              <p>
                Music composed in the Western classical tradition, spanning.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-9/12 mx-auto">
        <img className="rounded-2xl" src={img} alt="" />
      </div>
    </div>
  );
};

export default WhyChoosees;
