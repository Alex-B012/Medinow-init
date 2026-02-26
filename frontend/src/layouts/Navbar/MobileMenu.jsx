import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../../components/Logo";
import NavbarLinks from "./NavbarLinks";

const MobileMenu = ({
  links,
  auth_links,
  token = false,
  setShowToken,
  setShowMenu,
}) => {
  const navigate = useNavigate();

  return (
    <div className="mobile-menu fixed inset-0 bg-white opacity-90 z-40 flex flex-col items-center pt-[12vh]">
      4:21:07
      <Logo />
      <div className="mobile-menu__container flex justify-center items-center gap-20 [@media(min-height:450px)]:flex-col [@media(min-height:450px)]:gap-10">
        <NavbarLinks data={links} mobile={true} setShowMenu={setShowMenu} />

        <div className="mobile-menu__profile-links">
          {token ? (
            <div className="mobile-menu__profile-menu w-full flex flex-col items-start gap-5">
              {auth_links.map((link) => {
                if (link.name === "Login") return null;
                const logout = link.name === "Logout" ? true : false;

                return (
                  <NavLink
                    to={link.path}
                    className="mobile-menu__profile-link "
                    key={link.name}
                  >
                    <p
                      className="mobile-menu__li w-45 text-lg text-black uppercase text-center hover:text-emerald-400"
                      onClick={() => {
                        logout && setShowToken(false);
                        if (link.name !== "Logout") setShowMenu(false);
                      }}
                    >
                      {link.name}
                    </p>
                  </NavLink>
                );
              })}
            </div>
          ) : (
            <button
              onClick={() => {
                navigate(auth_links[0].path);
                setShowMenu(false);
              }}
              className="mobile-menu__button w-45 py-3 bg-blue-900 text-white rounded-full font-light cursor-pointer transition-colors duration-700 hover:bg-blue-800 md:block md:w-28 md:py-2 lg:w-35 lg:py-3"
            >
              Create account
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
