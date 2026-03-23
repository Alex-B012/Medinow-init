import { useContext, useEffect, useState } from "react";
import { ApplicationContext, DoctorContext } from "../../../context/AppContext";

import Loading from "../../../components/Loading";
import AdminContent from "../../Admin/components/AdminContent";
import Title from "../../../components/Title";
import EditSaveBtns from "./EditSaveBtns";

const DoctorProfile = () => {
  const { dToken, profileData, setProfileData, getProfileData } =
    useContext(DoctorContext);
  const { currency, backendUrl } = useContext(ApplicationContext);
  const [isEdit, setIsEdit] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!dToken) return;

    const fetchDashboard = async () => {
      try {
        await getProfileData();
      } finally {
        setLoading(false);
      }
    };

    fetchDashboard();
  }, [dToken, getProfileData]);

  const updateDoctorProfileData = async () => {
    if (import.meta.env.DEV) console.log("updateUserProfileData - start");

    try {
      const formData = new FormData();

      formData.append("name", userData.name);
      formData.append("phone", userData.phone);
      formData.append(
        "address",
        JSON.stringify({
          line1: userData.address.line1,
          line2: userData.address.line2,
        }),
      );
      formData.append("gender", userData.gender);
      formData.append("dob", userData.dob);

      image && formData.append("image", image);

      const { data } = await axios.post(
        backendUrl + "/api/user/update-profile",
        formData,
        { headers: { token } },
      );

      if (data.success) {
        toast.success(data.message);
        await loadUserProfileData();
        setIsEdit(false);
        setImage(false);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <div className="doctor-profile w-full min-h-screen pb-10 px-0 sm:px-6 lg:min-w-screen lg:bg-gray-100">
      <Title title={"Profile"} />
      {loading ? (
        <Loading />
      ) : profileData ? (
        <AdminContent>
          <div className="mt-4 flex flex-col gap-6">
            <div>
              <img
                className="w-40 h-56 rounded-xl"
                src={profileData.image}
                alt={profileData.name}
              />
            </div>
            <div className="flex flex-col gap-4">
              <p className="w-full max-w-75 flex pb-3 mb-1 text-2xl text-gray-800 font-semibold border-b border-gray-700 ">
                {profileData.name}
              </p>
              <div className="flex items-center gap-8 text-gray-600">
                <p>
                  {profileData.degree} - {profileData.specialty}
                </p>
                <button className="py-0.5 px-4 border border-gray-400 bg-gray-50 text-sm  font-medium rounded-full">
                  {profileData.experience}
                </button>
              </div>
              <div>
                <p className="flex items-center gap-1 font-medium text-neutral-800">
                  About:{" "}
                </p>

                <p className="text-gray-600 max-w-175 mt-1 ">
                  {profileData.about}
                </p>
              </div>

              <p>
                <span className="mr-2 font-medium text-neutral-800">
                  Appointment fee:{" "}
                </span>
                <span className="text-gray-800">
                  {currency} {profileData.fees}
                </span>{" "}
              </p>

              <div className="flex gap-2 py-2">
                <p className="font-semibold">Address:</p>
                <p>{profileData.address.line1}</p>
                <p>{profileData.address.line2}</p>
              </div>

              <div className="mb-10">
                <input className="mr-2" type="checkbox" name="" id="" />
                <label className="" htmlFor="">
                  Available
                </label>
              </div>
              <EditSaveBtns
                isEdit={isEdit}
                setIsEdit={setIsEdit}
                update={updateDoctorProfileData}
              />
            </div>
          </div>
        </AdminContent>
      ) : (
        <Loading text={"No data found"} />
      )}
    </div>
  );
};

export default DoctorProfile;
