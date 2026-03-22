import { assets } from "../../assets/assets";

const CancelAppointment = ({ cancelled, cancel_func, id }) => {
  return (
    <div className="appointment__cancel-btn-container w-full h-full flex flex-col justify-center items-center">
      {cancelled ? (
        <p className="appointment__cancel-btn w-13 h-13 ml-1 xl:ml-0 rounded-2xl flex flex-col justify-center items-center text-stone-500 ">
          Cancelled
        </p>
      ) : (
        <button
          className="appointment__cancel-btn w-13 h-13 rounded-2xl opacity-85 flex flex-col justify-center items-center cursor-pointer hover:opacity-100"
          onClick={() => cancel_func(id)}
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
  );
};

export default CancelAppointment;
