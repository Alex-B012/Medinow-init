import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";
import axios from "axios";

import TitleDescription from "../../components/Titles/TitleDescription";
import Loading from "../../components/Loading";
import { toast } from "react-toastify";
import { getAppointmentDateAndTime } from "../../utils/appointment";

const NO_APPOINTMENTS = "No appointments found";

const MyAppointments = () => {
  const { backendUrl, token } = useContext(AppContext);
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    if (!token) return;

    const fetchAppointments = async () => {
      try {
        const { data } = await axios.post(
          `${backendUrl}/api/user/appointments`,
          {},
          {
            headers: { token },
          },
        );

        if (data.success) {
          setAppointments(data.appointments.reverse());
          console.log("Appointments retrieved:", data.appointments);
        }
      } catch (error) {
        console.log("ERROR:", error);
        const message =
          error.response?.data?.message ||
          error.message ||
          "Something went wrong";
        toast.error(message);
      }
    };

    fetchAppointments();
  }, [token]);

  return (
    <div className="my-appointments w-full pb-10 flex flex-col gap-6">
      <TitleDescription title={"My Appointments"} case_class={"uppercase"} />

      <p className="my-appointments__text pb-3 font-medium text-zinc-600 border-b border-gray-300  ">
        My Appointment
      </p>

      {!appointments ||
        (appointments.length === 0 && <Loading text={NO_APPOINTMENTS} />)}

      {appointments.map((item) => (
        <div
          className="my-appointments__card pb-8 py-2 flex flex-col items-center gap-8 border-b border-gray-300 sm:flex-row sm:items-start"
          key={item.docData._id}
        >
          <img
            className="my-appointments__img w-40 h-56"
            src={item.docData.image}
            alt={item.docData.name}
          />

          <div className="my-appointments__doctor-info flex flex-col gap-6 text-sm text-zinc-600">
            <div>
              {item.docData.name && (
                <p className="text-neutral-800 font-semibold text-lg">
                  {item.docData.name}
                </p>
              )}

              {item.docData.specialty && <p>{item.docData.specialty}</p>}
            </div>

            <div>
              <p className="text-zinc-700 font-semibold mb-1">Address:</p>
              <p className="">{item.docData.address.line1}</p>
              <p className="">{item.docData.address.line2}</p>
            </div>

            <p>
              <span className="text-zinc-700 font-semibold mr-2 flex w-fit">
                Date & Time:
              </span>

              {item.slotDate && item.slotTime && (
                <span>
                  {getAppointmentDateAndTime(item.slotDate, item.slotTime)}
                </span>
              )}
            </p>
          </div>
          <div className="m-auto"></div>
          <div className=" flex gap-6 justify-end sm:h-56 sm:flex-col">
            <button className="px-2 py-1 text-stone-500 text-center border rounded cursor-pointer hover:border-emerald-400 hover:bg-emerald-400 hover:text-white transition-colors duration-700 min-[400px]:py-2 min-[400px]:px-4">
              Pay Online
            </button>

            <button className="px-2 py-1 text-stone-500 text-center border rounded cursor-pointer hover:border-red-400 hover:bg-red-400 hover:text-white transition-colors duration-700 min-[400px]:py-2 min-[400px]:px-4">
              Cancel appointment
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyAppointments;
