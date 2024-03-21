import React from "react";
import { FaPhoneAlt, FaUser } from "react-icons/fa";
import { MdPassword } from "react-icons/md";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="body flex items-center justify-center min-w-[540px]">
      <div className="h-fit w-[40%] bg-gray-800 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 border border-gray-100 px-8 py-6 flex flex-col gap-3">
        <h1 className="text-emerald-600 text-3xl font-bold text-center">
          Chatify
        </h1>

        <div className="space-y-3 mt-3">
          <strong className="text-xl text-gray-900 uppercase ">Sign Up</strong>
          <form className="space-y-4 flex flex-col">
            <label className="input input-bordered flex items-center gap-2 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow " placeholder="Email" />
            </label>

            <label className="input input-bordered flex items-center gap-2 ">
              <FaUser />
              <input type="text" className="grow " placeholder="Username" />
            </label>

            <label className="input input-bordered flex items-center gap-2 ">
              <FaPhoneAlt />
              <input type="phone" className="grow " placeholder="Phone" />
            </label>

            <label className="input input-bordered flex items-center gap-2 ">
              <MdPassword />
              <input type="password" className="grow " placeholder="Password" />
            </label>

            <div className="flex">
              <div className="form-control">
                <label className="cursor-pointer label space-x-1 ">
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    id="gender"
                    className="radio radio-accent"
                  />
                  <span className="label-text text-black">Male</span>
                </label>
              </div>

              <div className="form-control">
                <label className="cursor-pointer label space-x-1">
                <input
                    type="radio"
                    name="gender"
                    value="male"
                    id="gender"
                    className="radio radio-accent"
                  />
                  <span className="label-text text-black">Female</span>
                </label>
              </div>

            </div>

            <Link
              className="ml-2  hover:underline text-red-600 cursor-pointer hover:text-gray-800"
              to="/login"
            >
              Already have an account?
            </Link>

            <button className="btn btn-md bg-emerald-600 border-none text-white mt-4 self-end">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
