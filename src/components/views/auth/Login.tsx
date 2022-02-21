import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const formChangeHandler = (e: React.ChangeEvent<any>): void => {
    const { name, value } = e.target;

    setFormData((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const formSubmitHandler = (e: React.ChangeEvent<any>): void => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      email: "",
      password: "",
    });
  };

  return (
    <main className="main">
      <div className="card">
        <div className="card-header">
          <h1 className="text-4xl font-semibold pb-2">Log in</h1>
          <p className="text-gray-500 text-lg">Welcome back</p>
        </div>

        <form
          className="w-full flex flex-col items-center px-4 py-4"
          data-testid="form"
          onSubmit={formSubmitHandler}
        >
          <div className="inputContainer">
            <input
              type="email"
              name="email"
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
              value={password}
              placeholder=" "
              className="input"
              onChange={formChangeHandler}
            />
            <label htmlFor="password" className="inputLabel">
              Password
            </label>
          </div>
          <button className="btn group">
            <p>Log in</p>
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
          Don't have an account?{" "}
          <Link to="/register" className="font-bold text-fuchsia-700">
            Sign up.
          </Link>
        </p>
      </div>
    </main>
  );
};

export default Login;
