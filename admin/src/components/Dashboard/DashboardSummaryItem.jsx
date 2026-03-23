const DashboardSummaryItem = ({ icon, value, label, currency }) => {
  return (
    <div className="dashboard-summary__item w-full py-4 px-2 min-w-68 max-w-75 2xl:max-w-84.5 flex items-center justify-evenly gap-4 bg-white rounded border-2 border-emerald-100 cursor-pointer shadow-sm hover:scale-105 transition-all sm:gap-6 sm:px-6">
      <img
        className="dashboard-summary__img w-20 h-20"
        src={icon}
        alt={`${label} icon`}
      />
      <div className="dashboard-summary__data flex flex-col justify-center items-center">
        <p className="dashboard-summary__number text-2xl font-semibold text-gray-600">
          {label === "Earnings" ? `${currency} ${value}` : value}
        </p>
        <p className="dashboard-summary__text text-lg text-gray-400">{label}</p>
      </div>
    </div>
  );
};

export default DashboardSummaryItem;
