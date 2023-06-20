import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import OurClasses from "../OurClasses/OurClasses";
import OurTeachers from "../OurTeachers/OurTeachers";
import Program from "../Program/Program";
import HeroSection from "../HeroSection/HeroSection";
import About from "../About/About";
import { darkTheme, lightTheme } from "../theme/Theme";
import { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import OurSuccess from "../OurSuccess/OurSuccess";
import WhyChoosees from "../WhyChoosees/WhyChoosees";
import OurJourney from "../OurJourney/OurJourney";
import Faqs from "../Faqs/Faqs";

const Home = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };
  const themeClass = isDarkTheme ? darkTheme : lightTheme;
  return (
    <div className={`transition duration-500 relative ${themeClass}`}>
      <div className="font">
        <Helmet>
          <title>Home - Musiway School </title>
        </Helmet>
        <button
          className="absolute z-10 -top-[3rem] right-20 md:-top-[3.25rem] md:right-48"
          onClick={toggleTheme}
        >
          {isDarkTheme ? (
            <FaMoon className="h-6 w-6 text-amber-400"></FaMoon>
          ) : (
            <FaSun className="h-6 w-6 text-amber-400"></FaSun>
          )}
        </button>

        <Banner></Banner>
        <About></About>
        <OurClasses isDarkTheme={isDarkTheme}></OurClasses>
        <OurSuccess></OurSuccess>
        <Program isDarkTheme={isDarkTheme}></Program>
        <WhyChoosees></WhyChoosees>
        <OurTeachers isDarkTheme={isDarkTheme}></OurTeachers>
        <OurJourney></OurJourney>
        <Faqs isDarkTheme={isDarkTheme}></Faqs>
        <div className={`${isDarkTheme ? "bg-gray-900" : "bg-white"} py-24 `}>
          <HeroSection isDarkTheme={isDarkTheme}></HeroSection>
        </div>
      </div>
    </div>
  );
};

export default Home;
