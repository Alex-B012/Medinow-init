const DoctorAvailabilityToggle = ({ isEdit, profileData, setProfileData }) => {
  const handleChange = (checked) => {
    if (!isEdit) return;

    setProfileData((prev) => ({
      ...prev,
      available: checked,
    }));
  };

  return (
    <div className="doctor-availability-toggle mb-10">
      <input
        id="availability_checkbox_id"
        type="checkbox"
        name="availability_checkbox"
        checked={profileData.available}
        disabled={!isEdit}
        className={`mr-2 ${isEdit ? "cursor-pointer" : ""}`}
        onChange={(e) => handleChange(e.target.checked)}
      />

      <label htmlFor="availability_checkbox_id">Available</label>
    </div>
  );
};

export default DoctorAvailabilityToggle;
