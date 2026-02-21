import { header_images } from "../../assets/assets";
import { Link } from "react-router-dom";

const HeaderLeft = () => {
  return (
    <div className="header__left  flex flex-col justify-center gap-4">
      <p className="header__left-title text-3xl font-bold mb-6">
        Book Appointment <br /> With Trusted Doctors
      </p>
      <div className="header__left-bottom flex ">
        <div className="header__left-images flex mr-3">
          {header_images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Person ${index + 1}`}
              className="header__left-img w-10 h-10 rounded-full object-cover -ml-3 first:ml-0"
            />
          ))}
        </div>
        <p className="header__left-description">
          Simply browse throught our extensive list of trusted doctors,
          <br /> select your preferred doctor, and schedule your appointment
          hassle-free.
        </p>
      </div>
      <Link to="/doctors">
        <button className="header__left-button bg-white text-black font-bold px-8 py-2 rounded-3xl mt-6 hover:bg-green-700 transition-colors duration-300 cursor-pointer">
          Book Now
        </button>
      </Link>
    </div>
  );
};

export default HeaderLeft;
