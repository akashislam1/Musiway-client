import CountUp from "react-countup";

const OurJourney = () => {
  return (
    <div className="px-3 md:px-32 pb-10 grid md:grid-cols-2 my-16 md:my-36">
      <div className="space-y-6 mb-8 w-3/4 mx-auto text-center md:text-left">
        <h5 className="text-[#c2880a]  font-bold">OUR JOURNEY</h5>
        <h2 className="text-3xl md:text-5xl font-bold tracking-wider">
          Trusted by 1000+ Happy Students
        </h2>
        <p>
          Musical contexts refer to the different environments, genres, or
          settings in which music is created.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-10 mb-8 font text-center md:text-left">
        {/* Card 1 */}
        <div>
          <h4 className="text-7xl font-bold text-[#B38837]">
            <CountUp end={75} duration={10} />K +
          </h4>
          <p className="text-xl mt-2">Satisfied Students</p>
        </div>
        {/* card 2 */}
        <div>
          <h4 className="text-7xl font-bold text-[#B58837]">
            <CountUp end={100} duration={10} /> +
          </h4>
          <p className="text-xl mt-2">Expert Instructor</p>
        </div>
        {/* card 3 */}
        <div>
          <h4 className="text-7xl font-bold text-[#B38837]">
            <CountUp end={50} duration={10} /> +
          </h4>
          <p className="text-xl mt-2">Locations</p>
        </div>
        {/* card 4 */}
        <div>
          <h4 className="text-7xl font-bold text-[#B38837]">
            <CountUp end={20} duration={10} /> +
          </h4>
          <p className="text-xl mt-2">Selectable Class</p>
        </div>
      </div>
    </div>
  );
};

export default OurJourney;
