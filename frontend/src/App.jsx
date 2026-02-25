import { Route, Routes, useLocation } from "react-router-dom";

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

import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";
import ScrollToTop from "./components/ScrollToTop.jsx";

function App() {
  const location = useLocation();

  return (
    <div className="App mx-4 md:mx-[10%] sm:mx-[5%]">
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route
          path="/doctors/:specialty"
          element={<Doctors key={location.pathname} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/career" element={<Career />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/login" element={<LoginCreateAccount />} />
        <Route path="/my-profile" element={<MyProfile />} />
        <Route path="/my-appointments" element={<MyAppointments />} />
        <Route
          path="/appointment/:docId"
          element={<Appointment key={location.pathname} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
