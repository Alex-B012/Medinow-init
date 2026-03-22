import { useContext, useState } from "react";
import { AdminContext } from "../../../context/AppContext";
import { useEffect } from "react";

import AdminContent from "../components/AdminContent";
import Title from "../../../components/Title";
import DashboardSummary from "./DashboardSummary";
import LatestAppointments from "./LatestAppointments";
import Loading from "../../../components/Loading";

const Dashboard = () => {
  const {
    aToken,
    dashboardData,
    getDashboardData,
    cancelAppointment,
    appointments,
  } = useContext(AdminContext);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!aToken) return;

    const fetchDashboard = async () => {
      try {
        await getDashboardData();
      } finally {
        setLoading(false);
      }
    };

    fetchDashboard();
  }, [aToken, getDashboardData, appointments]);

  return (
    <div className="dashboard w-full min-h-screen pb-10 px-0 sm:px-6 lg:min-w-screen lg:bg-gray-100">
      <Title title={"Dashboard"} />
      {loading ? (
        <Loading />
      ) : dashboardData ? (
        <DashboardSummary data={dashboardData} />
      ) : (
        <Loading text={"No data found"} />
      )}
      <div className="mt-12"></div>
      {dashboardData && (
        <AdminContent>
          <LatestAppointments
            data={{ dashData: dashboardData, cancel_func: cancelAppointment }}
          />
        </AdminContent>
      )}
    </div>
  );
};

export default Dashboard;
