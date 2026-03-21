import {
  getFormattedDate,
  getFormattedTime,
  getPatientAge,
} from "../../../utils/utils";
import CancelAppointment from "./CancelAppointment";

const AppointmentsRecords = ({ componentData }) => {
  const { data, currency, cancel_appointment } = { ...componentData };

  console.log("data:", data);

  return (
    <div className="appointments-records py-3 px-6 flex flex-col gap-12 sm:hidden">
      {data.map((item, idx) => {
        return (
          <div
            className="appointments-records__item flex flex-col gap-3"
            key={item._id}
          >
            <div className="flex">
              <span className="w-10 text-lg">{idx + 1}.</span>
              <div className="w-full flex flex-col items-center text-center ">
                <img
                  className="w-43 h-43"
                  src={item.userData?.image}
                  alt={item.userData?.name}
                />
                <div className="mt-2 text-lg font-semibold">
                  {item.userData?.name}
                </div>
              </div>
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
              <span className="font-semibold pr-2">Doctor:</span>{" "}
              {item.docData?.name}
            </div>
            <div>
              <span className="font-semibold pr-2">Fees:</span> {currency}{" "}
              {item.amount}
            </div>
            <CancelAppointment
              cancelled={item.cancelled}
              cancel_func={cancel_appointment}
              id={item._id}
            />
          </div>
        );
      })}
    </div>
  );
};

export default AppointmentsRecords;
