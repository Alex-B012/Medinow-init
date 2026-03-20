import {
  getFormattedDate,
  getFormattedTime,
  getPatientAge,
} from "../../../utils/utils";
import TableBodyCell from "./TableBodyCell";

const TableBodyRow = ({ data, number }) => {
  return (
    <div className="appointment-row w-full px-0 hidden sm:grid sm:mt-5 grid-cols-[0.5fr_3fr_1fr_3fr_3fr_1fr_1fr] grid-flow-col">
      <TableBodyCell data={number} text_position={"center"} />
      <div className="appointment__name-cell w-full flex flex-col justify-between items-center sm:gap-2 xl:justify-start xl:items-start 2xl:flex-row">
        <img
          className="appointment__img w-25"
          src={data.userData.image}
          alt={data.userData.name}
        />
        <div className="appointment__img w-full h-full text-center xl:text-left xl:pl-3 2xl:flex 2xl:items-center">
          {data.userData.name}
        </div>
      </div>
      <TableBodyCell
        data={getPatientAge(data.userData.dob)}
        text_position="center"
      />
      <div className="appointment__date w-full h-full flex flex-col justify-center items-center">
        <div className="px-1 text-center xl:hidden">{`${getFormattedDate(data.slotDate)}`}</div>
        <div className="text-center xl:hidden">{`${getFormattedTime(data.slotTime)}`}</div>
        <div className="text-center hidden xl:flex">{`${getFormattedDate(data.slotDate)} - ${getFormattedTime(data.slotTime)}`}</div>
      </div>
      <TableBodyCell data={data.docData.name} text_position={"center"} />
      <TableBodyCell data={`$ ${data.amount}`} text_position={"center"} />
      <TableBodyCell data={"Actions"} />
    </div>
  );
};

export default TableBodyRow;
