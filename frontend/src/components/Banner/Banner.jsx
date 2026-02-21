import BannerLeft from "./BannerLeft";
import { header_doctors_image } from "../../assets/assets";

const Banner = () => {
  return (
    <div className="header bg-primary text-white p-2 flex flex-col justify-between gap-4 rounded-lg w-full max-w-300 h-full md:flex-row md:justify-center lg:min-h-100 lg:p-4 xl:min-h-80 2xl:max-h-90">
      <BannerLeft />
      <div className="header__right relative h-full w-full flex flex-col justify-center items-center rounded-lg md:w-1/2 md:max-h-100 md:max-w-100 ">
        <img
          src={header_doctors_image}
          alt="Header Right"
          className="w-full md:absolute top-0 md:top-[1vh] mx-auto 2xl:top-0 rounded-lg"
        />
      </div>
    </div>
  );
};

export default Banner;
