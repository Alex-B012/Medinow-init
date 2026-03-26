import { useContext, useEffect, useState } from "react";
import { ApplicationContext, DoctorContext } from "../../../context/AppContext";
import { toast } from "react-toastify";
import axios from "axios";

import Loading from "../../../components/Loading";
import AdminContent from "../../Admin/components/AdminContent";
import Title from "../../../components/Title";
import EditSaveBtns from "./EditSaveBtns";
import DoctorAddressField from "./DoctorAddressField";
import DoctorAvailabilityToggle from "./DoctorAvailabilityToggle";
import DoctorAppointmentFee from "./DoctorAppointmentFee";
import DoctorInfo from "./DoctorInfo";

const DoctorProfile = () => {
  const {
    dToken,
    profileData,
    setProfileData,
    getProfileData,
    backendUrl,
    DOCTOR_API,
  } = useContext(DoctorContext);
  const { currency } = useContext(ApplicationContext);
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
      const updateData = {
        address: profileData.address,
        fees: profileData.fees,
        available: profileData.available,
      };

      const { data } = await axios.post(
        backendUrl + `${DOCTOR_API}/update-profile`,
        updateData,
        { headers: { d_token: dToken } },
      );

      if (data.success) {
        toast.success(data.message);
        await getProfileData();
        setIsEdit(false);
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
              <DoctorInfo profileData={profileData} />

              <DoctorAppointmentFee
                isEdit={isEdit}
                profileData={profileData}
                setProfileData={setProfileData}
                currency={currency}
              />

              <DoctorAddressField
                isEdit={isEdit}
                profileData={profileData}
                setProfileData={setProfileData}
              />

              <DoctorAvailabilityToggle
                isEdit={isEdit}
                profileData={profileData}
                setProfileData={setProfileData}
              />

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
