const LoginToggleText = ({ currentRole, setRole, roles }) => {
  const { adminRole, doctorRole } = { ...roles };
  const isAdmin = currentRole === adminRole;

  const toggleRole = () => {
    setRole(isAdmin ? doctorRole : adminRole);
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
