import { useContext } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../../context/AppContext";

import AppointmentDoctorDetails from "./AppointmentDoctorDetails";
import AppointmentDoctorImg from "./AppointmentDoctorImg";

const Appointment = () => {
  const { docId } = useParams();
  const { doctors } = useContext(AppContext);
  const docInfo = doctors.find((doctor) => doctor._id === Number(docId));

  return (
    <div className="appointment flex flex-col gap-6 items-center w-full py-8">
      {docInfo && (
        <div className="appointment__container flex flex-col gap-6 items-center w-full">
          <div className="appointment__doctor-info flex flex-col md:flex-row items-center md:justify-between md:items-start gap-8 ">
            <AppointmentDoctorImg
              img_data={{ src: docInfo.image, alt: docInfo.name }}
            />
            <AppointmentDoctorDetails data={docInfo} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Appointment;
