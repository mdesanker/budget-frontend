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
  };

  return (
    <main className="main">
      <div className="card">
        <h1 className=" w-full pl-2 text-2xl  pb-4 font-semibold">Log in</h1>
        <form className="flex flex-col" onSubmit={formSubmitHandler}>
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
        <p className="text-sm p-4">
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
