import { NavLink } from "react-router-dom";

const NavbarProfile = ({ assets, auth_links, setShowToken }) => {
  return (
    <div className="navbar__profile-wrapper flex items-center justify-end gap-2 cursor-pointer group relative">
      <img
        src={assets.profile_pic}
        alt="profile image"
        className="w-12 h-12 rounded-full "
      />
      <img className="w-5" src={assets.dropdown_icon} alt="dropdown icon" />
      <div className="navbar__profile-container">
        <div className="navbar__profile-menu w-36 absolute right-0 top-full bg-gray-50 rounded-lg shadow-lg p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300 z-100">
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
                  className="navbar__li py-1 hover:text-emerald-400"
                  onClick={() => {
                    logout && setShowToken(false);
                  }}
                >
                  {link.name}
                </p>
              </NavLink>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NavbarProfile;
