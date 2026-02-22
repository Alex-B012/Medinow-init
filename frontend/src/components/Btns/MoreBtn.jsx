const MoreBtn = ({ text }) => {
  return (
    <button className="more-btn bg-gray-100 py-2 px-8 rounded-3xl hover:bg-green-100 transition duration-300 cursor-pointer shadow-md">
      {text || "More"}
    </button>
  );
};

export default MoreBtn;
