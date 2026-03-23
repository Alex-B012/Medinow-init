import { useState, useContext } from "react";
import { AppContext } from "../../context/AppContext";
import axios from "axios";
import { assets } from "../../assets/assets";
import { toast } from "react-toastify";

import TitleDescription from "../../components/Titles/TitleDescription";
import MyProfileName from "./MyProfileName";
import UserInformation from "./UserInformation";
import BasicInformation from "./BasicInformation";
import EditSaveBtns from "./EditSaveBtns";

const MyProfile = () => {
  const { userData, setUserData, token, backendUrl, loadUserProfileData } =
    useContext(AppContext);
  const [isEdit, setIsEdit] = useState(false);
  const [image, setImage] = useState(null);

  const updateUserProfileData = async () => {
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
    userData && (
      <div className="my-profile w-full pb-10 flex flex-col gap-6">
        <TitleDescription title={"My profile"} case_class={"uppercase"} />
        {isEdit ? (
          <label
            className="w-full  mb-5 cursor-pointer rounded-4xl sm:w-117"
            htmlFor="image_id"
          >
            <div className="my-profile__image-container w-full max-w-80 lg:w-130 h-60 flex justify-evenly items-center sm:max-w-120 sm:justify-start sm:gap-5">
              <img
                className={`my-profile__img ${userData.image ? "w-40 h-40 sm:w-60 sm:h-60" : "w-20 h-20 sm:w-60 sm:h-60"}  mb-5 rounded-xl`}
                src={
                  image instanceof File
                    ? URL.createObjectURL(image)
                    : userData.image
                }
                alt="Profile image"
              />
              <img
                className={`my-profile__img w-25 h-25 sm:w-50 sm:h-50 rounded-4xl ${image && "opacity-0"}`}
                src={image ? "" : assets.profile_icon}
                alt=""
              />
            </div>
            <input
              className=""
              onChange={(e) => setImage(e.target.files[0])}
              type="file"
              id="image_id"
              hidden
            />
          </label>
        ) : (
          <div className="my-profile__image-container w-full lg:w-80 h-60 flex justify-center items-center sm:justify-start">
            <img
              className={`my-profile__img ${userData.image ? "w-60 h-60" : "w-40 h-40"} mb-5 rounded-xl`}
              src={userData.image || assets.profile_icon}
              alt="Profile image"
            />
          </div>
        )}
        <MyProfileName
          isEdit={isEdit}
          userData={userData}
          setUserData={setUserData}
        />
        <hr className="w-full max-w-120" />
        <UserInformation
          userData={userData}
          setUserData={setUserData}
          isEdit={isEdit}
        />
        <BasicInformation
          isEdit={isEdit}
          userData={userData}
          setUserData={setUserData}
        />
        <EditSaveBtns
          isEdit={isEdit}
          setIsEdit={setIsEdit}
          update={updateUserProfileData}
        />
      </div>
    )
  );
};

export default MyProfile;
