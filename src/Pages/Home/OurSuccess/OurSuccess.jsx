import img from "../../../assets/countbg/countBg.jpg";
import CountUp from "react-countup";

const OurSuccess = () => {
  return (
    <div
      className="hero md:h-[450px] w-full my-24"
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="hero-overlay bg-opacity-60 bg-black"></div>
      <div className="md:w-3/4 text-center text-neutral-content py-10">
        <div className="">
          <div className="flex flex-col md:flex-row items-center gap-10 justify-around font">
            {/* Card 1 */}
            <div>
              <h4 className="text-7xl font-bold text-[#B38837]">
                <CountUp end={120} duration={10} /> +
              </h4>
              <p className="text-xl mt-2">Awards Winning</p>
            </div>
            {/* card 2 */}
            <div>
              <h4 className="text-7xl font-bold text-[#B58837]">
                <CountUp end={500} duration={10} /> +
              </h4>
              <p className="text-xl mt-2">Our Equipments</p>
            </div>
            {/* card 3 */}
            <div>
              <h4 className="text-7xl font-bold text-[#B38837]">
                <CountUp end={250} duration={10} /> +
              </h4>
              <p className="text-xl mt-2">Field Expertise</p>
            </div>
            {/* card 4 */}
            <div>
              <h4 className="text-7xl font-bold text-[#B38837]">
                <CountUp end={80} duration={10} /> +
              </h4>
              <p className="text-xl mt-2">Locations</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurSuccess;
