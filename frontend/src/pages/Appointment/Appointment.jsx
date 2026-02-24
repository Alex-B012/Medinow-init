import { useContext, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../../context/AppContext";

import AppointmentDoctorDetails from "./AppointmentDoctorDetails";
import AppointmentDoctorImg from "./AppointmentDoctorImg";
import AppointmentBtn from "./AppointmentBtn";
import RelatedDoctors from "../../components/RelatedDoctors/RelatedDoctors";
import SectionTitle from "../../components/Titles/SectionTitle";

const PERIOD = 7;
const STARTTIME_DEFAULT = 10;
const ENDTIME_DEFAULT = 21;
const MINUTES = 30;

const Appointment = () => {
  const { docId } = useParams();
  const { doctors } = useContext(AppContext);
  const docInfo = doctors.find((doctor) => doctor._id === Number(docId));

  const [selectedDayIndex, setSelectedDayIndex] = useState(0);
  const [selectedSlotIndex, setSelectedSlotIndex] = useState(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const docSlots = useMemo(() => {
    const today = new Date();
    const allDays = [];

    for (let i = 0; i < PERIOD; i++) {
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      let endTime = new Date(today);
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
        currentDate.setHours(STARTTIME_DEFAULT, 0, 0, 0);
      }

      let timeSlots = [];
      while (currentDate < endTime) {
        const formattedTime = currentDate.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });
        timeSlots.push({
          datetime: new Date(currentDate),
          time: formattedTime,
        });
        currentDate.setMinutes(currentDate.getMinutes() + MINUTES);
      }

      allDays.push({
        date: new Date(
          today.getFullYear(),
          today.getMonth(),
          today.getDate() + i,
        ),
        slots: timeSlots,
      });
    }

    return allDays;
  }, []);

  const formatDayLabel = (date) =>
    date.toLocaleDateString([], { weekday: "short", day: "numeric" });

  const handleBooking = () => {
    if (selectedSlotIndex === null) {
      setError("Please select a time slot before booking.");
      setSuccess("");
      return;
    }

    setError("");

    const selectedDay = docSlots[selectedDayIndex];
    const selectedSlot = selectedDay.slots[selectedSlotIndex];

    const bookingData = {
      doctorId: docInfo._id,
      doctorName: docInfo.name,
      specialty: docInfo.specialty,
      date: selectedDay.date,
      time: selectedSlot.time,
      datetime: selectedSlot.datetime,
      fees: docInfo.fees,
    };

    console.log("Booking Data:", bookingData);
    setSuccess("Success - Review Console");
  };

  return (
    <div className="appointment flex flex-col gap-6 items-center w-full py-8">
      {docInfo ? (
        <div className="appointment__container flex flex-col gap-6 items-center w-full max-w-5xl">
          <div className="appointment__doctor-info flex flex-col md:flex-row items-center md:justify-between md:items-start gap-8 w-full">
            <AppointmentDoctorImg
              img_data={{ src: docInfo.image, alt: docInfo.name }}
            />
            <AppointmentDoctorDetails data={docInfo} />
          </div>

          <SectionTitle title={"Booking slots"} />

          {/* Row of Days */}
          <div className="appointment__days flex flex-wrap gap-4 mt-6 pt-1 overflow-x-auto w-full justify-center">
            {docSlots.map((day, index) => (
              <button
                key={index}
                className={`w-25 px-3 py-2 text-sm font-semibold text-gray-700 rounded border  cursor-pointer hover:-translate-y-1 transition-transform duration-500  ${
                  selectedDayIndex === index
                    ? "bg-emerald-300 text-white border-emerald-300"
                    : "bg-white border-gray-300"
                } hover:bg-emerald-100`}
                onClick={() => {
                  setSelectedDayIndex(index);
                  setSelectedSlotIndex(null);
                }}
              >
                {formatDayLabel(day.date).toUpperCase()}
              </button>
            ))}
          </div>

          {/* Row of Time Slots */}
          <div className="appointment__times flex flex-wrap gap-x-2 gap-y-3 mt-4 justify-center  max-w-220">
            {docSlots[selectedDayIndex]?.slots.map((slot, slotIndex) => (
              <button
                key={slotIndex}
                className={`w-25 px-3 py-2 text-sm font-semibold text-gray-700 rounded border cursor-pointer hover:-translate-y-1 transition-transform duration-500  ${
                  selectedSlotIndex === slotIndex
                    ? "bg-emerald-300 text-white border-emerald-300"
                    : "bg-white border-gray-300"
                } hover:bg-green-200`}
                onClick={() => setSelectedSlotIndex(slotIndex)}
              >
                {slot.time}
              </button>
            ))}
          </div>

          <AppointmentBtn text="Book an appointment" onClick={handleBooking} />

          {error && error ? (
            <p className="text-red-500 h-5 text-sm mt-2 font-medium">{error}</p>
          ) : (
            <p className="text-emerald-500 h-5 text-sm mt-2 font-medium">
              {success}
            </p>
          )}

          <RelatedDoctors docId={docId} specialty={docInfo.specialty} />
        </div>
      ) : (
        <p className="text-center text-red-500 mt-10">Doctor not found.</p>
      )}
    </div>
  );
};

export default Appointment;
