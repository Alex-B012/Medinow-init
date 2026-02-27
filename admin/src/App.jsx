// import { Route, Routes } from "react-router-dom";
import ScrollToTop from "../../frontend/src/components/ScrollToTop.jsx";
import Login from "./pages/Login/Login.jsx";

const App = () => {
  // const location = useLocation();

  return (
    <div className="App mx-4 md:mx-[10%] sm:mx-[5%]">
      {/* <ScrollToTop /> */}
      <Login />
    </div>
  );
};

export default App;
