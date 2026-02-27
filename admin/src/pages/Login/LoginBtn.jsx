const LoginBtn = ({ text = "Login" }) => {
  return (
    <button className="login-btn w-35 pb-1.5 pt-1 px-4 font-semibold text-white rounded-md bg-emerald-400 cursor-pointer transition-colors duration-700 hover:bg-emerald-500">
      {text}
    </button>
  );
};

export default LoginBtn;
