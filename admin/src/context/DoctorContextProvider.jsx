import { useCallback, useState } from "react";
import { DoctorContext } from "./AppContext";
import axios from "axios";
import { toast } from "react-toastify";

const DoctorContextProvider = ({ children }) => {
  const [dToken, setDToken] = useState(
    localStorage.getItem("dToken") ? localStorage.getItem("dToken") : "",
  );

  const [doctorAppointments, setDoctorAppointments] = useState([]);

  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const doctorApi = "/api/doctor";

  const getDoctorAppointments = useCallback(async () => {
    console.log("getDoctorAppointments - start");

    try {
      const { data } = await axios.post(
        backendUrl + `${doctorApi}/doctor-appointments`,
        {},
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

  const value = {
    dToken,
    setDToken,
    backendUrl,
    doctorAppointments,
    setDoctorAppointments,
    getDoctorAppointments,
  };

  return (
    <DoctorContext.Provider value={value}>{children}</DoctorContext.Provider>
  );
};

export default DoctorContextProvider;
