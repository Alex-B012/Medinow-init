import { useContext, useState } from "react";
import { AdminContext } from "../../context/AppContext";
import { toast } from "react-toastify";
import axios from "axios";

import LoginInputField from "./LoginInputField";
import LoginToggleText from "./LoginText";
import RegularBtn from "../../components/Btns/RegularBtn";

const Login = () => {
  const [role, setRole] = useState("Admin");
  const { setAToken, backendUrl } = useContext(AdminContext);

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
      if (role === "Admin") {
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
      }
    } catch (err) {
      console.log("Temp console -", err);
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
          <RegularBtn text={"Login"} />
          <LoginToggleText currentRole={role} setRole={setRole} />
        </div>
      </form>
    </div>
  );
};

export default Login;
