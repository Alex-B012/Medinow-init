import { NavLink } from "react-router-dom";
import { admin_links } from "../data/data";
import { useContext } from "react";
import { AdminContext } from "../context/AppContext";

const SideBar = () => {
  const { aToken } = useContext(AdminContext);

  return (
    <div className="min-h-screen bg-white border-r border-gray-300 sidebar w-42 pt-10 flex flex-col gap-2">
      {aToken &&
        Object.entries(admin_links).map(([key, value]) => (
          <NavLink
            className={({ isActive }) => {
              return `sidebar__link min-h-10 flex items-center gap-3 px-1 py-2 ${
                isActive
                  ? "bg-gray-100 border-r-4 border-emerald-500 font-semibold"
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
