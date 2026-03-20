import { useContext } from "react";
import { AdminContext } from "../../../context/AppContext";
import { useEffect } from "react";

import AdminContent from "../components/AdminContent";
import AdminTitle from "../components/AdminTitle";
import DashboardSummary from "./DashboardSummary";
import { useState } from "react";
import Loading from "../../../components/Loading";

const Dashboard = () => {
  const { aToken, dashboardData, getDashboardData, cancelAppointment } =
    useContext(AdminContext);
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
  }, [aToken, getDashboardData]);

  return (
    <div className="dashboard w-full min-h-screen pb-10 px-0 sm:px-6 lg:min-w-screen lg:bg-gray-100">
      13:08:54
      <AdminTitle title={"Dashboard"} />
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
          <div></div>
        </AdminContent>
      )}
    </div>
  );
};

export default Dashboard;
