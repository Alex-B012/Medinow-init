import HeaderLeft from "./HeaderLeft";
import { header_doctors_image } from "../../assets/assets";

const Header = () => {
  return (
    <div className="header bg-primary text-white p-2 flex flex-col justify-between gap-4 rounded-lg w-full ">
      <HeaderLeft />
      <div className="header__right ml-1">
        <img
          src={header_doctors_image}
          alt="Header Right"
          className="w-full rounded object-cover"
        />
      </div>
    </div>
  );
};

export default Header;
