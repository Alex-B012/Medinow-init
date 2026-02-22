import { assets } from "../../../assets/assets";
import { Link } from "react-router-dom";

import BannerTitle from "./BannerTitle";
import BannerPromo from "./BannerPromo";

const BannerLeft = ({ title, three_images, text, button }) => {
  return (
    <div className="header__left px-0 mx-0 md:w-1/2 flex flex-col justify-center gap-4 py-10 m-auto md:py-[5vw] md:-mb-7.5 md:pt-3">
      <BannerTitle title={title} />
      <BannerPromo data={three_images} text={text} />

      {button && button.same_page_link && button.text ? (
        <a
          href={`#${button.same_page_link}`}
          className="header__left-link w-60 bg-white text-black font-bold pl-8 pr-4 py-2 rounded-3xl mt-6 hover:bg-green-200 transition-colors duration-300 cursor-pointer"
        >
          {button.text}
          <img
            src={assets.dropdown_icon}
            alt="banner arrow icon"
            className="w-5 inline-block ml-5 mb-0.5 -rotate-90"
          />
        </a>
      ) : button && button.link ? (
        <Link
          to={button.link}
          className="header__left-link w-60 bg-white text-black font-bold pl-8 pr-4 py-2 rounded-3xl mt-6 hover:bg-green-200 transition-colors duration-300 cursor-pointer"
        >
          {button.text}
          <img
            src={assets.dropdown_icon}
            alt="banner arrow icon"
            className="w-5 inline-block ml-5 mb-0.5 -rotate-90"
          />
        </Link>
      ) : null}
    </div>
  );
};

export default BannerLeft;
