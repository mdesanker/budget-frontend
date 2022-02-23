import { NavLink, useLocation } from "react-router-dom";
import "./Nav.css";
import { MdDashboard } from "react-icons/md";
import { BsCashCoin } from "react-icons/bs";
import { VscGraphLine } from "react-icons/vsc";
import { FaUserCircle } from "react-icons/fa";

const Nav = () => {
  const location = useLocation();

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
            to="/transactions"
            className={`flex flex-col gap-1 px-2 justify-center items-center text-gray-500 ${
              location.pathname === "/transactions" ? "text-blue-500" : ""
            }`}
          >
            <BsCashCoin className="nav-icon" />
            <p className="nav-text">Transactions</p>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="#"
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
            to="/settings"
            className={`flex flex-col gap-1 px-2 justify-center items-center text-gray-500 ${
              location.pathname === "/account" ? "text-blue-500" : ""
            }`}
          >
            <FaUserCircle className="nav-icon" />
            <p className="nav-text">Account</p>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
