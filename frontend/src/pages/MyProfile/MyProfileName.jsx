const MyProfileName = ({ isEdit, userData, setUserData }) => {
  return (
    <div className="my-profile-name w-full">
      {isEdit ? (
        <input
          type="text"
          className="my-profile-name__name-input w-full h-8 px-2 py-1 text-xl border border-gray-300 min-[400px]:w-90"
          onChange={(e) =>
            setUserData((prev) => ({ ...prev, name: e.target.value }))
          }
          value={userData.name}
        />
      ) : (
        <p className="my-profile-name__name w-full h-8 text-2xl font-semibold min-[400px]:w-90">
          {userData.name}
        </p>
      )}
    </div>
  );
};

export default MyProfileName;
