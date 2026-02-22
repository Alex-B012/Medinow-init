const DoctorsFilterBtn = ({ specialty, selectedSpecialty, onSelect }) => {
  const isActive = specialty === selectedSpecialty;

  return (
    <button
      className={`doctors__filter-btn w-50 py-1 m-1 text-gray-600 cursor-pointer border border-gray-300 hover:scale-103 transition-all duration-300 rounded-md ${isActive ? "bg-green-200 text-gray-950 font-bold" : ""}`}
      onClick={() => onSelect(specialty)}
    >
      {specialty}
    </button>
  );
};

export default DoctorsFilterBtn;
