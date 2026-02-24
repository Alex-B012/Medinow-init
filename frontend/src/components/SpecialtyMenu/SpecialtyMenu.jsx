import { Link } from "react-router-dom";
import { promotion_data } from "../../data/data";
import { specialties_data } from "../../data/data_specialties";
import { createSlug } from "../../utils/slug";

import TitleDescription from "../Titles/TitleDescription";

const SpecialtyMenu = () => {
  return (
    <div
      id="specialty"
      className="specialty-menu flex flex-col items-center gap-4 py-5 px-4"
    >
      <TitleDescription
        title={"Find by Specialty"}
        description={promotion_data.text}
      />
      <div className="specialty-menu__list flex flex-wrap gap-4 justify-center mt-4 ">
        {specialties_data.map((item) => (
          <Link
            to={`/doctors/${createSlug(item.name)}`}
            key={item.id}
            className="specialty-item w-25 flex flex-col  gap-2 items-center my-4 mx-6 cursor-pointer hover:scale-110 hover:-translate-y-2 transition-all duration-500"
          >
            <img
              className="specialty-item__img w-25 h-25 rounded-full object-cover p-3 bg-linear-to-t from-gray-100 to-gray-300"
              src={item.img}
              alt={item.name}
            />
            <p className="specialty-item__text text-center text-sm sm:text-base">
              {item.name}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SpecialtyMenu;
