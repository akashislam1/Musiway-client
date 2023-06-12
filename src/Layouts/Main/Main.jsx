import { Outlet } from "react-router-dom";
import NavBar from "../../Pages/Shared/NavBar/NavBar";
import Footer from "../../Pages/Shared/Footer/Footer";
import { useEffect } from "react";
import Aos from "aos";

const Main = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="relative w-full font">
      <NavBar></NavBar>
      <div className=" md:min-h-[calc(100vh-100px)]">
        <Outlet />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
