const DoctorInfo = ({ profileData }) => {
  const { name, degree, specialty, experience, about } = profileData;

  return (
    <div className="doctor-info flex flex-col gap-4">
      <p className="w-full max-w-75 flex pb-3 mb-1 text-2xl text-gray-800 font-semibold border-b border-gray-700">
        {name}
      </p>

      <div className="flex items-center gap-8 text-gray-600">
        <p>
          {degree} - {specialty}
        </p>

        <button className="py-0.5 px-4 border border-gray-400 bg-gray-50 text-sm font-medium rounded-full">
          {experience}
        </button>
      </div>

      <div>
        <p className="flex items-center gap-1 font-medium text-neutral-800">
          About:
        </p>
        <p className="text-gray-600 max-w-175 mt-1">{about}</p>
      </div>
    </div>
  );
};

export default DoctorInfo;
