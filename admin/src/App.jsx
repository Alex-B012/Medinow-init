import { Route, Routes } from "react-router-dom";
import { useContext } from "react";
import { admin_links, doctor_links } from "./data/data.js";
import { ToastContainer } from "react-toastify";
import { AdminContext, DoctorContext } from "./context/AppContext";

import ScrollToTop from "../../frontend/src/components/ScrollToTop.jsx";
import Login from "./pages/Login/Login.jsx";
import Navbar from "./layouts/Navbar.jsx";
import SideBar from "./layouts/SideBar.jsx";

import Dashboard from "./pages/Admin/Dashboard/Dashboard.jsx";
import AdminAppointments from "./pages/Admin/AdminAppointments/AdminAppointments.jsx";
import AddDoctor from "./pages/Admin/AddDoctor.jsx";
import DoctorsList from "./pages/Admin/DoctorsList.jsx";

import DoctorDashboard from "./pages/Doctor/DoctorDashboard/DoctorDashboard.jsx";
import DoctorAppointments from "./pages/Doctor/DoctorAppointments/DoctorAppointments.jsx";
import DoctorProfile from "./pages/Doctor/DoctorProfile/DoctorProfile.jsx";

const App = () => {
  const { aToken } = useContext(AdminContext);
  const { dToken } = useContext(DoctorContext);

  return aToken || dToken ? (
    <div className="App mx-4 md:mx-[10%] sm:mx-[5%]">
      <ScrollToTop />
      <ToastContainer />
      <Navbar />
      <div className="flex flex-col items-start lg:flex-row">
        <SideBar />
        <Routes>
          {/* Admin route */}
          <Route path={`/`} element={<Dashboard />} />
          <Route
            path={`/${admin_links.admin_dashboard.url}`}
            element={<Dashboard />}
          />
          <Route
            path={`/${admin_links.all_appointments.url}`}
            element={<AdminAppointments />}
          />
          <Route
            path={`/${admin_links.add_doctor.url}`}
            element={<AddDoctor />}
          />
          <Route
            path={`/${admin_links.doctor_list.url}`}
            element={<DoctorsList />}
          />
          {/* Doctor route */}
          <Route
            path={`/${doctor_links.doctor_dashboard.url}`}
            element={<DoctorDashboard />}
          />
          <Route
            path={`/${doctor_links.doctor_appointments.url}`}
            element={<DoctorAppointments />}
          />
          <Route
            path={`/${doctor_links.doctor_profile.url}`}
            element={<DoctorProfile />}
          />
        </Routes>
      </div>
    </div>
  ) : (
    <div className="App mx-4 md:mx-[10%] sm:mx-[5%]">
      <Login />
      <ToastContainer />
    </div>
  );
};

export default App;
