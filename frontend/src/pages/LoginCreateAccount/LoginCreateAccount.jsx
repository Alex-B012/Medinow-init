import { useState } from "react";
import InputField from "./InputField ";
import AuthSwitch from "./AuthSwitch";

const LOGIN = "Login";
const LOGIN_s = "log in";
const SING_UP = "Sign Up";
const SING_UP_s = "sign up";
const CREATE_ACCOUNT = "Create Account";
const LOGIN_HERE = "Login here";
const CLICK_HERE = "Click here";
const HAVE_ACCOUNT = "Already have an account?";
const NEW_ACCOUNT = "Create a new account?";

const LoginCreateAccount = () => {
  const [state, setState] = useState(SING_UP);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");

  // const onSubmitHandler = async (event) => {
  //   event.preventDefault();
  // };

  return (
    <div className="login-create-account flex flex-col gap-6 items-center w-full">
      <form className="flex items-center sm:min-h-[80vh]">
        <div className="flex flex-col gap-3 items-start justify-center p-8 min-w-75 sm:min-w-96 sm:border border-emerald-400 rounded-xl sm:shadow-lg">
          <p className="font-semibold text-2xl ">
            {state === SING_UP ? CREATE_ACCOUNT : LOGIN}
          </p>
          <p className="text-zinc-600 my-2">
            Please {state === SING_UP ? SING_UP_s : LOGIN_s} to book an
            appointment
          </p>
          <InputField
            label="Full Name"
            type="text"
            id="fullName_id"
            value={name}
            onChange={setName}
            required
          />
          <InputField
            label="Email"
            type="email"
            id="email_id"
            value={email}
            onChange={setEmail}
            required
          />
          <InputField
            label="Password"
            type="password"
            id="password_id"
            value={password}
            onChange={setPassword}
            required
          />

          <span className="w-full h-15">
            {state === SING_UP ? (
              <InputField
                label="Confirm password"
                type="password"
                id="confirm_password_id"
                value={confirmPassword}
                onChange={setConfirmPassword}
                required
              />
            ) : (
              ""
            )}
          </span>

          <button className="login-create-account__btn w-full  mt-12 py-2 bg-emerald-500  font-semibold text-lg cursor-pointer transition-colors duration-700 text-white hover:bg-emerald-400 sm:mt-7">
            {state === SING_UP ? CREATE_ACCOUNT : LOGIN}
          </button>

          <AuthSwitch
            state={state}
            setState={setState}
            setConfirmPassword={setConfirmPassword}
            sing_up={SING_UP}
            login={LOGIN}
            login_here={LOGIN_HERE}
            click_here={CLICK_HERE}
            existing_account={HAVE_ACCOUNT}
            new_account={NEW_ACCOUNT}
          />
        </div>
      </form>
    </div>
  );
};

export default LoginCreateAccount;
