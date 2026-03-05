import { NavLink } from "react-router-dom";
import { admin_links } from "../data/data";
import { useContext } from "react";
import { AdminContext } from "../context/AppContext";

const SideBar = () => {
  const { aToken } = useContext(AdminContext);

  return (
    <div className="sidebar w-full pb-6 pt-10 flex flex-wrap justify-evenly gap-1 bg-white sm:border-r border-gray-300 sm:pb-0 sm:min-h-screen sm:w-50 sm:flex-col sm:justify-start">
      {aToken &&
        Object.entries(admin_links).map(([key, value]) => (
          <NavLink
            className={({ isActive }) => {
              return `sidebar__link min-h-10 max-h-12 max-w-60 min-w-45 flex items-center gap-3 px-2 py-2 ${
                isActive
                  ? "bg-gray-100 border-b sm:border-r-4 border-emerald-500 font-semibold"
                  : ""
              }`;
            }}
            to={value.url}
            key={key}
          >
            <img
              className="mr-1 w-7"
              src={value.icon}
              alt={`${value.name} Icon`}
            />
            <p className="">{value.name}</p>
          </NavLink>
        ))}
    </div>
  );
};

export default SideBar;
