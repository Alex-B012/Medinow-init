import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth_links, navbar_links } from "../../data/links";
import { assets } from "../../assets/assets";

import Logo from "../../components/Logo";
import NavbarLinks from "./NavbarLinks";
import NavbarProfile from "./NavbarProfile";
import HamburgerMenu from "../../components/HamburgerMenu";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const navigate = useNavigate();

  const [showMenu, setShowMenu] = useState(false);
  const [token, setShowToken] = useState(true);

  return (
    <div className="navbar flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400">
      <Logo isLink={true} />
      <NavbarLinks data={navbar_links} />

      <div className="navbar__button-container items-center gap-4 hidden md:flex">
        {token ? (
          <NavbarProfile
            assets={assets}
            auth_links={auth_links}
            setShowToken={setShowToken}
          />
        ) : (
          <button
            onClick={() => navigate(auth_links[0].path)}
            className="navbar__button w-35 py-3 bg-blue-900 text-white rounded-full font-light cursor-pointer transition-colors duration-700 hover:bg-blue-800 md:block md:w-28 md:py-2 lg:w-35 lg:py-3"
          >
            Create account
          </button>
        )}
        {/* <img src={"menu_btn"} alt="Menu button" /> */}
      </div>
      <HamburgerMenu showMenu={showMenu} setShowMenu={setShowMenu} />
      {showMenu && <MobileMenu />}
    </div>
  );
};

export default Navbar;
