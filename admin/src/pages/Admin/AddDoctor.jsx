import { assets } from "../../assets/assets";

import { specialties_data, years_data } from "../../data/data.js";

import GeneralInputField from "./GeneralInputField";
import SelectField from "./SelectField";

const AddDoctor = () => {
  return (
    <form className="add-doctor w-full pb-10 px-0 sm:px-6 ">
      <h3 className="add-doctor__title py-6 font-bold text-xl">Add Doctor</h3>
      <div className="add-doctor__content px-2 py-6 sm:px-6 bg-white border border-gray-200">
        <div className="flex gap-5 items-center">
          <label htmlFor="doc_img_id">
            <img
              className="add-doctor__icon flex w-15 cursor-pointer"
              src={assets.upload_area}
              alt={"Upload Photo"}
            />
          </label>
          <input type="file" id="doc_img_id" hidden />
          <p className="flex w-26">Upload doctor picture</p>
        </div>

        <div className="add-doctor__info w-full mt-10 flex flex-col gap-7 lg:flex-row xl:gap-x-15">
          <div className="add-doctor__info-container max-w-130 flex flex-col gap-7 lg:min-w-70">
            <GeneralInputField
              label="Your name"
              required
              inputs={[
                {
                  type: "text",
                  id: "add_doctor_name_id",
                  name: "name",
                  placeholder: "Name",
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
                },
              ]}
            />

            <SelectField
              label="Experience"
              id="add_doctor_experience_id"
              name="experience"
              options={years_data}
              // value={formData.experience}
              // onChange={handleChange}
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
                },
              ]}
            />
          </div>
          <div className="add-doctor__info-container max-w-130 flex flex-col gap-7 lg:min-w-70">
            <SelectField
              label="Specialty"
              id="add_doctor_specialty_id"
              name="specialty"
              options={specialties_data}
              // value={formData.specialty}
              // onChange={handleChange}
            />

            <GeneralInputField
              label="Education"
              required
              inputs={[
                {
                  id: "add_doctor_eduction_id",
                  name: "education",
                  placeholder: "Education",
                },
              ]}
            />

            <GeneralInputField
              label="Address"
              required
              inputs={[
                {
                  id: "add_doctor_address_id",
                  name: "address1",
                  placeholder: "Address line 1",
                  // value: formData.address1,
                  // onChange: handleChange,
                },
                {
                  id: "add_doctor_address_id_2",
                  name: "address2",
                  placeholder: "Address line 2",
                  // value: formData.address2,
                  // onChange: handleChange,
                },
              ]}
            />
          </div>
        </div>
        <div className="flex flex-col mt-6">
          <label className="text-left font-semibold">About Doctor</label>
          <textarea
            className="min-h-80 max-w-200 sm:min-h-40 mt-1 p-2 border border-gray-300 rounded-sm"
            text="text"
            placeholder="About Doctor"
            required
          ></textarea>
        </div>
        <div className="add-doctor__btn-container w-60 h-20 flex justify-center items-center bg-amber-400">
          <RegularBtn text={""}/>
          {/* <button className="add-doctor__btn-container "></button> */}
        </div>
      </div>
    </form>
  );
};

export default AddDoctor;
