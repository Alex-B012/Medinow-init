import { Link } from "react-router-dom";
import { promotion_data } from "../../data/data";
import { specialities_data } from "../../data/data_specialities";

const SpecialityMenu = () => {
  return (
    <div id="speciality" className="speciality-menu">
      <h2 className="speciality-menu__title">Find by Speciality</h2>
      <p className="speciality-menu__text">{promotion_data.text}</p>
      <div className="speciality-menu__list flex flex-wrap gap-4 justify-center mt-4">
        {specialities_data.map((item) => (
          <Link
            to={`/doctors/${item.id}`}
            key={item.id}
            className="speciality-item w-15 flex flex-col  gap-2 items-center  cursor-pointer my-4 mx-6"
          >
            <img
              className="speciality-item__img w-15 h-15 rounded-full object-cover p-1 bg-linear-to-t from-gray-100 to-gray-300"
              src={item.img}
              alt={item.name}
            />
            <p className="speciality-item__text text-center text-sm sm:text-base">
              {item.name}
            </p>
          </Link>
        ))}
      </div>
      1:07:06
    </div>
  );
};

export default SpecialityMenu;
