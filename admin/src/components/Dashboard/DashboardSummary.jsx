import { assets } from "../../assets/assets";
import DashboardSummaryItem from "./DashboardSummaryItem";

const DashboardSummary = ({ data, role = "Admin", currency = "$" }) => {
  const summaryData = {
    ...(role === "Admin" && {
      doctors: { number: data.doctors, icon: assets.doctor_icon },
    }),
    ...(role === "Doctor" && {
      earnings: { number: data.earnings, icon: assets.earnings_icon },
    }),
    appointments: { number: data.appointments, icon: assets.list_icon },
    patients: { number: data.patients, icon: assets.patients_icon },
  };

  return (
    <div className="dashboard-summary w-full flex flex-wrap justify-center gap-8 lg:justify-start  lg:max-w-175 xl:max-w-220 2xl:max-w-270">
      {Object.entries(summaryData).map(([key, value]) => (
        <DashboardSummaryItem
          key={key}
          currency={currency}
          icon={value.icon}
          value={value.number}
          label={key.charAt(0).toUpperCase() + key.slice(1)}
        />
      ))}
    </div>
  );
};

export default DashboardSummary;
