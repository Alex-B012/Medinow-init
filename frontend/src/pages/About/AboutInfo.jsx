const AboutInfo = ({ img, data }) => {
  return (
    <div className="about-info flex flex-col items-center lg:flex-row lg:justify-between lg:items-start gap-8 w-full">
      <img className="w-101" src={img} alt={"About image"} />
      <div className="about-info__description w-auto min-w-70 max-w-200 p-4 flex flex-col justify-center gap-3 border rounded-xl border-gray-400 md:h-fit md:min-h-85 md:min-w-110">
        {data.text &&
          data.text.map((paragraph) => (
            <p
              className="about-info__description-paragraph w-full"
              key={paragraph.id}
            >
              {paragraph.para}
            </p>
          ))}
        <h4 className="about-info__description-title w-full font-semibold py-3 capitalize">
          {data.values.title && data.values.title}
        </h4>
        {data.values.text &&
          data.values.text.map((paragraph) => (
            <p
              className="about-info__description-paragraph w-full"
              key={paragraph.id}
            >
              {paragraph.para}
            </p>
          ))}
      </div>
    </div>
  );
};

export default AboutInfo;
