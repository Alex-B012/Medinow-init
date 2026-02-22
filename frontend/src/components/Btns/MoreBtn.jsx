import { useNavigate } from "react-router-dom";

const MoreBtn = ({ text, url }) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => url && navigate(url)}
      className="more-btn bg-gray-100 text-gray-600 py-3 px-12 rounded-full mt-10 hover:bg-green-200 transition duration-300 cursor-pointer shadow-md font-bold"
    >
      {text || "More"}
    </button>
  );
};

export default MoreBtn;
