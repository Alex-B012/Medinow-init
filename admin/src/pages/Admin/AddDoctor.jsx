import { useContext, useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { assets } from "../../assets/assets";
import { specialties_data, years_data } from "../../data/data.js";
import { AdminContext } from "../../context/AppContext.jsx";
import { seedDoctorsToServer } from "../../utils/seedDoctors";

import AdminTitle from "./components/AdminTitle.jsx";
import InfoContainer from "./components/InfoContainer";
import GeneralInputField from "./components/GeneralInputField";
import SelectField from "./components/SelectField";
import RegularBtn from "../../components/Btns/RegularBtn";
import AdminContent from "./components/AdminContent.jsx";

const SEED = false;
const INITIAL_DOCTOR = {
  name: "",
  email: "",
  password: "",
  experience: `${years_data[0].name}`,
  fees: "",
  specialty: `${specialties_data[0].name}`,
  degree: "",
  address: { line1: "", line2: "" },
  about: "",
  image: "",
};

const AddDoctor = () => {
  const [docImg, setDocImg] = useState(false);
  const [doctorData, setDoctorData] = useState(INITIAL_DOCTOR);
  const { backendUrl, aToken } = useContext(AdminContext);

  const resetDoctorForm = () => {
    setDocImg(false);
    setDoctorData(INITIAL_DOCTOR);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name.includes(".")) {
      const [parent, child] = name.split(".");

      setDoctorData((prev) => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: value,
        },
      }));
    } else {
      setDoctorData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      if (!docImg) return toast.error("Image Not Selected");

      const formDataToSend = new FormData();

      formDataToSend.append("name", doctorData.name);
      formDataToSend.append("email", doctorData.email);
      formDataToSend.append("password", doctorData.password);
      formDataToSend.append("experience", doctorData.experience);
      formDataToSend.append("fees", Number(doctorData.fees));
      formDataToSend.append("specialty", doctorData.specialty);
      formDataToSend.append("degree", doctorData.degree);
      formDataToSend.append("about", doctorData.about);
      formDataToSend.append(
        "address",
        JSON.stringify({
          line1: doctorData.address.line1,
          line2: doctorData.address.line2,
        }),
      );

      formDataToSend.append("image", docImg);

      const { data } = await axios.post(
        backendUrl + "/api/admin/add-doctor",
        formDataToSend,
        { headers: { a_token: aToken } },
      );

      if (data.success) {
        toast.success(data.message);
        resetDoctorForm();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      const message = error.response?.data?.message;
      const error_data = error.response?.data;
      toast.error(message);
      console.log(error_data);
    }
  };

  useEffect(() => {
    if (SEED && backendUrl && aToken) {
      seedDoctorsToServer(backendUrl, aToken);
    }
  }, [backendUrl, aToken]);

  return (
    <form
      onSubmit={onSubmitHandler}
      className="add-doctor w-full pb-10 px-0 sm:px-6 lg:min-w-screen lg:bg-gray-100"
    >
      <AdminTitle title={"Add Doctor"} />

      <AdminContent>
        <div className="h-28 flex gap-5 items-center">
          <label className="" htmlFor="doc_img_id">
            <img
              className={`add-doctor__icon flex w-20 ${docImg ? "h-28" : "h-20"}  cursor-pointer rounded-md`}
              src={docImg ? URL.createObjectURL(docImg) : assets.upload_area}
              alt={"Upload Photo"}
            />
          </label>

          <input
            type="file"
            id="doc_img_id"
            hidden
            onChange={(e) => setDocImg(e.target.files[0])}
          />

          <p className="flex w-26">Upload doctor picture</p>
        </div>

        <div className="add-doctor__info mt-10 flex flex-col gap-7 md:flex-row md:gap-x-10">
          <InfoContainer>
            <GeneralInputField
              label="Your name"
              required
              inputs={[
                {
                  type: "text",
                  id: "add_doctor_name_id",
                  name: "name",
                  placeholder: "Name",
                  value: doctorData.name,
                  onChange: handleChange,
                },
              ]}
            />

            <GeneralInputField
              label="Doctor email"
              required
              inputs={[
                {
                  type: "email",
                  id: "add_doctor_email_id",
                  name: "email",
                  placeholder: "Email",
                  value: doctorData.email,
                  onChange: handleChange,
                },
              ]}
            />

            <GeneralInputField
              label="Doctor Password"
              required
              inputs={[
                {
                  type: "password",
                  id: "add_doctor_password_id",
                  name: "password",
                  placeholder: "Password",
                  value: doctorData.password,
                  onChange: handleChange,
                },
              ]}
            />

            <SelectField
              label="Experience"
              id="add_doctor_experience_id"
              name="experience"
              options={years_data}
              value={doctorData.experience}
              onChange={handleChange}
            />

            <GeneralInputField
              label="Fees"
              required
              inputs={[
                {
                  type: "number",
                  id: "add_doctor_fees_id",
                  name: "fees",
                  placeholder: "Your fees",
                  min: "0",
                  step: "0.01",
                  value: doctorData.fees,
                  onChange: handleChange,
                },
              ]}
            />
          </InfoContainer>

          <InfoContainer>
            <SelectField
              label="Specialty"
              id="add_doctor_specialty_id"
              name="specialty"
              options={specialties_data}
              value={doctorData.specialty}
              onChange={handleChange}
            />

            <GeneralInputField
              label="Education"
              required
              inputs={[
                {
                  id: "add_doctor_eduction_id",
                  name: "degree",
                  placeholder: "Degree",
                  value: doctorData.degree,
                  onChange: handleChange,
                },
              ]}
            />

            <GeneralInputField
              label="Address"
              required
              inputs={[
                {
                  id: "add_doctor_address_id",
                  name: "address.line1",
                  placeholder: "Address 1",
                  value: doctorData.address.line1,
                  onChange: handleChange,
                },
                {
                  id: "add_doctor_address_id_2",
                  name: "address.line2",
                  placeholder: "Address 2",
                  value: doctorData.address.line2,
                  onChange: handleChange,
                },
              ]}
            />
          </InfoContainer>
        </div>

        <div className="flex flex-col mt-5">
          <label className="text-left font-semibold">About Doctor</label>

          <textarea
            className="min-h-80 max-w-200 sm:min-h-25 mt-2 p-2 border border-gray-300 rounded-sm"
            name="about"
            placeholder="About Doctor"
            required
            onChange={handleChange}
            value={doctorData.about}
          ></textarea>
        </div>

        <div className="add-doctor__btn-container w-full max-w-200 h-15 flex justify-center items-end">
          <RegularBtn text={"Add Doctor"} type={"submit"} />
        </div>
      </AdminContent>
    </form>
  );
};

export default AddDoctor;
