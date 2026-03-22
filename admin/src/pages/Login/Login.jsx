import { useContext, useState } from "react";
import { AdminContext, DoctorContext } from "../../context/AppContext";
import { toast } from "react-toastify";
import axios from "axios";

import LoginInputField from "./LoginInputField";
import LoginToggleText from "./LoginText";
import RegularBtn from "../../components/Btns/RegularBtn";

const Login = () => {
  const adminRole = "Admin";
  const doctorRole = "Doctor";
  const [role, setRole] = useState(adminRole);
  const { setAToken, backendUrl } = useContext(AdminContext);
  const { setDToken } = useContext(DoctorContext);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      if (role === adminRole) {
        const url = backendUrl + "/api/admin/login";

        const { data } = await axios.post(url, {
          email: formData.email,
          password: formData.password,
        });

        if (data.success) {
          localStorage.setItem("aToken", data.token);
          setAToken(data.token);
        } else {
          toast.error(data.message);
        }
      } else if (role === doctorRole) {
        const { data } = await axios.post(backendUrl + "/api/doctor/login", {
          email: formData.email,
          password: formData.password,
        });

        if (data.success) {
          localStorage.setItem("dToken", data.token);
          setDToken(data.token);
        } else {
          toast.error(data.message);
        }
      }
    } catch (err) {
      console.log("ERROR:", err);
    }
  };

  return (
    <div className="login w-full pb-10 flex flex-col gap-6">
      <form
        onSubmit={onSubmitHandler}
        className="login__form min-h-[80vh] flex items-center"
      >
        <div className="flex flex-col items-center gap-3 m-auto item-start p-8 min-w-60 sm:min-w-96 border border-primary rounded-xl text-zinc-700 shadow-lg">
          <h1 className="login__title text-2xl font-semibold m-auto">
            <span className="text-primary">{role}</span> Login
          </h1>
          <div className="w-60 space-y-4 mb-12 pt-6 sm:w-75">
            <LoginInputField
              label="Email"
              type="email"
              name="email"
              id="login-email_id"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />

            <LoginInputField
              label="Password"
              type="password"
              name="password"
              id="login-password_id"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />
          </div>
          <RegularBtn text={"Login"} type="submit" />
          <LoginToggleText
            currentRole={role}
            roles={{ adminRole, doctorRole }}
            setRole={setRole}
          />
        </div>
      </form>
    </div>
  );
};

export default Login;
