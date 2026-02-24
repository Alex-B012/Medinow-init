import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const AppointmentDoctorFee = ({ fee }) => {
  const { currencySymbol } = useContext(AppContext);

  return (
    <p className="appointment-doctor-fee ">
      Appointment fee:{" "}
      <span className="appointment-doctor-fee__price font-semibold">
        {currencySymbol}
        {fee}
      </span>
    </p>
  );
};

export default AppointmentDoctorFee;
