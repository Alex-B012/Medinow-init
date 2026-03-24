const DoctorAppointmentFee = ({
  isEdit,
  profileData,
  setProfileData,
  currency = "€",
}) => {
  const handleChange = (value) => {
    setProfileData((prev) => ({
      ...prev,
      fees: value,
    }));
  };

  return (
    <p className="flex h-10 items-center">
      <span className="mr-2 font-medium text-neutral-800">
        Appointment fee:
      </span>

      <span className="text-gray-800 flex items-center gap-1">
        {currency}

        {isEdit ? (
          <input
            id="doctor_fees_id"
            type="number"
            name="fees"
            min="0"
            step="0.01"
            placeholder="Your fees"
            value={profileData.fees}
            onChange={(e) => handleChange(e.target.value)}
            className="w-full max-w-26 px-3 py-1 border border-gray-300 rounded-sm sm:max-w-27"
          />
        ) : (
          profileData.fees
        )}
      </span>
    </p>
  );
};

export default DoctorAppointmentFee;
