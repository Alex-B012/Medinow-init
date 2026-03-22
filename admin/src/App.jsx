import { Route, Routes } from "react-router-dom";
import { useContext } from "react";
import { admin_links } from "./data/data.js";
import { ToastContainer } from "react-toastify";
import { AdminContext, DoctorContext } from "./context/AppContext";

import ScrollToTop from "../../frontend/src/components/ScrollToTop.jsx";
import Login from "./pages/Login/Login.jsx";
import Navbar from "./layouts/Navbar.jsx";
import SideBar from "./layouts/SideBar.jsx";

import Dashboard from "./pages/Admin/Dashboard/Dashboard.jsx";
import AllAppointment from "./pages/Admin/AllAppointments/AllAppointments.jsx";
import AddDoctor from "./pages/Admin/AddDoctor.jsx";
import DoctorsList from "./pages/Admin/DoctorsList.jsx";

const App = () => {
  const { aToken } = useContext(AdminContext);
  const { dToken } = useContext(DoctorContext);

  if (aToken) {
    return (
      <div className="App mx-4 md:mx-[10%] sm:mx-[5%]">
        <ScrollToTop />
        <ToastContainer />
        <Navbar />
        <div className="flex flex-col items-start lg:flex-row">
          <SideBar />
          <Routes>
            <Route path={`/`} element={<Dashboard />} />
            <Route
              path={`/${admin_links.admin_dashboard.url}`}
              element={<Dashboard />}
            />
            <Route
              path={`/${admin_links.all_appointments.url}`}
              element={<AllAppointment />}
            />
            <Route
              path={`/${admin_links.add_doctor.url}`}
              element={<AddDoctor />}
            />
            <Route
              path={`/${admin_links.doctor_list.url}`}
              element={<DoctorsList />}
            />
          </Routes>
        </div>
      </div>
    );
  }

  if (dToken) {
    return (
      dToken && (
        <div className="App mx-4 md:mx-[10%] sm:mx-[5%]">
          <Login />
          <ToastContainer />
        </div>
      )
    );
  }

  return (
    <div className="App mx-4 md:mx-[10%] sm:mx-[5%]">
      <Login />
      <ToastContainer />
    </div>
  );
};

export default App;
