import { useState } from "react";
import { AdminContext } from "./AppContext";
import axios from "axios";
import { toast } from "react-toastify";
import { useCallback } from "react";

const AdminContextProvider = ({ children }) => {
  const [aToken, setAToken] = useState(
    localStorage.getItem("aToken") ? localStorage.getItem("aToken") : "",
  );
  const [doctors, setDoctors] = useState([]);
  const [appointments, setAppointments] = useState([]);

  const adminApi = "/api/admin";
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  // API to get all the doctors for the Admin panel
  const getAllDoctors = useCallback(async () => {
    try {
      const { data } = await axios.post(
        backendUrl + `${adminApi}/all-doctors`,
        {},
        { headers: { a_token: aToken } },
      );

      if (data.success) {
        setDoctors(data.doctors);
        console.log("Doctors fetched:", data.doctors);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  }, [aToken, backendUrl]);

  // API to change the availability of a doctor on the Admin panel
  const changeAvailability = async (docId) => {
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
    if (!aToken) return;

    try {
      const { data } = await axios.post(
        backendUrl + `${adminApi}/all-appointments`,
        {},
        { headers: { a_token: aToken } },
      );

      if (data.success) {
        setAppointments(data.appointments);
        console.log("Appointments fetched:", data.appointments);
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
  };

  return (
    <AdminContext.Provider value={value}>{children}</AdminContext.Provider>
  );
};

export default AdminContextProvider;
