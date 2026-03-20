const PersonData = ({ name, image, doctor = false }) => {
  return (
    <div className="person-data w-full flex flex-col justify-between items-center sm:gap-2 xl:justify-start xl:items-center 2xl:flex-row">
      <img
        className={`person-data__img ${doctor ? "w-20 h-28 rounded-xl" : "w-25 rounded-2xl"}  `}
        src={image}
        alt={name}
      />
      <div className="person-data__name w-full h-full text-center xl:text-left xl:pl-3 2xl:flex 2xl:items-center">
        {name}
      </div>
    </div>
  );
};

export default PersonData;
