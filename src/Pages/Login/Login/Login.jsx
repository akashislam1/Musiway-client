import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";
import { Helmet } from "react-helmet-async";
import useAuth from "../../../Hooks/useAuth";
import Lottie from "lottie-react";
import login from "../../../assets/lotie/login.json";
const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const { signIn, setUser } = useAuth();
  const [error, setError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from.pathname || "/";
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // login user
    signIn(data.email, data.password)
      .then((result) => {
        const loggedInUser = result.user;
        setUser(loggedInUser);
        navigate(from, { replace: true });
        setError(" ");
        reset();
      })
      .catch((err) => {
        setError(err.message);
      });
  };
  return (
    <div className="my-10 px-3">
      <Helmet>
        <title>Login - Musiway School </title>
      </Helmet>
      <h3 className="text-center text-3xl font-bold">
        Welcome to <span className="text-[#dd9c11]">Musiway !</span>
      </h3>
      {error && <p className="text-red-500 text-center">{error}</p>}
      <div className="grid md:grid-cols-2 gap-16 md:w-2/4 mx-auto my-10">
        <div>
          <Lottie animationData={login} loop={true} />
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold">Email</label>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email",
                },
              })}
              className="w-full px-4 py-2 border border-[#9c6c05] rounded-md "
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold">Password</label>
            <div className="relative">
              <input
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must have at least 6 characters",
                  },
                  pattern: {
                    value: /^(?=.*[A-Z])(?=.*[@$!%#*?&])[A-Za-z\d@$!%*#?&]+$/,
                    message:
                      "Password must contain at least one uppercase letter and one special character",
                  },
                })}
                type={passwordVisible ? "text" : "password"}
                className="w-full px-4 py-2 border border-[#9c6c05] rounded-md pr-10"
              />
              <button
                type="button"
                onClick={() => setPasswordVisible(!passwordVisible)}
                className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-400"
              >
                {passwordVisible ? (
                  <FaEye className="w-5 h-5" />
                ) : (
                  <FaEyeSlash className="w-5 h-5" />
                )}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-2 text-white bg-[#B38B37] hover:bg-[#9c6c05] rounded-md duration-500"
          >
            Login
          </button>
          <div className="mt-4">
            <p className="font-bold">
              Don&apos;t have an account ? Please{" "}
              <Link className="text-[#8b630b]" to="/signup">
                Sign Up
              </Link>
            </p>
          </div>
          <div className="divider font-semibold"> Continue with Google</div>
          <div className="my-4 font-bold text-center flex justify-center items-center">
            <SocialLogin setError={setError}></SocialLogin>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
