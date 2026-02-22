import { AppContext } from "./AppContext";
import { doctorsData } from "../data/data_doctors";

const AppContextProvider = ({ children }) => {
  const value = {
    doctors: doctorsData,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
