import { Link, useRouteError } from "react-router-dom";
import fourO4Img from "../../assets/errorImage.jpg";
const ErrorPage = () => {
  const { error, status } = useRouteError();
  return (
    <section className="flex items-center  h-screen bg-gray-100 text-gray-900 ">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className=" flex justify-center items-center flex-col gap-5">
          <img className="w-48 rounded-2xl" src={fourO4Img} alt="" />
          <h2 className="mb-8 font-bold text-5xl ">
            <span className="sr-only">Error</span> {status || 404}
          </h2>
          <p className="text-xs font-semibold md:text-3xl mb-8">
            {error?.message}
          </p>
          <Link to="/" className="btn-primary ">
            <span className="text-xs font-semibold bg-[#B38B37] text-white p-2 rounded-md">
              Back to Home
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
