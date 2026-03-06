import { useEffect, useState, useMemo } from "react";
import { AppContext } from "./AppContext";
import { toast } from "react-toastify";
import axios from "axios";

const AppContextProvider = ({ children }) => {
  const currencySymbol = "$";
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [doctors, setDoctors] = useState([]);
  const [token, setToken] = useState(
    localStorage.getItem("token") ? localStorage.getItem("token") : false,
  );

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const { data } = await axios.get(backendUrl + "/api/doctor/list");

        if (data.success) {
          setDoctors(data.doctors);
        } else {
          toast.error(data.message);
        }
      } catch (error) {
        console.log(error);
        toast.error(error.message);
      }
    };

    fetchDoctors();
  }, [backendUrl]);

  const value = useMemo(
    () => ({
      doctors,
      currencySymbol,
      token,
      setToken,
      backendUrl,
    }),
    [doctors, token, backendUrl],
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
