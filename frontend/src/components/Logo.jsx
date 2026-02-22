import { Link } from "react-router-dom";
import { logos } from "../assets/assets";

const Logo = ({ isLink = false }) => {
  return isLink ? (
    <Link to="/">
      <img src={logos.logo1} alt="logo" className="logo w-44 cursor-pointer" />
    </Link>
  ) : (
    <img src={logos.logo1} alt="logo" className="logo w-44 cursor-pointer" />
  );
};

export default Logo;
