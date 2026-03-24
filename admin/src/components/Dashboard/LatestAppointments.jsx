import { useEffect, useState } from "react";
import { getFormattedDate, getFormattedTime } from "../../utils/utils";
import CancelAppointment from "../../components/AppointmentsTable/CancelAppointment";
import CompleteAppointment from "../../components/AppointmentsTable/CompleteAppointment";

const LatestAppointments = ({ data, role = "Admin" }) => {
  const { dashData, cancel_func, complete_func } = { ...data };
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
            {role === "Admin" ? (
              <img
                className="w-40 h-56 rounded-xl sm:w-20 sm:h-28 "
                src={item.docData.image}
                alt={item.docData.name}
              />
            ) : (
              <img
                className="w-40 h-40 rounded-xl sm:w-20 sm:h-20 xl:w-30 xl:h-30 "
                src={item.userData.image}
                alt={item.userData.name}
              />
            )}

            <div className="latest-appointments__item-data min-w-50 flex flex-1 flex-col gap-3 sm:flex sm:flex-row sm:justify-evenly  ">
              <div className="flex text-gray-800 font-semibold">
                {role === "Admin" ? item.docData.name : item.userData.name}
              </div>
              <div className="inline text-gray-500 xl:flex">
                <span className="min-w-20 mr-1 sm:hidden xl:flex">{`Booking on`}</span>
                {` ${getFormattedDate(item.slotDate)}, ${getFormattedTime(item.slotTime)}`}
              </div>
            </div>
            <div>
              <div className="w-full h-full flex mt-6 gap-3 sm:gap-1 sm:flex-col sm:mt-0 ">
                {!item.isCompleted && (
                  <CancelAppointment
                    cancelled={item.cancelled}
                    cancel_func={cancel_func}
                    id={item._id}
                  />
                )}

                {!item.cancelled && (
                  <CompleteAppointment
                    completed={item.isCompleted}
                    complete_func={complete_func}
                    id={item._id}
                  />
                )}
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default LatestAppointments;
