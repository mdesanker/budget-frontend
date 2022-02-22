import { NavLink, useLocation } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { BsCashCoin } from "react-icons/bs";
import { VscGraphLine } from "react-icons/vsc";
import { FaUserCircle } from "react-icons/fa";

const Nav = () => {
  const location = useLocation();

  return (
    <div className="fixed inset-x-0 bottom-0 h-16 bg-white">
      <ul className="flex justify-around p-2 h-full">
        <li>
          <NavLink to="/dashboard">
            <MdDashboard />
          </NavLink>
        </li>
        <li>
          <NavLink to="#">
            <BsCashCoin />
          </NavLink>
        </li>
        <li>
          <NavLink to="#">
            <VscGraphLine />
          </NavLink>
        </li>
        <li>
          <NavLink to="#">
            <FaUserCircle />
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
