const AboutChooseUsCard = ({ data }) => {
  return (
    <div className="about-choose-us-card w-full max-w-100 h-fit p-6 border border-gray-300 cursor-pointer hover:bg-emerald-400 hover:text-white hover:border-emerald-400 transition-colors duration-700">
      <h3 className="about-choose-us-card__title pb-3 font-semibold uppercase">
        {data.title}
      </h3>
      {data.para && (
        <p className="about-choose-us-card__paragraph">{data.para}</p>
      )}
    </div>
  );
};

export default AboutChooseUsCard;
