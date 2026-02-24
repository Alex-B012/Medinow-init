import { Route, Routes, useLocation } from "react-router-dom";

import Home from "./pages/Home";
import Doctors from "./pages/Doctors/Doctors";
import Contact from "./pages/Contact";
import About from "./pages/About/About";
import Login from "./pages/Login";
import MyProfile from "./pages/MyProfile";
import MyAppointment from "./pages/MyAppointment";
import Appointment from "./pages/Appointment/Appointment";
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
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/my-profile" element={<MyProfile />} />
        <Route path="/my-appointment" element={<MyAppointment />} />
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
