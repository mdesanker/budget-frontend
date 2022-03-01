import { NavLink, useLocation, useNavigate } from "react-router-dom";
import "./Nav.css";
import { MdDashboard } from "react-icons/md";
import { ImExit } from "react-icons/im";
import { VscGraphLine } from "react-icons/vsc";
import { FaUserCircle } from "react-icons/fa";
import { useAppDispatch } from "../../store/hooks";
import { logout } from "../../store/slices/userSlice";
import { clearAllTransactions } from "../../store/slices/transactionSlice";

const Nav = () => {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    dispatch(logout());
    dispatch(clearAllTransactions());
    navigate("/");
  };

  return (
    <nav className="nav-bar">
      <ul className="nav-list">
        <li>
          <NavLink
            to="/dashboard"
            className={`flex flex-col gap-1 px-2 justify-center items-center text-gray-500 ${
              location.pathname === "/dashboard" ? "text-blue-500" : ""
            }`}
          >
            <MdDashboard className="nav-icon" />
            <p className="nav-text">Dashboard</p>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/activity"
            className={`flex flex-col gap-1 px-2 justify-center items-center text-gray-500 ${
              location.pathname === "/activity" ? "text-blue-500" : ""
            }`}
          >
            <VscGraphLine className="nav-icon" />
            <p className="nav-text">Activity</p>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/account"
            className={`flex flex-col gap-1 px-2 justify-center items-center text-gray-500 ${
              location.pathname === "/account" ? "text-blue-500" : ""
            }`}
          >
            <FaUserCircle className="nav-icon" />
            <p className="nav-text">Account</p>
          </NavLink>
        </li>
        <li>
          <button
            onClick={logoutHandler}
            className={`flex flex-col gap-1 px-2 justify-center items-center text-gray-500 `}
          >
            <ImExit className="nav-icon" />
            <p className="nav-text">Logout</p>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
