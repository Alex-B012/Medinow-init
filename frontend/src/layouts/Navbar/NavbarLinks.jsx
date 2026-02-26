import { NavLink } from "react-router-dom";

const NavbarLinks = ({ data }) => {
  return (
    <ul className="navbar-links items-start gap-5 font-medium hidden md:flex">
      {data.map((link) => (
        <NavLink
          to={link.path}
          className="navbar-links__link uppercase py-1 hover:text-emerald-400"
          key={link.name}
          activeClassName="active"
        >
          <li className="navbar-links__li py-1"> {link.name}</li>
          <hr className="navbar-links__hr border-none outline-none h-0.5 bg-emerald-400 secondary w-3/5 m-auto opacity-0" />
        </NavLink>
      ))}
    </ul>
  );
};

export default NavbarLinks;
