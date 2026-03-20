import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.css";

import App from "./App.jsx";
import AdminContextProvider from "./context/AdminContextProvider.jsx";
import DoctorContextProvider from "./context/DoctorContextProvider.jsx";
import ApplicationContextProvider from "./context/ApplicationContextProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AdminContextProvider>
        <DoctorContextProvider>
          <ApplicationContextProvider>
            <App />
          </ApplicationContextProvider>
        </DoctorContextProvider>
      </AdminContextProvider>
    </BrowserRouter>
  </StrictMode>,
);
