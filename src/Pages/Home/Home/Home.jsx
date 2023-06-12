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

const Home = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };
  const themeClass = isDarkTheme ? darkTheme : lightTheme;
  return (
    <div className={`transition duration-500 relative ${themeClass}`}>
      <div>
        <Helmet>
          <title>Home - Musiway School </title>
        </Helmet>
        <button
          className="absolute z-10 -top-[3.25rem] right-48"
          onClick={toggleTheme}
        >
          {isDarkTheme ? (
            <FaMoon className="h-6 w-6 "></FaMoon>
          ) : (
            <FaSun className="h-6 w-6 text-white"></FaSun>
          )}
        </button>

        <Banner></Banner>
        <About></About>
        <OurClasses></OurClasses>
        <OurTeachers></OurTeachers>
        <Program></Program>
        <HeroSection></HeroSection>
      </div>
    </div>
  );
};

export default Home;
