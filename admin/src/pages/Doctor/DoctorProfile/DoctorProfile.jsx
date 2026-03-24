import { useContext, useEffect, useState } from "react";
import { ApplicationContext, DoctorContext } from "../../../context/AppContext";
import { toast } from "react-toastify";
import axios from "axios";

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
      const updateData = {
        address: profileData.address,
        fees: profileData.fees,
        available: profileData.available,
      };

      const { data } = await axios.post(
        backendUrl + "/api/doctor/update-profile",
        updateData,
        { headers: { dToken } },
      );

      // if (data.success) {
      //   toast.success(data.message);
      //   await loadUserProfileData();
      //   setIsEdit(false);
      //   setImage(false);
      // } else {
      //   toast.error(data.message);
      // }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <div className="doctor-profile w-full min-h-screen pb-10 px-0 sm:px-6 lg:min-w-screen lg:bg-gray-100">
      15L:31:40
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

              <p className="flex h-10 items-center">
                <span className="mr-2 font-medium text-neutral-800">
                  Appointment fee:{" "}
                </span>
                <span className=" text-gray-800">
                  {currency}{" "}
                  {isEdit ? (
                    <input
                      id="doctor_fees_id"
                      className="w-full max-w-27 px-3 py-1 border border-gray-300 rounded-sm"
                      type="number"
                      name="fees"
                      placeholder="Your fees"
                      min="0"
                      step="0.01"
                      onChange={(e) =>
                        setProfileData((prev) => ({
                          ...prev,
                          fees: e.target.value,
                        }))
                      }
                      value={profileData.fees}
                    ></input>
                  ) : (
                    profileData.fees
                  )}
                </span>{" "}
              </p>

              <div className="flex flex-col gap-2 py-2">
                <p className="font-semibold">Address:</p>
                <div>
                  <p>
                    {isEdit ? (
                      <input
                        id="doctor_address_id"
                        className="w-full max-w-27 px-3 py-1 border border-gray-300 rounded-sm"
                        type="text"
                        name="address.line1"
                        placeholder="Address 1"
                        onChange={(e) =>
                          setProfileData((prev) => ({
                            ...prev,
                            address: { ...prev.address, line1: e.target.value },
                          }))
                        }
                        value={profileData.address.line1}
                      ></input>
                    ) : (
                      profileData.address.line1
                    )}
                  </p>
                  <p>
                    {isEdit ? (
                      <input
                        id="doctor_address_id2"
                        className="w-full max-w-27 px-3 py-1 border border-gray-300 rounded-sm"
                        type="text"
                        name="address.line2"
                        placeholder="Address 2"
                        onChange={(e) =>
                          setProfileData((prev) => ({
                            ...prev,
                            address: { ...prev.address, line2: e.target.value },
                          }))
                        }
                        value={profileData.address.line2}
                      ></input>
                    ) : (
                      profileData.address.line2
                    )}
                  </p>
                </div>
              </div>

              <div className="mb-10">
                <input
                  checked={profileData.available}
                  className={`mr-2 ${isEdit && "cursor-pointer"}`}
                  type="checkbox"
                  name="availability_checkbox"
                  id="availability_checkbox_id"
                  onChange={(e) =>
                    isEdit &&
                    setProfileData((prev) => ({
                      ...prev,
                      available: e.target.checked,
                    }))
                  }
                  disabled={!isEdit}
                />
                <label className="" htmlFor="availability_checkbox_id">
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
