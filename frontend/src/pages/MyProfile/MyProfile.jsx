import { useState } from "react";
import { data_my_profile } from "../../data/data_my_profile";

import TitleDescription from "../../components/Titles/TitleDescription";
import MyProfileName from "./MyProfileName";
import UserInformation from "./UserInformation";
import BasicInformation from "./BasicInformation";
import EditSaveBtns from "./EditSaveBtns";

const MyProfile = () => {
  const [userData, setUserData] = useState(data_my_profile);
  const [isEdit, setIsEdit] = useState(false);

  return (
    <div className="my-profile w-full pb-10 flex flex-col gap-6">
      <TitleDescription title={"My profile"} case_class={"uppercase"} />

      <img
        className="my-profile__img w-60 mb-5 rounded"
        src={userData.img}
        alt="Profile image"
      />

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
  );
};

export default MyProfile;
