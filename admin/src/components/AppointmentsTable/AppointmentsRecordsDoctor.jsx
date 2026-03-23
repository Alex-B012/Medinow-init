import {
  getFormattedDate,
  getFormattedTime,
  getPatientAge,
} from "../../utils/utils";
import CancelAppointment from "./CancelAppointment";
import CompleteAppointment from "./CompleteAppointment";

const AppointmentsRecordsDoctor = ({ componentData }) => {
  const {
    data,
    currency,
    cancel_appointment,
    complete_appointment,
    paymentOptions,
  } = {
    ...componentData,
  };

  return (
    <div className="appointments-records-doctor py-3 px-6 flex flex-col gap-12 sm:hidden">
      {data.map((item, idx) => {
        return (
          <div
            className="appointments-records-doctor__item p-2 flex flex-col gap-3 hover:bg-emerald-50 rounded-lg"
            key={item._id}
          >
            <div className="flex">
              <span className="w-10 text-lg">{idx + 1}.</span>
              <div className="w-full flex flex-col items-center text-center ">
                <img
                  className="w-40 h-40 rounded-xl"
                  src={item.userData?.image}
                  alt={item.userData?.name}
                />
                <div className="mt-2 text-lg font-semibold">
                  {item.userData?.name}
                </div>
              </div>
            </div>

            <div>
              <span className="font-semibold pr-2">Payment:</span>
              {data.payment ? paymentOptions.online : paymentOptions.cash}
            </div>

            <div>
              <span className="font-semibold pr-2">Age:</span>
              {getPatientAge(item.userData?.dob)}
            </div>

            <div>
              <span className="font-semibold pr-2">Date & Time:</span>
              {`${getFormattedDate(item.slotDate)}, ${getFormattedTime(item.slotTime)}`}
            </div>

            <div>
              <span className="font-semibold pr-2">Fees:</span> {currency}{" "}
              {item.amount}
            </div>

            <div className="w-full h-full flex mt-6 gap-1 sm:flex-col sm:mt-0">
              {!item.isCompleted && (
                <CancelAppointment
                  cancelled={item.cancelled}
                  cancel_func={cancel_appointment}
                  id={item._id}
                />
              )}

              {!item.cancelled && (
                <CompleteAppointment
                  completed={item.isCompleted}
                  complete_func={complete_appointment}
                  id={item._id}
                />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AppointmentsRecordsDoctor;
