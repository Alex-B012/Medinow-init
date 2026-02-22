const BannerImg = ({ src, alt }) => {
  return (
    <img
      src={src}
      alt={alt}
      className="banner-img w-5 inline-block ml-3 -rotate-90"
    />
  );
};

export default BannerImg;
