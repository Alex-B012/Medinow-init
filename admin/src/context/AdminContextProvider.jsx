import { useState } from "react";
import { AdminContext } from "./AppContext";

const AdminContextProvider = ({ children }) => {
  const [aToken, setAToken] = useState(
    localStorage.getItem("aToken") ? localStorage.getItem("aToken") : "",
  );
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const value = { aToken, setAToken, backendUrl };

  return (
    <AdminContext.Provider value={value}>{children}</AdminContext.Provider>
  );
};

export default AdminContextProvider;
