import { Route, Routes } from "react-router-dom";
import { useContext } from "react";
import { ToastContainer } from "react-toastify";
import { AdminContext } from "./context/AppContext";

import ScrollToTop from "../../frontend/src/components/ScrollToTop.jsx";
import Login from "./pages/Login/Login.jsx";
import Navbar from "./layouts/Navbar.jsx";
import SideBar from "./layouts/SideBar.jsx";

import Dashboard from "./pages/Admin/Dashboard.jsx";
import AllAppointment from "./pages/Admin/AllAppointment.jsx";
import AddDoctor from "./pages/Admin/AddDoctor.jsx";
import DoctorsList from "./pages/Admin/DoctorsList.jsx";
import { admin_links } from "./data/data.js";

const App = () => {
  const { aToken } = useContext(AdminContext);
  // console.log("aToken", aToken);

  return aToken ? (
    <div className="App mx-4 md:mx-[10%] sm:mx-[5%]">
      <ScrollToTop />
      <ToastContainer />
      <Navbar />
      <div className="flex flex-col items-start lg:flex-row">
        <SideBar />
        <Routes>
          <Route path={"/"} element={<></>} />
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
  ) : (
    <div className="App mx-4 md:mx-[10%] sm:mx-[5%] bg-amber-300">
      <Login />
      <ToastContainer />
    </div>
  );
};

export default App;
