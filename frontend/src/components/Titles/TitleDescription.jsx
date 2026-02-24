const TitleDescription = ({ title, description }) => {
  return (
    <div className="title-description w-full flex flex-col items-center gap-4 py-8 px-4">
      {title && (
        <h2 className="title-description__title text-3xl font-medium">
          {title}
        </h2>
      )}

      {description && (
        <p className="title-description__text w-full max-w-150 text-center text-sm">
          {description}
        </p>
      )}
    </div>
  );
};

export default TitleDescription;
