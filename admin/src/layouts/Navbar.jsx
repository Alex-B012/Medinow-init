import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AdminContext, DoctorContext } from "../context/AppContext";
import { assets } from "../assets/assets";

const Navbar = () => {
  const { aToken, setAToken } = useContext(AdminContext);
  const { dToken, setDToken } = useContext(DoctorContext);
  const navigate = useNavigate();

  const logout = () => {
    navigate("/");
    if (aToken) {
      setAToken("");
      localStorage.removeItem("aToken");
    } else if (dToken) {
      setDToken("");
      localStorage.removeItem("dToken");
    }
  };

  return (
    <nav className="navbar w-full flex items-center justify-between sm:px-10 py-3 border-b  border-gray-300 bg-white">
      <NavLink className="navbar__link min-w-40">
        <img
          className={"mb-2 w-32"}
          src={assets.admin_logo}
          alt={"Admin Logo"}
        />
        <p className="px-3 text-sm text-gray-500 font-bold">Dashboard Panel</p>
      </NavLink>

      <div className="navbar__content min-h-20 w-full flex items-center  justify-between">
        <p className="border px-4.5 py-0.5 rounded-full border-gray-500 text-gray-600 self-end">
          {aToken ? "Admin" : "Doctor"}
        </p>

        <button
          className="navbar__logout bg-emerald-500 text-white font-semibold px-3 py-0.5 -ml-12 -mt-9 rounded-full cursor-pointer hover:bg-emerald-400 transition-colors duration-700 sm:px-10 sm:py-2 sm:ml-0 sm:mt-0"
          onClick={logout}
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
