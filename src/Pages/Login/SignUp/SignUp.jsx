import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";
import useAuth from "../../../Hooks/useAuth";
import { Helmet } from "react-helmet-async";

const SignUp = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordConfirm, setPasswordConfirm] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { createUser, updateUserProfile } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();

  const onSubmit = (data) => {
    // create user
    createUser(data.email, data.password)
      .then((result) => {
        const signedUser = result.user;

        // update user profile
        updateUserProfile(signedUser, data.name, data.photoURL)
          .then(() => {
            const savedUser = {
              name: data.name,
              email: data.email,
              image: data.photoURL,
            };
            fetch(`${import.meta.env.VITE_HTTP}/users`, {
              method: "POST",
              headers: { "content-type": "application/json" },
              body: JSON.stringify(savedUser),
            })
              .then((res) => res.json())
              .then(() => {
                navigate("/login");
                setError(" ");
                reset();
              });
          })
          .catch((error) => {
            setError(error);
          });
      })
      .catch((err) => {
        setError(err);
      });
  };
  const password = React.useRef({});
  password.current = watch("password", "");
  return (
    <div className="my-10 px-2">
      <Helmet>
        <title>Sign Up - Musiway School </title>
      </Helmet>
      ;<h3 className="text-center text-2xl font-bold">Welcome to Musiway !</h3>
      {error && <span className="text-red-500">{error}</span>}
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto">
        <div className="mb-4">
          <label className="block mb-2 text-sm font-bold">Name</label>
          <input
            {...register("name", {
              required: "Name is required",
            })}
            className="w-full px-4 py-2 border rounded-md"
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>

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
            className="w-full px-4 py-2 border rounded-md"
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
                  value: /^(?=.*[A-Z])(?=.*[@$!%#*?&])[A-Za-z\d@$!#%*?&]+$/,
                  message:
                    "Password must contain at least one uppercase letter and one special character",
                },
              })}
              type={passwordVisible ? "text" : "password"}
              className="w-full px-4 py-2 border rounded-md pr-10"
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

        <div className="mb-4">
          <label className="block mb-2 text-sm font-bold">
            Confirm Password
          </label>
          <div className="relative">
            <input
              {...register("confirmPassword", {
                validate: (value) =>
                  value === password.current || "The passwords do not match",
              })}
              type={passwordConfirm ? "text" : "password"}
              className="w-full px-4 py-2 border rounded-md"
            />
            <button
              type="button"
              onClick={() => setPasswordConfirm(!passwordConfirm)}
              className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-400"
            >
              {passwordConfirm ? (
                <FaEye className="w-5 h-5" />
              ) : (
                <FaEyeSlash className="w-5 h-5" />
              )}
            </button>
          </div>
          {errors.confirmPassword && (
            <p className="text-red-500">{errors.confirmPassword.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-sm font-bold">Photo URL</label>
          <input
            {...register("photoURL", {
              pattern: {
                value: /(http(s?):)([/|.|\w|\s|-])*\./i,
                message: "Invalid photo URL",
              },
            })}
            className="w-full px-4 py-2 border rounded-md"
          />
          {errors.photoURL && (
            <p className="text-red-500">{errors.photoURL.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full py-2 text-white bg-[#B38B37] hover:bg-[#9c6c05] rounded-md duration-500"
        >
          Sign Up
        </button>
        <div className="mt-4">
          <p className="font-bold">
            Already have an account ? Please{" "}
            <Link className="text-[#8b630b]" to="/login">
              Login
            </Link>
          </p>
        </div>
        <div className="divider font-semibold"> Continue with Google</div>
        <div className="my-4 font-bold text-center flex justify-center items-center">
          <SocialLogin></SocialLogin>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
