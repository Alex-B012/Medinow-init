const InfoContainer = ({ children }) => {
  return (
    <div className="add-doctor__info-container max-w-130 flex flex-col gap-5 md:min-w-60 lg:min-w-65 xl:min-w-70">
      {children}
    </div>
  );
};

export default InfoContainer;
