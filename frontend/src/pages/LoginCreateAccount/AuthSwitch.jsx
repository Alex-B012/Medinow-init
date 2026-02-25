const AuthSwitch = ({
  state,
  setState,
  setConfirmPassword,
  className = "",
  sing_up = "Sign Up",
  login = "Login",
  login_here = "Login here",
  click_here = "Click here",
  existing_account = "Already have an account?",
  new_account = "Create a new account?",
}) => {
  const isSignUp = state === sing_up;

  const handleClick = () => {
    setState(isSignUp ? login : sing_up);

    if (isSignUp && setConfirmPassword) {
      setConfirmPassword("");
    }
  };

  return (
    <p className={`mt-5 text-zinc-600 ${className}`}>
      {isSignUp ? existing_account : new_account}

      <span
        onClick={handleClick}
        className="block font-semibold cursor-pointer text-blue-800 hover:text-blue-600 hover:underline min-[367px]:inline min-[367px]:pl-2"
      >
        {isSignUp ? login_here : click_here}
      </span>
    </p>
  );
};

export default AuthSwitch;
