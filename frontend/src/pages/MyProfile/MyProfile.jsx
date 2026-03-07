import { useState, useContext } from "react";
import { AppContext } from "../../context/AppContext";

import TitleDescription from "../../components/Titles/TitleDescription";
import MyProfileName from "./MyProfileName";
import UserInformation from "./UserInformation";
import BasicInformation from "./BasicInformation";
import EditSaveBtns from "./EditSaveBtns";
import { assets } from "../../assets/assets";

const MyProfile = () => {
  const { userData, setUserData, token, backendUrl, loadUserProfileData } =
    useContext(AppContext);
  const [isEdit, setIsEdit] = useState(false);
  const [image, setImage] = useState(false);

  const updateUserProfileData = async () => {};

  return (
    userData && (
      <div className="my-profile w-full pb-10 flex flex-col gap-6">
        10:03:12
        <TitleDescription title={"My profile"} case_class={"uppercase"} />
        {isEdit ? (
          <label className="cursor-pointer" htmlFor="image_id">
            <div className="my-profile__image-container w-80 h-60 flex justify-center items-center">
              <img
                className={`my-profile__img w-40 h-40 mb-5 mr-5 rounded`}
                src={image ? URL.createObjectURL(image) : userData.image}
                alt="Profile image"
              />
              <img
                className={`my-profile__img w-40 h-40 mb-5 rounded`}
                src={image ? "" : assets.profile_icon}
                alt="Profile image"
              />
            </div>
            <input
              onChange={(e) => setImage(e.target.files[0])}
              type="file"
              id="image_id"
              hidden
            />
          </label>
        ) : (
          <div className="my-profile__image-container w-60 h-60 flex justify-center items-center">
            <img
              className={`my-profile__img w-60 h-60" mb-5 rounded`}
              src={userData.img}
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
        <EditSaveBtns isEdit={isEdit} setIsEdit={setIsEdit} />
      </div>
    )
  );
};

export default MyProfile;
