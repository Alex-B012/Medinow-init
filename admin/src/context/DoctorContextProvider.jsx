import { useCallback, useState } from "react";
import { DoctorContext } from "./AppContext";
import axios from "axios";
import { toast } from "react-toastify";

const DoctorContextProvider = ({ children }) => {
  const [dToken, setDToken] = useState(
    localStorage.getItem("dToken") ? localStorage.getItem("dToken") : "",
  );

  const [doctorAppointments, setDoctorAppointments] = useState([]);
  const [dashData, setDashData] = useState(false);
  const [profileData, setProfileData] = useState(false);

  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const DOCTOR_API = "/api/doctor";

  // API to get all appointments for a doctor
  const getDoctorAppointments = useCallback(async () => {
    if (import.meta.env.DEV) console.log("getDoctorAppointments - start");

    try {
      const { data } = await axios.get(
        backendUrl + `${DOCTOR_API}/doctor-appointments`,
        { headers: { d_token: dToken } },
      );

      if (data.success) {
        setDoctorAppointments([...data.appointments].reverse());
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  }, [dToken, backendUrl]);

  // API to mark a selected appointment as completed in the doctor panel
  const completeAppointment = async (appointmentId) => {
    if (import.meta.env.DEV) console.log("completeAppointment - start");

    try {
      const { data } = await axios.post(
        backendUrl + `${DOCTOR_API}/complete-appointment`,
        { appointmentId },
        { headers: { d_token: dToken } },
      );

      if (data.success) {
        toast.success(data.message);
        getDoctorAppointments();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  // API to cancel a selected appointment in the doctor panel
  const cancelAppointment = async (appointmentId) => {
    if (import.meta.env.DEV) console.log("cancelAppointment - start");

    try {
      const { data } = await axios.post(
        backendUrl + `${DOCTOR_API}/cancel-appointment`,
        { appointmentId },
        { headers: { d_token: dToken } },
      );

      if (data.success) {
        toast.success(data.message);
        getDoctorAppointments();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  // API to get dashboard data for doctor panel
  const getDashData = useCallback(async () => {
    if (import.meta.env.DEV) console.log("getDashData - start");

    try {
      const { data } = await axios.get(backendUrl + `${DOCTOR_API}/dashboard`, {
        headers: { d_token: dToken },
      });

      if (data.success) {
        setDashData(data.dashData);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  }, [backendUrl, dToken]);

  const getProfileData = useCallback(async () => {
    if (import.meta.env.DEV) console.log("getProfileData - start");

    try {
      const { data } = await axios.get(backendUrl + `${DOCTOR_API}/profile`, {
        headers: { d_token: dToken },
      });

      if (data.success) {
        setProfileData(data.profileData);
        console.log("data:", data);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  }, [backendUrl, dToken]);

  const value = {
    dToken,
    setDToken,
    backendUrl,
    doctorAppointments,
    setDoctorAppointments,
    getDoctorAppointments,
    completeAppointment,
    cancelAppointment,
    dashData,
    setDashData,
    getDashData,
    profileData,
    setProfileData,
    getProfileData,
  };

  return (
    <DoctorContext.Provider value={value}>{children}</DoctorContext.Provider>
  );
};

export default DoctorContextProvider;
