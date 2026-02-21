import { assets, header_images } from "../../assets/assets";
import { Link } from "react-router-dom";
import { promotion_data } from "../../data/data";

const HeaderLeft = () => {
  return (
    <div className="header__left md:w-1/2 flex flex-col justify-center gap-4 py-10 m-auto md:py-[5vw] md:-mb-7.5 md:pt-3">
      <p className="header__left-title text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight md:leading-tight">
        Book Appointment <br /> With Trusted Doctors
      </p>
      <div className="header__left-bottom flex gap-5 ">
        <div className="header__left-images flex w-35">
          {header_images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Person ${index + 1}`}
              className="header__left-img w-10 h-10 rounded-full object-cover -ml-3 first:ml-0"
            />
          ))}
        </div>
        <p className="header__left-description flex text-xl w-full">
          {promotion_data.text}
        </p>
      </div>
      <Link
        to="#speciality"
        className="header__left-link w-60 bg-white text-black font-bold pl-8 pr-4 py-2 rounded-3xl mt-6 hover:bg-green-200 transition-colors duration-300 cursor-pointer"
      >
        Book Appointment{" "}
        <img
          src={assets.dropdown_icon}
          alt="banner arrow icon"
          className="w-5 inline-block ml-5 mb-0.5 -rotate-90"
        />
      </Link>
    </div>
  );
};

export default HeaderLeft;
