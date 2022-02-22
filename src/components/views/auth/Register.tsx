import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../../store/hooks";
import { timedAlert } from "../../../store/slices/alertSlice";
import { registerUser } from "../../../store/slices/userSlice";

const Register = () => {
  const dispatch = useAppDispatch();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const { firstName, lastName, email, password, passwordConfirm } = formData;

  const formChangeHandler = (e: React.ChangeEvent<any>): void => {
    const { name, value } = e.target;

    setFormData((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const formSubmitHandler = (e: React.ChangeEvent<any>): void => {
    e.preventDefault();
    if (password !== passwordConfirm) {
      console.log("Passwords do not match");
      dispatch(timedAlert({ msg: "Passwords do not match", type: "danger" }));
    } else {
      console.log(formData);
      dispatch(registerUser(formData));
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        passwordConfirm: "",
      });
    }
  };

  return (
    <main className="main">
      <div className="card">
        <div className="card-header">
          <h1 className="text-4xl font-semibold pb-2">Sign up</h1>
          <p className="text-gray-500 text-lg">Create a new account</p>
        </div>

        <form
          className="w-full flex flex-col items-center px-4 py-4"
          data-testid="form"
          onSubmit={formSubmitHandler}
        >
          <div className="inputContainer">
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={firstName}
              placeholder=" "
              className="input"
              onChange={formChangeHandler}
            />
            <label htmlFor="firstName" className="inputLabel">
              First name
            </label>
          </div>
          <div className="inputContainer">
            <input
              type="text"
              name="lastName"
              id="lastName"
              value={lastName}
              placeholder=" "
              className="input"
              onChange={formChangeHandler}
            />
            <label htmlFor="lastName" className="inputLabel">
              Last name
            </label>
          </div>
          <div className="inputContainer">
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              placeholder=" "
              className="input"
              onChange={formChangeHandler}
            />
            <label htmlFor="email" className="inputLabel">
              Email
            </label>
          </div>
          <div className="inputContainer">
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              placeholder=" "
              className="input"
              onChange={formChangeHandler}
            />
            <label htmlFor="password" className="inputLabel">
              Password
            </label>
          </div>
          <div className="inputContainer">
            <input
              type="password"
              name="passwordConfirm"
              id="passwordConfirm"
              value={passwordConfirm}
              placeholder=" "
              className="input"
              onChange={formChangeHandler}
            />
            <label htmlFor="passwordConfirm" className="inputLabel">
              Confirm password
            </label>
          </div>
          <button className="btn group">
            <p>Sign up</p>
            <div className=" p-5 rounded-full text-white bg-fuchsia-700 group-hover:bg-fuchsia-800  duration-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </div>
          </button>
        </form>
        <p className="text-sm p-4 mb-4">
          Already have an account?{" "}
          <Link to="/" className="font-bold text-fuchsia-700">
            Log in.
          </Link>
        </p>
      </div>
    </main>
  );
};

export default Register;
