import { FaCheckCircle } from "react-icons/fa";
import aboutimg from "../../../assets/about/about.jpg";
import { Fade, Bounce } from "react-awesome-reveal";
const About = () => {
  return (
    <div className="grid md:grid-cols-2 gap-10 md:gap-20 px-3 md:px-32 pb-10 my-10 md:my-20 overflow-x-hidden overflow-y-hidden">
      <div className="space-y-4 text-center md:text-left">
        <Bounce>
          <h3 className="text-[#c2880a] text-xl font-semibold ">ABOUT US</h3>
        </Bounce>
        <div
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="text-3xl md:text-5xl text-black font-bold"
        >
          <p className=" md:leading-[60px]">We Help You to</p>
          <p className=" md:leading-[60px]">Grow Faster and</p>
          <p className=" md:leading-[60px]">Better</p>
        </div>
        <img
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="w-[600px] rounded-3xl"
          src={aboutimg}
          alt=""
        />
      </div>
      <div className="space-y-10 px-5">
        <Fade delay={1e3} cascade damping={1e-1}>
          <p>
            Music weaves its enchanting tapestry, encompassing a realm of
            emotions and experiences. It begins with a subtle rhythm, like a
            heartbeat, setting the foundation for the intricate layers to come.
            A gentle piano melody emerges, tenderly caressing the senses,
            evoking a sense of serenity and introspection.
          </p>
        </Fade>
        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="space-y-5"
        >
          <p className="flex items-center gap-5">
            <FaCheckCircle></FaCheckCircle>
            Quality services and support all time
          </p>
          <p className="flex items-center gap-5">
            <FaCheckCircle></FaCheckCircle>
            Expert team member
          </p>
          <p className="flex items-center gap-5">
            <FaCheckCircle></FaCheckCircle>
            Lifetime online support
          </p>
        </div>
        <div>
          <button className="bg-[#B38B37] w-full md:w-auto py-3 px-4 rounded-md font-semibold hover:bg-black border-b-4 border-[#B38B37] duration-300 text-white">
            MORE ABOUT US
          </button>
        </div>
        <div
          data-aos="fade-left"
          data-aos-easing="linear"
          className="flex flex-col md:flex-row items-center gap-10 justify-between"
        >
          <div>
            <h4 className="text-5xl font-bold text-[#B38837]">250 +</h4>
            <p className="text-xl mt-2">Project Done</p>
          </div>
          <div>
            <h4 className="text-5xl font-bold text-[#B38837]">250 +</h4>
            <p className="text-xl mt-2">Project Done</p>
          </div>
          <div>
            <h4 className="text-5xl font-bold text-[#B38837]">250 +</h4>
            <p className="text-xl mt-2">Project Done</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
