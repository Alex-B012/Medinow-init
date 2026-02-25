const InputField = ({
  label,
  type = "text",
  id,
  value,
  onChange,
  required = false,
}) => {
  return (
    <div className="input-field w-full flex flex-col">
      <label className="font-semibold" htmlFor={id}>
        {label}
      </label>

      <input
        className="border border-gray-300 px-2 py-1 mt-1"
        type={type}
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
      />
    </div>
  );
};

export default InputField;
