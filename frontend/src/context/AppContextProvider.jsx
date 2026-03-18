import { useEffect, useState, useMemo } from "react";
import { AppContext } from "./AppContext";
import { toast } from "react-toastify";
import axios from "axios";
import { useCallback } from "react";

const AppContextProvider = ({ children }) => {
  const currencySymbol = "$";
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [doctors, setDoctors] = useState([]);
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [userData, setUserData] = useState(false);

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

  const getDoctorData = async () => {
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

  const loadUserProfileData = useCallback(async () => {
    try {
      const { data } = await axios.post(
        backendUrl + "/api/user/profile",
        {},
        {
          headers: { token },
        },
      );

      if (!data.token) setUserData(false);

      if (data.success) {
        setUserData({
          ...data.userData,
          address: JSON.parse(data.userData.address),
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
    }),
    [doctors, token, backendUrl, userData, loadUserProfileData],
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
// 11:40:27 - check doctor
