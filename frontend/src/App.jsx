import { Route, Routes, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Home from "./pages/Home";
import Doctors from "./pages/Doctors/Doctors";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Career from "./pages/Career.jsx";
import LoginCreateAccount from "./pages/LoginCreateAccount/LoginCreateAccount.jsx";
import MyProfile from "./pages/MyProfile/MyProfile";
import MyAppointments from "./pages/MyAppointments/MyAppointments.jsx";
import Appointment from "./pages/Appointment/Appointment";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import NotFound from "./pages/NotFound/NotFound";

import Navbar from "./layouts/Navbar/Navbar";
import Footer from "./layouts/Footer";
import ScrollToTop from "./components/ScrollToTop.jsx";
import { getUrlByName } from "./utils/utils.js";
import {
  appointment_links,
  auth_links,
  footer_links,
  navbar_links,
} from "./data/links.js";

function App() {
  const location = useLocation();

  return (
    <div className="App mx-4 md:mx-[10%] sm:mx-[5%]">
      <ToastContainer />
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path={getUrlByName("Home", navbar_links)} element={<Home />} />
        <Route
          path={getUrlByName("All Doctors", navbar_links)}
          element={<Doctors />}
        />
        <Route
          path={`${getUrlByName("All Doctors", navbar_links)}/:specialty`}
          element={<Doctors key={location.pathname} />}
        />
        <Route path={getUrlByName("About", navbar_links)} element={<About />} />
        <Route
          path={getUrlByName("Contact", navbar_links)}
          element={<Contact />}
        />
        <Route
          path={getUrlByName("Login", auth_links)}
          element={<LoginCreateAccount />}
        />
        <Route
          path={getUrlByName("My Profile", auth_links)}
          element={<MyProfile />}
        />
        <Route
          path={getUrlByName("My Appointments", auth_links)}
          element={<MyAppointments />}
        />
        <Route
          path={`${getUrlByName("Appointment", appointment_links)}/:docId`}
          element={<Appointment key={location.pathname} />}
        />
        <Route
          path={getUrlByName("Career", footer_links)}
          element={<Career />}
        />
        <Route
          path={getUrlByName("Privacy Policy", footer_links)}
          element={<PrivacyPolicy />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
