import { NavLink, useNavigate } from "react-router-dom";
import { auth_links, navbar_links } from "../data/navbar_links";
import Logo from "../components/Logo";
import { useState } from "react";
import { assets } from "../assets/assets";

const Navbar = () => {
  const navigate = useNavigate();

  // const [showMenu, setShowMenu] = useState(false);
  const [token, setShowToken] = useState(true);

  return (
    <div className="navbar flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400 ">
      <Logo />
      <ul className="navbar__links items-start gap-5 font-medium hidden md:block md:flex">
        {navbar_links.map((link) => (
          <NavLink
            to={link.path}
            className="navbar__link uppercase py-1"
            key={link.name}
            activeClassName="active"
          >
            <li className="navbar__li py-1"> {link.name}</li>
            <hr className="navbar__hr border-none outline-none h-0.5 bg-secondary w-3/5 m-auto opacity-0" />
          </NavLink>
        ))}
      </ul>
      <div className="navbar__button-container flex items-center gap-4 ">
        {token ? (
          <div className="navbar__profile-wrapper flex items-center justify-end gap-2 cursor-pointer group relative">
            <img
              src={assets.profile_pic}
              alt="profile image"
              className="w-12 h-12 rounded-full "
            />
            <img
              className="w-5"
              src={assets.dropdown_icon}
              alt="dropdown icon"
            />
            <div className="navbar__profile-container">
              <div className="navbar__profile-menu w-35 absolute right-0 top-full bg-gray-50 rounded-lg shadow-lg p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300">
                {auth_links.map((link) => {
                  if (link.name === "Login") return null;
                  const logout = link.name === "Logout" ? true : false;

                  return (
                    <NavLink
                      to={link.path}
                      className="navbar__profile-link py-1"
                      key={link.name}
                    >
                      <p
                        className="navbar__li py-1 hover:text-green-700"
                        onClick={() => logout && setShowToken(false)}
                      >
                        {link.name}
                      </p>
                    </NavLink>
                  );
                })}
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate(auth_links[0].path)}
            className="navbar__button bg-blue-900 text-white px-8 py-3 rounded-full font-light  md:block w-39"
          >
            Create account
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
