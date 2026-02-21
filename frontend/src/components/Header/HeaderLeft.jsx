import { assets, header_images } from "../../assets/assets";
import { Link } from "react-router-dom";

const HeaderLeft = () => {
  return (
    <div className="header__left flex flex-col justify-center gap-4 py-10 m-auto lg:gap-24 md:gap-12">
      <p className="header__left-title text-4xl font-bold mb-6 md:w-1/2 md:">
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
          Simply browse throught our extensive list of trusted doctors, select
          your preferred doctor, and schedule your appointment hassle-free.
        </p>
      </div>
      <Link to="/doctors">
        <button className="header__left-button bg-white text-black font-bold pl-8 pr-4 py-2 rounded-3xl mt-6 hover:bg-green-700 transition-colors duration-300 cursor-pointer">
          Book Appointment{" "}
          <img
            src={assets.dropdown_icon}
            alt="banner arrow icon"
            className="w-5 inline-block ml-5 mb-0.5 -rotate-90"
          />
        </button>
      </Link>
    </div>
  );
};

export default HeaderLeft;
