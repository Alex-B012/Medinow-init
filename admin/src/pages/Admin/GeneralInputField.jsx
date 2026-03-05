const GeneralInputField = ({
  label,
  type = "text",
  id,
  name,
  placeholder,
  value,
  onChange,
  min,
  step,
  required = false,
}) => {
  return (
    <div className="add-doctor__input-container flex flex-col">
      <label className="font-semibold" htmlFor={id}>
        {label}
      </label>

      <input
        className="add-doctor__input w-60 px-2 py-0.5 mt-1 border border-gray-300 rounded-sm"
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        min={min}
        step={step}
        required={required}
      />
    </div>
  );
};

export default GeneralInputField;
