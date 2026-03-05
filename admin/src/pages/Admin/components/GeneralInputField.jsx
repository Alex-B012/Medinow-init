const GeneralInputField = ({ label, inputs = [], required = false }) => {
  return (
    <div className="add-doctor__input-container flex flex-col">
      <label className="font-semibold" htmlFor={inputs[0]?.id}>
        {label}
      </label>

      {inputs.map((input, index) => (
        <input
          key={input.id}
          className="add-doctor__input w-full max-w-75 px-3 py-1 mt-2 border border-gray-300 rounded-sm"
          type={input.type || "text"}
          id={input.id}
          name={input.name}
          placeholder={input.placeholder}
          value={input.value}
          onChange={input.onChange}
          min={input.min}
          step={input.step}
          required={required && index === 0}
        />
      ))}
    </div>
  );
};

export default GeneralInputField;
