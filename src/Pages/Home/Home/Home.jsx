import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import OurClasses from "../OurClasses/OurClasses";
import OurTeachers from "../OurTeachers/OurTeachers";
import Program from "../Program/Program";
import HeroSection from "../HeroSection/HeroSection";
import About from "../About/About";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home - Musiway School </title>
      </Helmet>
      <Banner></Banner>
      <About></About>
      <OurClasses></OurClasses>
      <OurTeachers></OurTeachers>
      <Program></Program>
      <HeroSection></HeroSection>
    </div>
  );
};

export default Home;
