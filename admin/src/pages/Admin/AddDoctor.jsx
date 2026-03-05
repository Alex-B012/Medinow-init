import { assets } from "../../assets/assets";

import { specialties_data, years_data } from "../../data/data.js";

import GeneralInputField from "./GeneralInputField";
import SelectField from "./SelectField";

const AddDoctor = () => {
  return (
    <form className="add-doctor pb-10 px-0 sm:px-6 ">
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

        <div className="add-doctor__info flex flex-col gap-7 mt-10 sm:min-w-120  md:min-w-200 ">
          <div className="add-doctor__info-container max-w-130 flex flex-col gap-7">
            <GeneralInputField
              label="Your name"
              type="text"
              id="add_doctor_name_id"
              name="name"
              placeholder="Name"
              required
            />

            <GeneralInputField
              label="Doctor email"
              type="email"
              id="add_doctor_email_id"
              name="email"
              placeholder="Email"
              required
            />

            <GeneralInputField
              label="Doctor Password"
              type="password"
              id="add_doctor_password_id"
              name="password"
              placeholder="Password"
              required
            />

            <SelectField
              label="Specialty"
              id="add_doctor_specialty_id"
              name="specialty"
              options={specialties_data}
              // value={formData.specialty}
              // onChange={handleChange}
            />

            <GeneralInputField
              label="Fees"
              type="number"
              id="add_doctor_fees_id"
              name="fees"
              placeholder="Your fees"
              min="0"
              step="0.01"
              required
            />
          </div>
          <div className="add-doctor__info-container max-w-130 flex flex-wrap gap-7">
            <SelectField
              label="Experience"
              id="add_doctor_experience_id"
              name="experience"
              options={years_data}
              // value={formData.experience}
              // onChange={handleChange}
            />
            <GeneralInputField
              label="Education"
              type="text"
              id="add_doctor_eduction_id"
              name="education"
              placeholder="Education"
              required
            />

            <div className="add-doctor__input-container flex flex-col">
              <label
                className="font-semibold"
                htmlFor={"add_doctor_address_id"}
              >
                Address
              </label>

              <input
                className="add-doctor__input w-60 px-2 py-0.5 mt-1 border border-gray-300 rounded-sm"
                type="text"
                id="add_doctor_address_id"
                name="address"
                placeholder="Address"
                value={value}
                onChange={onChange}
                required
              />
              <input
                className="add-doctor__input w-60 px-2 py-0.5 mt-1 border border-gray-300 rounded-sm"
                type="text"
                id="add_doctor_address_id_2"
                name="address"
                placeholder="Address"
                value={value}
                onChange={onChange}
              />
            </div>
          </div>

          <div>{/* textarea */}</div>
        </div>
      </div>
    </form>
  );
};

export default AddDoctor;
