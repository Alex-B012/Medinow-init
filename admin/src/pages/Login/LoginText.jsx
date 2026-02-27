const LoginToggleText = ({ currentRole, setRole }) => {
  const isAdmin = currentRole === "Admin";

  const toggleRole = () => {
    setRole(isAdmin ? "Doctor" : "Admin");
  };

  return (
    <p className="login-text mt-6">
      {isAdmin ? "Doctor login?" : "Admin login?"}{" "}
      <span
        className="ml-2 text-blue-700 font-semibold cursor-pointer hover:text-blue-500 hover:underline"
        onClick={toggleRole}
      >
        Click here
      </span>
    </p>
  );
};

export default LoginToggleText;
