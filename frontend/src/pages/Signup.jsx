import { useState } from "react";
import { FaPhoneAlt, FaUser } from "react-icons/fa";
import { MdPassword } from "react-icons/md";
import { Link } from "react-router-dom";
import * as Yup from "yup";

function Signup() {
  // schema.phone.parse(9841616206);
  const [signUpCred, setSignUpCred] = useState({
    email: "",
    userName: "",
    phone: "",
    password: "",
    gender: "",
  });
  const [errors, setErrors] = useState({});

  const setInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setSignUpCred({
      ...signUpCred,
      [name]: value,
    });
  };

  const userSchema = Yup.object({
    email: Yup.string()
      .email("Enter a valid email address")
      .required("You can't email blank"),

    userName: Yup.string()
      .min(2, "Name must be at least 2 characters")
      .required("You can't leave username blank"),

    phone: Yup.string()
      .required("You can't leave phone number blank")
      .min(10, "Phone number must be at least 10 digits"),

    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .matches(/[0-9]/, "Password must contain at least 1 digit")
      .matches(/[a-z]/, "Password must contain one lower case letter")
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
      .matches(/[!@#$%^&*()_+]/, "Password must contain at least one character")
      .required("You can't leave password blank"),

    gender: Yup.string().required("Select your gender"),
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await userSchema.validate(signUpCred, { abortEarly: false });
      console.log("Form submission successful", signUpCred);
    } catch (err) {
      console.log(err.inner);
      const newErr = {};

      err.inner.forEach((err) => {
        newErr[err.path] = err.message;
      });

      setErrors(newErr);
    }
  };

  

  return (
    <div className="body flex items-center justify-center min-w-[540px]">
      <div className="h-fit w-[40%] bg-gray-800 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 border border-gray-100 px-8 py-6 flex flex-col gap-3">
        <h1 className="text-emerald-600 text-3xl font-bold text-center">
          Chatify
        </h1>

        <div className="space-y-3 mt-3">
          <strong className="text-xl text-gray-900 uppercase ">Sign Up</strong>

          <form className="space-y-4 flex flex-col" onSubmit={handleSubmit}>
            <div>
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
                <input
                  type="text"
                  className="grow"
                  placeholder="Email"
                  name="email"
                  onChange={setInputs}
                />
              </label>
              {errors.email && (
                <span className="text-sm text-red-500 p-2">{errors.email}</span>
              )}
            </div>

            <div>
              <label className="input input-bordered flex items-center gap-2 ">
                <FaUser />
                <input
                  type="text"
                  className="grow "
                  name="userName"
                  placeholder="Username"
                  onChange={setInputs}
                />
              </label>
              {errors.userName && (
                <span className="text-sm text-red-500 p-2">
                  {errors.userName}
                </span>
              )}
            </div>

            <div>
              <label className="input input-bordered flex items-center gap-2 ">
                <FaPhoneAlt />
                <input
                  type="phone"
                  className="grow"
                  name="phone"
                  placeholder="Phone"
                  onChange={setInputs}
                />
              </label>
              {errors.phone && (
                <span className="text-sm text-red-500 p-2">{errors.phone}</span>
              )}
            </div>

            <div>
              <label className="input input-bordered flex items-center gap-2 ">
                <MdPassword />
                <input
                  type="password"
                  className="grow "
                  placeholder="Password"
                  name="password"
                  onChange={setInputs}
                />
              </label>
              {/* setting up errors */}
              {errors.password && (
                <span className="text-sm text-red-500 p-2">
                  {errors.password}
                </span>
              )}
            </div>

            <div>
              <div className="flex">
                <div className="form-control">
                  <label className="cursor-pointer label space-x-1 ">
                    <input
                      type="radio"
                      name="gender"
                      value="male"
                      id="male"
                      className="radio radio-accent"
                      onClick={setInputs}
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
                      id="female"
                      onClick={setInputs}
                      className="radio radio-accent"
                    />
                    <span className="label-text text-black">Female</span>
                  </label>
                </div>
              </div>

              {errors.gender && (
                <span className="text-sm text-red-500 p-2">
                  {errors.gender}
                </span>
              )}
            </div>

            <Link
              className="ml-2  hover:underline text-red-600 cursor-pointer hover:text-gray-800"
              to="/login"
            >
              Already have an account?
            </Link>

            <button
              type="submit"
              className="btn btn-md bg-emerald-600 border-none text-white mt-4 self-end"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
