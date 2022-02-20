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
          <p>Welcome back</p>
          <div className="absolute top-8 right-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"
              />
            </svg>
          </div>
        </div>
        <form
          className="w-full flex flex-col items-center px-4 py-4"
          data-testid="form"
          onSubmit={formSubmitHandler}
        >
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Email"
            className="input"
            onChange={formChangeHandler}
          />
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            className="input"
            onChange={formChangeHandler}
          />
          <button className="btn">
            <p>Log in</p>
            <div className="border-2 border-fuchsia-700 p-4 rounded-full text-white bg-fuchsia-700">
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
