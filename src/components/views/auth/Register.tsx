import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { timedAlert } from "../../../store/slices/alertSlice";
import { registerUser } from "../../../store/slices/userSlice";
import AlertDisplay from "../../elements/AlertDisplay";
import "./Auth.css";

const Register = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { isAuthenticated } = useAppSelector((state) => state.user);

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
      dispatch(timedAlert({ msg: "Passwords do not match", type: "danger" }));
    } else {
      dispatch(registerUser(formData));
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated]);

  return (
    <main className="absolute main bg-stripe">
      <AlertDisplay />
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
              required
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
              required
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
              required
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
              required
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
              required
              className="input"
              onChange={formChangeHandler}
            />
            <label htmlFor="passwordConfirm" className="inputLabel">
              Confirm password
            </label>
          </div>
          <button className="btn group">
            <p>Sign up</p>
            <div className=" p-5 rounded-full text-white bg-sky-700 group-hover:bg-sky-800  duration-200">
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
          <Link to="/" className="font-bold text-sky-700">
            Log in.
          </Link>
        </p>
      </div>
    </main>
  );
};

export default Register;
