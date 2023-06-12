import img from "../../../assets/hero/hero.jpg";
const HeroSection = () => {
  return (
    <div
      className="hero w-11/12 mx-auto mt-16 mb-28 rounded-2xl"
      style={{ backgroundImage: `url(${img})`, borderRadius: "20px" }}
    >
      <div className="hero-overlay bg-black bg-opacity-70 rounded-2xl"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-lg h-full overflow-x-hidden overflow-y-hidden">
          <div className="text-center md:w-full mx-auto space-y-8 py-10 pb-10">
            <h5 className="text-[#e4a318] text-xl md:text-2xl ">
              LET&apos;S JOIN US
            </h5>
            <h2
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1500"
              className="text-2xl text-white md:text-5xl font-bold"
            >
              Be an Expert With Us
            </h2>
            <p className="text-white">
              Music has been a source of inspiration and creativity for
              centuries, captivating the hearts.Healing Through Sound Music
              therapy utilizes the power of music .
            </p>
            <div className="flex flex-col gap-3 md:flex-row items-center justify-center mt-4">
              <input
                type="text"
                className="px-8 py-3 rounded-md focus:outline-none focus:ring-[#c2880a] focus:border-[#c2880a]"
                placeholder="Email"
              />
              <button className="px-8 py-3 w-full md:w-auto bg-[#c2880a] text-white rounded-md  focus:outline-none duration-300 hover:bg-black font-bold">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
