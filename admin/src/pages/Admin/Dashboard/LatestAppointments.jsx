import { useEffect, useState } from "react";
import { getFormattedDate, getFormattedTime } from "../../../utils/utils";
import CancelAppointment from "../../../components/AppointmentsTable/CancelAppointment";

const LatestAppointments = ({ data }) => {
  const { dashData, cancel_func } = { ...data };
  const [appointmentsData, setAppointmentsData] = useState([]);

  useEffect(() => {
    setAppointmentsData(dashData.latestAppointments);
  }, [dashData]);

  return (
    <div className="latest-appointments pt-1">
      <h3 className="latest-appointments__title w-full pb-2 mb-6 font-semibold border-b-2 border-gray-200">
        Latest Appointments
      </h3>
      {appointmentsData &&
        appointmentsData.map((item) => (
          <div
            className="latest-appointments__item flex flex-col items-center justify-between px-6 pb-8 gap-4 hover:bg-emerald-50 sm:flex-row sm:py-4 "
            key={item._id}
          >
            <img
              className="w-40 h-56 rounded-xl sm:w-20 sm:h-28 "
              src={item.docData.image}
              alt={item.docData.name}
            />
            <div className="latest-appointments__item-data min-w-50 flex flex-1 flex-col gap-3 sm:flex sm:flex-row sm:justify-evenly  ">
              <div className="flex text-gray-800 font-semibold">
                {item.docData.name}
              </div>
              <div className="flex text-gray-500">
                {`Booking on ${getFormattedDate(item.slotDate)}, ${getFormattedTime(item.slotTime)}`}
              </div>
            </div>
            <div>
              <CancelAppointment
                cancelled={item.cancelled}
                cancel_func={cancel_func}
                id={item._id}
              />
            </div>
          </div>
        ))}
    </div>
  );
};

export default LatestAppointments;
