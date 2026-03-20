import { assets } from "../../../assets/assets";
import {
  getFormattedDate,
  getFormattedTime,
  getPatientAge,
} from "../../../utils/utils";
import PersonData from "./PersonData";
import TableBodyCell from "./TableBodyCell";

const TableBodyRow = ({ componentData, number }) => {
  const { data, currency, cancel_appointment } = componentData;

  return (
    <div className="appointment-row w-full hidden sm:grid sm:py-4 grid-cols-[0.5fr_3fr_1fr_3fr_3fr_1fr_1fr] grid-flow-col border-b border-stone-200 hover:bg-emerald-50">
      <TableBodyCell data={number} text_position={"center"} />

      <PersonData name={data.userData.name} image={data.userData.image} />

      <TableBodyCell
        data={getPatientAge(data.userData.dob)}
        text_position="center"
      />

      <div className="appointment__date w-full h-full flex flex-col justify-center items-center">
        <div className="px-1 text-center xl:hidden">{`${getFormattedDate(data.slotDate)}`}</div>
        <div className="text-center xl:hidden">{`${getFormattedTime(data.slotTime)}`}</div>
        <div className="text-center hidden xl:flex">{`${getFormattedDate(data.slotDate)} - ${getFormattedTime(data.slotTime)}`}</div>
      </div>

      <PersonData
        name={data.docData.name}
        image={data.docData.image}
        doctor={true}
      />

      <TableBodyCell
        data={`${currency} ${data.amount}`}
        text_position={"center"}
      />

      <div className="appointment__cancel-btn-container w-full h-full flex flex-col justify-center items-center">
        {data.cancelled ? (
          <p className="appointment__cancel-btn w-13 h-13 rounded-2xl flex flex-col justify-center items-center text-stone-500 ">
            Cancelled
          </p>
        ) : (
          <button
            className="appointment__cancel-btn w-13 h-13 rounded-2xl opacity-85 flex flex-col justify-center items-center cursor-pointer hover:opacity-100"
            onClick={() => cancel_appointment(data._id)}
          >
            <img
              className="appointment__cancel-img w-6 h-6 text-sm rounded-full text-center"
              src={assets.cancel_icon}
              alt="Cancel icon"
            />
            <p className="appointment__cancel-text pt-1 text-sm text-red-500">
              Cancel
            </p>
          </button>
        )}
      </div>
    </div>
  );
};

export default TableBodyRow;
