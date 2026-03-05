const SelectField = ({ label, id, name, options = [], value, onChange }) => {
  return (
    <div className="add-doctor__input-container flex flex-col">
      <label className="font-semibold" htmlFor={id}>
        {label}
      </label>

      <select
        className="add-doctor__input w-full max-w-75 px-3 py-1.5 mt-2 border border-gray-300 rounded-sm"
        id={id}
        name={name}
        value={value}
        onChange={onChange}
      >
        {options.map((option) => (
          <option key={option.id} value={option.name}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectField;
