import { Link } from "react-router-dom";
import { appointment_links } from "../../data/links";

const TopDoctorCard = ({ doctor }) => {
  return (
    <Link
      to={`${appointment_links[0].path}/${doctor._id}`}
      className="top-doctor-card border border-blue-200 w-60 m-4 rounded-xl overflow-hidden shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-500"
    >
      {doctor.image && (
        <img
          className="w-60 h-85 object-cover"
          src={doctor.image}
          alt={doctor.name}
        />
      )}

      <div className="top-doctor-card__info p-4 flex flex-col gap-0.5">
        <div className="flex item-center gap-2 text-sm text-center text-green-500">
          <p className="w-2 h-2 bg-green-500 rounded-full mt-1.5"></p>
          <p className="">Available</p>
        </div>

        {doctor.name && (
          <p className="text-gray-900 text-lg font-bold">{doctor.name}</p>
        )}
        {doctor.specialty && (
          <p className="text-gray-600 text-sm">{doctor.specialty}</p>
        )}
      </div>
    </Link>
  );
};

export default TopDoctorCard;
