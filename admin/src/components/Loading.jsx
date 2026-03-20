const Loading = ({ text = "Loading..." }) => {
  return (
    <div className="loading w-full h-35 md:h-70 flex justify-center items-center text-gray-700 text-xl">
      <p>{text}</p>
    </div>
  );
};

export default Loading;
