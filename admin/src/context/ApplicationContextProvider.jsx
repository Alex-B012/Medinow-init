import { ApplicationContext } from "./AppContext";

const ApplicationContextProvider = ({ children }) => {
  const currency = "$";

  const value = { currency };

  return (
    <ApplicationContext.Provider value={value}>
      {children}
    </ApplicationContext.Provider>
  );
};

export default ApplicationContextProvider;
