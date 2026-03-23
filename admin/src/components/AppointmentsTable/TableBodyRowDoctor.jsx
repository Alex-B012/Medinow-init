import {
  getFormattedDate,
  getFormattedTime,
  getPatientAge,
} from "../../utils/utils";
import CancelAppointment from "./CancelAppointment";
import CompleteAppointment from "./CompleteAppointment";
import PersonData from "./PersonData";
import TableBodyCell from "./TableBodyCell";

const TableBodyRowDoctor = ({ componentData, number }) => {
  const {
    data,
    currency,
    cancel_appointment,
    complete_appointment,
    paymentOptions,
  } = componentData;

  return (
    <div className="appointment-row-doctor w-full hidden sm:grid sm:py-4 grid-cols-[0.5fr_3fr_1fr_3fr_3fr_1fr_1fr] grid-flow-col border-b border-stone-200 hover:bg-emerald-50">
      <TableBodyCell data={number} text_position={"center"} />
      <PersonData name={data.userData.name} image={data.userData.image} />

      <TableBodyCell
        data={data.payment ? paymentOptions.online : paymentOptions.cash}
        text_position="center"
      />

      <TableBodyCell
        data={getPatientAge(data.userData.dob)}
        text_position="center"
      />

      <div className="appointment-row-doctor__date w-full h-full flex flex-col justify-center items-center">
        <div className="px-1 text-center xl:hidden">{`${getFormattedDate(data.slotDate)}`}</div>
        <div className="text-center xl:hidden">{`${getFormattedTime(data.slotTime)}`}</div>
        <div className="text-center hidden xl:flex">{`${getFormattedDate(data.slotDate)} - ${getFormattedTime(data.slotTime)}`}</div>
      </div>

      <TableBodyCell
        data={`${currency} ${data.amount}`}
        text_position={"center"}
      />

      <div className="w-full h-full flex flex-col gap-1">
        {!data.isCompleted && (
          <CancelAppointment
            cancelled={data.cancelled}
            cancel_func={cancel_appointment}
            id={data._id}
          />
        )}

        {!data.cancelled && (
          <CompleteAppointment
            completed={data.isCompleted}
            complete_func={complete_appointment}
            id={data._id}
          />
        )}
      </div>
    </div>
  );
};

export default TableBodyRowDoctor;
