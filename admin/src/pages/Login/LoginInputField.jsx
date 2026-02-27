import React from "react";

const LoginInputField = ({
  label,
  type = "text",
  name,
  id,
  value,
  onChange,
  placeholder,
  required = false,
}) => {
  const inputId = id || name;

  return (
    <div className="w-full">
      <label htmlFor={inputId} className="block font-semibold text-gray-700">
        {label}
      </label>

      <input
        id={inputId}
        className="w-full p-2 mt-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};

export default LoginInputField;
