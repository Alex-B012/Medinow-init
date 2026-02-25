const EditSaveBtns = ({
  isEdit,
  setIsEdit,
  className = "",
  save = "Save information",
  edit = "Edit",
}) => {
  return (
    <div className={`edit-save-btns h-12 mb-3 mt-2 ${className}`}>
      <button
        onClick={() => setIsEdit(!isEdit)}
        className="edit-save-btns__btn px-8 py-2 text-zinc-800 border border-gray-300 rounded-xl font-semibold cursor-pointer transition-colors duration-700 hover:bg-emerald-400 hover:text-white"
      >
        {isEdit ? save : edit}
      </button>
    </div>
  );
};

export default EditSaveBtns;
