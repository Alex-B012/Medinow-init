import HeaderLeft from "./HeaderLeft";
import { header_doctors_image } from "../../assets/assets";

const Header = () => {
  return (
    <div className="header bg-primary text-white p-2 flex justify-between rounded-lg lg:w-4xl md:w-2xl ">
      <HeaderLeft />
      <div className="header__right ml-1">
        <img
          src={header_doctors_image}
          alt="Header Right"
          className="w-full rounded object-cover hidden lg:min-w-120 lg:h-120 md:block min-w-80 h-80"
        />
      </div>
    </div>
  );
};

export default Header;
