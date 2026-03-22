import { NavLink } from "react-router-dom";
import { admin_links, doctor_links } from "../data/data";
import { useContext } from "react";
import { AdminContext, DoctorContext } from "../context/AppContext";

const SideBar = () => {
  const { aToken } = useContext(AdminContext);
  const { dToken } = useContext(DoctorContext);

  return (
    <div className="sidebar w-full pb-6 pt-10 flex flex-wrap justify-evenly gap-1 bg-white lg:border-r  border-gray-300 lg:pb-0 lg:min-h-screen lg:w-50 lg:flex-col lg:justify-start">
      {aToken &&
        Object.entries(admin_links).map(([key, value]) => (
          <NavLink
            className={({ isActive }) => {
              return `sidebar__link min-h-10 max-h-12 max-w-60 min-w-45 flex items-center gap-3 px-2 py-2 ${
                isActive
                  ? "bg-gray-100 border-b lg:border-b-0 lg:border-r-4 border-emerald-500 font-semibold"
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

      {dToken &&
        Object.entries(doctor_links).map(([key, value]) => (
          <NavLink
            className={({ isActive }) => {
              return `sidebar__link min-h-10 max-h-12 max-w-60 min-w-45 flex items-center gap-3 px-2 py-2 ${
                isActive
                  ? "bg-gray-100 border-b lg:border-b-0 lg:border-r-4 border-emerald-500 font-semibold"
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
