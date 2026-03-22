import { useState, useCallback } from "react";
import { AdminContext } from "./AppContext";
import axios from "axios";
import { toast } from "react-toastify";

const AdminContextProvider = ({ children }) => {
  const [aToken, setAToken] = useState(
    localStorage.getItem("aToken") ? localStorage.getItem("aToken") : "",
  );
  const [doctors, setDoctors] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [dashboardData, setDashboardData] = useState(false);

  const adminApi = "/api/admin";
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  // API to get all the doctors for the Admin panel
  const getAllDoctors = useCallback(async () => {
    if (!aToken) {
      if (import.meta.env.MODE === "development")
        console.warn("Skipping getAllDoctors: no token");
      return;
    }

    try {
      const { data } = await axios.post(
        backendUrl + `${adminApi}/all-doctors`,
        {},
        { headers: { a_token: aToken } },
      );

      if (data.success) {
        setDoctors(data.doctors);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  }, [aToken, backendUrl]);

  // API to change the availability of a doctor on the Admin panel
  const changeAvailability = async (docId) => {
    if (!aToken) {
      if (import.meta.env.MODE === "development")
        console.warn("Skipping changeAvailability: no token");
      return;
    }

    try {
      const { data } = await axios.post(
        backendUrl + `${adminApi}/change-availability`,
        { docId },
        { headers: { a_token: aToken } },
      );

      if (data.success) {
        getAllDoctors();
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  // API to get all the appointments for the Admin panel
  const getAllAppointments = useCallback(async () => {
    if (!aToken) {
      if (import.meta.env.MODE === "development")
        console.warn("Skipping getAllAppointments: no token");
      return;
    }

    try {
      const { data } = await axios.post(
        backendUrl + `${adminApi}/all-appointments`,
        {},
        { headers: { a_token: aToken } },
      );

      if (data.success) {
        setAppointments(data.appointments);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  }, [aToken, backendUrl]);

  // API to cancel an appointment on the Admin panel
  const cancelAppointment = async (appointmentId) => {
    console.log("cancelAppointment - start");

    if (!aToken) {
      if (import.meta.env.MODE === "development")
        console.warn("Skipping cancelAppointment: no token");
      return;
    }

    try {
      const { data } = await axios.post(
        backendUrl + `${adminApi}/cancel-appointment`,
        { appointmentId },
        { headers: { a_token: aToken } },
      );

      if (data.success) {
        getAllAppointments();
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const getDashboardData = useCallback(async () => {
    console.log("getDashboardData - start");

    if (!aToken) {
      if (import.meta.env.MODE === "development")
        console.warn("Skipping getDashboardData: no token");
      return;
    }
    try {
      const { data } = await axios.post(
        backendUrl + `${adminApi}/dashboard`,
        {},
        { headers: { a_token: aToken } },
      );

      if (data.success) {
        setDashboardData(data.dashboardData);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  }, [aToken, backendUrl]);

  const value = {
    aToken,
    setAToken,
    backendUrl,
    doctors,
    getAllDoctors,
    changeAvailability,
    appointments,
    setAppointments,
    getAllAppointments,
    cancelAppointment,
    dashboardData,
    getDashboardData,
  };

  return (
    <AdminContext.Provider value={value}>{children}</AdminContext.Provider>
  );
};

export default AdminContextProvider;
