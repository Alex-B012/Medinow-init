import HeaderLeft from "./HeaderLeft";
import { header_doctors_image } from "../../assets/assets";

const Header = () => {
  return (
    <div className="header  text-white p-2 flex flex-col justify-between md:flex-row md:justify-center gap-4 rounded-lg w-full lg:h-[0vh]">
      <HeaderLeft />
      <div className="header__right md:w-1/2 relative h-full flex flex-col justify-center">
        <img
          src={header_doctors_image}
          alt="Header Right"
          className="w-full md:absolute top-0 h-auto rounded-lg"
        />
      </div>
    </div>
  );
};

export default Header;
