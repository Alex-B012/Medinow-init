const AppointmentBtn = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="appointment-btn bg-gray-100 text-gray-600 py-3 px-12 rounded-full mt-8 hover:bg-emerald-300 hover:text-white transition-colors duration-700 cursor-pointer shadow-md font-bold"
    >
      {text || "Book Now"}
    </button>
  );
};

export default AppointmentBtn;
