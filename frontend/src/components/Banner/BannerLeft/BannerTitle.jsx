const BannerTitle = ({ title }) => {
  return (
    <p className="header__left-title max-w-145 text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight md:leading-tight">
      {title.line1 && title.line1} <br /> {title.line2 && title.line2}
    </p>
  );
};

export default BannerTitle;
