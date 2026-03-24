const DoctorAddressField = ({ isEdit, profileData, setProfileData }) => {
  const handleChange = (field, value) => {
    setProfileData((prev) => ({
      ...prev,
      address: {
        ...prev.address,
        [field]: value,
      },
    }));
  };

  return (
    <div className="doctor-address-field flex flex-col gap-2 py-2">
      <p className="font-semibold">Address:</p>

      <div>
        <p className="h-10">
          {isEdit ? (
            <input
              id="doctor_address_id"
              className="w-full min-w-62 max-w-80 px-3 py-1 -mt-2 border border-gray-300 rounded-sm"
              type="text"
              name="address.line1"
              placeholder="Address 1"
              value={profileData.address.line1}
              onChange={(e) => handleChange("line1", e.target.value)}
            />
          ) : (
            profileData.address.line1
          )}
        </p>

        <p className="h-10 -mt-2">
          {isEdit ? (
            <input
              id="doctor_address_id2"
              className="w-full min-w-62 max-w-80 px-3 py-1 -mt-2 border border-gray-300 rounded-sm"
              type="text"
              name="address.line2"
              placeholder="Address 2"
              value={profileData.address.line2}
              onChange={(e) => handleChange("line2", e.target.value)}
            />
          ) : (
            profileData.address.line2
          )}
        </p>
      </div>
    </div>
  );
};

export default DoctorAddressField;
