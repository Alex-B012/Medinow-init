import { useContext, useEffect, useState } from "react";
import { ApplicationContext, DoctorContext } from "../../../context/AppContext";

import Title from "../../../components/Title";
import AdminContent from "../../Admin/components/AdminContent";
import Loading from "../../../components/Loading";
import DashboardSummary from "../../../components/Dashboard/DashboardSummary";
import LatestAppointments from "../../../components/Dashboard/LatestAppointments";

const DoctorDashboard = () => {
  const {
    dToken,
    dashData,
    // setDashData,
    getDashData,
    completeAppointment,
    cancelAppointment,
  } = useContext(DoctorContext);
  const { currency } = useContext(ApplicationContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!dToken) return;

    const fetchDashboard = async () => {
      try {
        await getDashData();
      } finally {
        setLoading(false);
      }
    };

    fetchDashboard();
  }, [dToken, getDashData]);

  return (
    <div className="doctor-dashboard w-full min-h-screen pb-10 px-0 sm:px-6 lg:min-w-screen lg:bg-gray-100">
      <Title title={"Dashboard"} />
      {loading ? (
        <Loading />
      ) : dashData ? (
        <DashboardSummary data={dashData} role={"Doctor"} currency={currency} />
      ) : (
        <Loading text={"No data found"} />
      )}
      <div className="mt-12"></div>
      {dashData && (
        <AdminContent>
          <LatestAppointments
            data={{
              dashData: dashData.latestAppointments,
              cancel_func: cancelAppointment,
              complete_func: completeAppointment,
            }}
            role={"Doctor"}
          />
        </AdminContent>
      )}
    </div>
  );
};

export default DoctorDashboard;
