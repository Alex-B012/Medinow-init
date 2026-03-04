import { assets } from "../../assets/assets";

const AddDoctor = () => {
  return (
    <form className="add-doctor px-6">
      7:13:27
      <h3 className="add-doctor__title py-6 font-bold text-xl">Add Doctor</h3>
      <div className="add-doctor__content p-6 bg-white">
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
        <div>
          <div>
            <div></div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default AddDoctor;
