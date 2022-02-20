import { Link } from "react-router-dom";

const Login = () => {
  return (
    <main className="main">
      <div className="card">
        <h1 className=" w-full pl-2 text-2xl  pb-4 font-semibold">Log in</h1>
        <form className="flex flex-col">
          <input type="email" placeholder="Email" className="input" />
          <input type="password" placeholder="Password" className="input" />
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
          <Link to="/register" className="font-semibold text-fuchsia-700">
            Sign up.
          </Link>
        </p>
      </div>
    </main>
  );
};

export default Login;
