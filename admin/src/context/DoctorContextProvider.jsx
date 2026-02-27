import { DoctorContext } from "./AppContext";

const DoctorContextProvider = ({ children }) => {
  const value = {};

  return (
    <DoctorContext.Provider value={value}>{children}</DoctorContext.Provider>
  );
};

export default DoctorContextProvider;
