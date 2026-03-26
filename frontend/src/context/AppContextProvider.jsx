import { useEffect, useCallback, useState, useMemo } from "react";
import { AppContext } from "./AppContext";
import { toast } from "react-toastify";
import axios from "axios";

const AppContextProvider = ({ children }) => {
  const [doctors, setDoctors] = useState([]);
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [userData, setUserData] = useState(false);
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const currencySymbol = "$";

  const DOCTOR_API = "/api/doctor";
  const USER_API = "/api/user";

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const { data } = await axios.get(backendUrl + `${DOCTOR_API}/list`);

        if (!data.success) return toast.error(data.message);

        setDoctors(data.doctors);
      } catch (error) {
        console.log(error);
        toast.error(error.message);
      }
    };

    fetchDoctors();
  }, [backendUrl]);

  const getDoctorData = useCallback(async () => {
    try {
      const { data } = await axios.get(backendUrl + `${DOCTOR_API}/list`);

      if (!data.success) return toast.error(data.message);

      setDoctors(data.doctors);
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  }, [backendUrl]);

  const loadUserProfileData = useCallback(async () => {
    try {
      const { data } = await axios.get(backendUrl + `${USER_API}/profile`, {
        headers: { token },
      });

      if (!data.token) setUserData(false);

      if (data.success) {
        setUserData({
          ...data.userData,
          address:
            typeof data.userData.address === "string"
              ? JSON.parse(data.userData.address)
              : data.userData.address,
        });
      } else toast.error(data.message);
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  }, [backendUrl, token]);

  useEffect(() => {
    if (!token) return;

    Promise.resolve().then(() => {
      loadUserProfileData();
    });
  }, [token, loadUserProfileData]);

  const value = useMemo(
    () => ({
      doctors,
      getDoctorData,
      currencySymbol,
      token,
      setToken,
      backendUrl,
      userData,
      setUserData,
      loadUserProfileData,
      USER_API,
    }),
    [
      doctors,
      token,
      backendUrl,
      userData,
      loadUserProfileData,
      getDoctorData,
      USER_API,
    ],
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
