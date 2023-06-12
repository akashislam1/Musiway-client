import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import img1 from "../../../assets/Banner/Img1.jpg";
import img2 from "../../../assets/Banner/Img2.jpg";
import img3 from "../../../assets/Banner/Img3.jpg";
import PrimaryBtn from "../../../Components/PrimaryBtn";

const Banner = () => {
  return (
    <Carousel className="carousel-style text-center overflow-x-hidden overflow-y-hidden">
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: `url(${img2})` }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-lg">
            <p
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
              className="text-[#f0ca78] font-bold text-xl mb-5"
            >
              WELCOME TO MUSIWAY
            </p>
            <h1
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1500"
              className="mb-5 text-2xl md:text-5xl font-bold text-white"
            >
              Learning Music With Easy Way
            </h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <PrimaryBtn text={"GET STARTED"}></PrimaryBtn>
          </div>
        </div>
      </div>
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: `url(${img1})` }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-lg">
            <p
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
              className="text-[#f0ca78] font-bold text-xl mb-5"
            >
              WELCOME TO MUSIWAY
            </p>
            <h1
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1500"
              className="mb-5 text-2xl md:text-5xl font-bold text-white"
            >
              Learning Music With Easy Way
            </h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <PrimaryBtn text={"GET STARTED"}></PrimaryBtn>
          </div>
        </div>
      </div>
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: `url(${img3})` }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-lg">
            <p
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
              className="text-[#f0ca78] font-bold text-xl mb-5"
            >
              WELCOME TO MUSIWAY
            </p>
            <h1
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1500"
              className="mb-5 text-2xl md:text-5xl font-bold text-white"
            >
              Learning Music With Easy Way
            </h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <PrimaryBtn text={"GET STARTED"}></PrimaryBtn>
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default Banner;
