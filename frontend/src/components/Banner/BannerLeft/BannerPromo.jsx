const BannerPromo = ({ three_images, text }) => {
  return (
    <div className="banner-promo flex gap-5 ">
      {three_images && (
        <div className="header__left-images flex w-35">
          {three_images.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Person ${index + 1}`}
              className="header__left-img w-10 h-10 rounded-full object-cover -ml-3 first:ml-0"
            />
          ))}
        </div>
      )}

      {text && (
        <p className="header__left-description flex text-xl w-full">{text}</p>
      )}
    </div>
  );
};

export default BannerPromo;
