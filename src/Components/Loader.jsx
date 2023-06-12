import Lottie from "lottie-react";
import loader from "../assets/lotie/Loader.json";
const Loader = () => {
  return (
    <div className="flex justify-center mt-8 items-center md:min-h-[calc(100vh-100px)]">
      <Lottie className="w-52" animationData={loader} loop={true} />
    </div>
  );
};

export default Loader;
