import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Doctors from "./pages/Doctors";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Login from "./pages/Login";
import MyProfile from "./pages/MyProfile";
import MyAppointment from "./pages/MyAppointment";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="bg-gray-600 text-green-500 justify-center flex items-center h-screen mx-4 sm:mx-[10%]">
      App
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/my-profile" element={<MyProfile />} />
        <Route path="/my-appointment" element={<MyAppointment />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
