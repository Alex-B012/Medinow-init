import MyProfileInformationTitle from "./MyProfileInformationTitle";

const UserInformation = ({ userData, setUserData, isEdit }) => {
  return (
    <div className="my-profile__user-info-container py-4 text-zinc-800">
      <MyProfileInformationTitle title="Contact information" />

      {/* Email */}
      <div className="my-profile__email-info h-12 mb-3 flex flex-col min-[400px]:flex-row min-[400px]:h-8">
        <p className="w-30 pr-3 font-semibold">Email id:</p>
        <p className="text-emerald-700">{userData.email}</p>
      </div>

      {/* Phone */}
      <div className="my-profile__phone-info h-12 mb-3 flex flex-col min-[400px]:flex-row min-[400px]:h-8 min-[400px]:items-center">
        <p className="w-30 pr-3 font-semibold">Phone:</p>
        {isEdit ? (
          <input
            className="w-60 px-2 border border-gray-300"
            type="tel"
            onChange={(e) =>
              setUserData((prev) => ({ ...prev, phone: e.target.value }))
            }
            value={userData.phone}
          />
        ) : (
          <p className="h-12 flex items-center">{userData.phone}</p>
        )}
      </div>

      {/* Address */}
      <div className="my-profile__address-info h-12 mb-3 mt-4 flex flex-col min-[400px]:flex-row min-[400px]:h-8">
        <p className="w-30 pr-3 font-semibold">Address:</p>
        {isEdit ? (
          <div className="flex flex-col">
            <input
              className="w-60 px-2 border border-gray-300"
              type="text"
              onChange={(e) =>
                setUserData((prev) => ({
                  ...prev,
                  address: { ...prev.address, line1: e.target.value },
                }))
              }
              value={userData.address.line1}
            />
            <input
              className="w-60 px-2 mt-2 border border-gray-300"
              type="text"
              onChange={(e) =>
                setUserData((prev) => ({
                  ...prev,
                  address: { ...prev.address, line2: e.target.value },
                }))
              }
              value={userData.address.line2}
            />
          </div>
        ) : (
          <div>
            <p>{userData.address.line1}</p>
            <p className="mt-2">{userData.address.line2}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserInformation;
