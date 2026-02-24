import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../../context/AppContext";

import AppointmentDoctorDetails from "./AppointmentDoctorDetails";
import AppointmentDoctorImg from "./AppointmentDoctorImg";

const PERIOD = 7;
const STARTTIME_DEFAULT = 10;
const ENDTIME_DEFAULT = 21;
const MINUTES = 30;

const Appointment = () => {
  const { docId } = useParams();
  const { doctors } = useContext(AppContext);
  const docInfo = doctors.find((doctor) => doctor._id === Number(docId));
  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState("");

  const getAvailableSlots = async () => {
    setDocSlots([]);

    const today = new Date();

    for (let i = 0; i < PERIOD; i++) {
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      let endTime = new Date();
      endTime.setDate(today.getDate() + i);
      endTime.setHours(ENDTIME_DEFAULT, 0, 0, 0);

      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(
          currentDate.getHours() > STARTTIME_DEFAULT
            ? currentDate.getHours() + 1
            : STARTTIME_DEFAULT,
        );
        currentDate.setMinutes(
          currentDate.getMinutes() > MINUTES ? MINUTES : 0,
        );
      } else {
        currentDate.setHours(10);
        currentDate.setMinutes(0);
      }

      let timeSlots = [];

      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });

        timeSlots.push({
          datetime: new Date(currentDate),
          time: formattedTime,
        });

        currentDate.setMinutes(currentDate.getMinutes() + MINUTES);
      }

      setDocSlots((prev) => [...prev, timeSlots]);
    }
  };

  useEffect(() => {
    console.log("docSlots:", docSlots);
    // getAvailableSlots();
  }, [docSlots]);

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
