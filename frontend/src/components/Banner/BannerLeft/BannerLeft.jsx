import { assets } from "../../../assets/assets";
import { Link } from "react-router-dom";

import BannerTitle from "./BannerTitle";
import BannerPromo from "./BannerPromo";
import BannerImg from "./BannerImg";

const BUTTON_CLASSES =
  "header__left-link size-fit bg-white text-gray-600 font-bold pl-8 pr-4 py-2 rounded-3xl mt-6 flex justify-between hover:scale-105 transition-all duration-300 cursor-pointer";

const BannerLeft = ({ title, three_images, text, button }) => {
  return (
    <div className="header__left px-0 mx-0 md:w-1/2 flex flex-col justify-center gap-4 py-10 m-auto md:py-[5vw] md:-mb-7.5 md:pt-3">
      <BannerTitle title={title} />
      <BannerPromo data={three_images} text={text} />

      {button && button.text && (
        <>
          {button.same_page_link ? (
            <a href={`#${button.same_page_link}`} className={BUTTON_CLASSES}>
              {button.text}
              <BannerImg src={assets.dropdown_icon} alt="banner arrow icon" />
            </a>
          ) : button.link ? (
            <Link to={button.link} className={BUTTON_CLASSES}>
              {button.text}
              <BannerImg src={assets.dropdown_icon} alt="banner arrow icon" />
            </Link>
          ) : null}
        </>
      )}
    </div>
  );
};

export default BannerLeft;
