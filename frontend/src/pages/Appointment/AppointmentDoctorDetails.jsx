import { assets } from "../../assets/assets";
import Icon from "../../components/Icon/Icon";
import AppointmentDoctorFee from "./AppointmentDoctorFee";

const AppointmentDoctorDetails = ({ data }) => {
  return (
    <div className="appointment-doctor-details w-auto min-w-70 max-w-200 p-4 flex flex-col justify-center gap-3 border rounded-xl border-gray-400 md:h-fit md:min-h-85 md:min-w-110  ">
      <h3 className="appointment-doctor-details__name flex flex-row gap-2 font-black text-xl">
        {data.name}
        <Icon src={assets.verified_icon} alt={"Verified icon"} />
      </h3>
      <div className="appointment-doctor-details__experience flex gap-3">
        <p>
          {data.degree} - {data.specialty}
        </p>
        <button className="px-4 border-2 border-gray-200 rounded-xl -mt-0.5">
          {data.experience}
        </button>
      </div>

      <div className="appointment-doctor-details__about flex flex-col gap-2">
        <h4 className="appointment-doctor-details__about-title flex gap-2 font-black">
          About
          <Icon src={assets.info_icon} alt={"Info icon"} />
        </h4>
        <p>{data.about}</p>
      </div>
      <AppointmentDoctorFee fee={data.fees} />
    </div>
  );
};

export default AppointmentDoctorDetails;
