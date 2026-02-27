import validator from "validator";

const validateDoctorData = (data) => {
  const requiredFields = [
    "name",
    "email",
    "password",
    "specialty",
    "degree",
    "experience",
    "about",
    "fees",
    "address",
  ];

  for (let field of requiredFields) {
    if (!data[field]) {
      return {
        isValid: false,
        message: `${field} is required`,
      };
    }
  }

  if (!validator.isEmail(data.email)) {
    console.log("password:", data.password);
    return {
      isValid: false,
      message: "Please enter a valid email",
    };
  }

  if (data.password.length < 8) {
    return {
      isValid: false,
      message: "Password must be at least 8 characters long",
    };
  }

  return { isValid: true };
};

export default validateDoctorData;
