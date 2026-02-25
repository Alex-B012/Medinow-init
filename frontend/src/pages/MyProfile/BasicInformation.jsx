import { formatDate } from "../../utils/utils";
import MyProfileInformationTitle from "./MyProfileInformationTitle";

const BasicInformation = ({ isEdit, userData, setUserData }) => {
  return (
    <div className="basic-information mt-5">
      <MyProfileInformationTitle title={"Basic information"} />

      {/* Gender */}
      <div className="basic-information__phone-info h-12 mb-3 flex flex-col min-[400px]:flex-row min-[400px]:h-8 min-[400px]:items-center">
        <p className="w-30 pr-3 font-semibold">Gender:</p>
        {isEdit ? (
          <select
            className="w-25 px-2 border border-gray-300 text-center"
            onChange={(e) =>
              setUserData((prev) => ({ ...prev, gender: e.target.value }))
            }
            value={userData.gender}
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        ) : (
          <p>{userData.gender}</p>
        )}
      </div>

      {/* Birthday */}
      <div className="basic-information__dob-info h-12 mb-3 flex flex-col min-[400px]:flex-row min-[400px]:h-8 min-[400px]:items-center">
        <p className="w-30 pr-3 font-semibold">Birthday:</p>
        {isEdit ? (
          <input
            className="w-40 px-2 border border-gray-300"
            type="date"
            onChange={(e) =>
              setUserData((prev) => ({ ...prev, dob: e.target.value }))
            }
            value={userData.dob}
          />
        ) : (
          <p>{formatDate(userData.dob)}</p>
        )}
      </div>
    </div>
  );
};

export default BasicInformation;
