import { AdminContext } from "./AppContext";

const AdminContextProvider = ({ children }) => {
  const value = {};

  return (
    <AdminContext.Provider value={value}>{children}</AdminContext.Provider>
  );
};

export default AdminContextProvider;
