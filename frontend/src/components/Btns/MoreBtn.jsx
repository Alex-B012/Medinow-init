import { useNavigate } from "react-router-dom";

const MoreBtn = ({ text, url }) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => url && navigate(url)}
      className="more-btn bg-gray-100 text-gray-600 py-3 px-12 rounded-full mt-10 hover:bg-emerald-300 hover:text-white transition-colors duration-700 cursor-pointer shadow-md font-bold"
    >
      {text || "More"}
    </button>
  );
};

export default MoreBtn;
