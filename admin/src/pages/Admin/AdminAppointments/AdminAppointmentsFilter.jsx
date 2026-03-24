const AdminAppointmentsFilter = ({
  filterType,
  setFilterType,
  selectedDoctor,
  setSelectedDoctor,
  selectedPatient,
  setSelectedPatient,
  doctors = [],
  patients = [],
}) => {
  const handleDoctorChange = (value) => {
    setFilterType("doctor");
    setSelectedDoctor(value);
    setSelectedPatient("");
  };

  const handlePatientChange = (value) => {
    setFilterType("patient");
    setSelectedPatient(value);
    setSelectedDoctor("");
  };

  const handleReset = () => {
    setFilterType("all");
    setSelectedDoctor("");
    setSelectedPatient("");
  };

  return (
    <div className="appointments-filter w-full flex flex-wrap justify-evenly gap-4 px-2 pb-6 sm:justify-end sm:gap-8 sm:flex-row-reverse">
      <select
        value={selectedDoctor}
        onChange={(e) => handleDoctorChange(e.target.value)}
        className={`px-1 text-center border border-emerald-200 cursor-pointer ${
          filterType === "doctor" ? "text-emerald-600" : ""
        }`}
      >
        <option value="">Select Doctor</option>
        {doctors.map((doc) => (
          <option key={doc} value={doc}>
            {doc}
          </option>
        ))}
      </select>

      <select
        value={selectedPatient}
        onChange={(e) => handlePatientChange(e.target.value)}
        className={`px-1 text-center border border-emerald-200 cursor-pointer ${
          filterType === "patient" ? "text-emerald-600" : ""
        }`}
      >
        <option value="">Select Patient</option>
        {patients.map((pat) => (
          <option key={pat} value={pat}>
            {pat}
          </option>
        ))}
      </select>

      <button
        onClick={handleReset}
        className={`w-7 cursor-pointer ${
          filterType === "all" ? "font-bold text-emerald-600" : ""
        }`}
      >
        All
      </button>
    </div>
  );
};

export default AdminAppointmentsFilter;
