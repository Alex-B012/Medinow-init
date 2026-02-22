import BannerLeft from "./BannerLeft/BannerLeft";

const Banner = ({ banner_data }) => {
  return (
    <div className="header w-full max-w-300 h-full text-white p-2 mt-8 flex flex-col justify-between gap-4 rounded-lg md:min-h-87 md:flex-row md:justify-center lg:min-h-100 lg:p-4 xl:min-h-90 2xl:max-h-90 bg-linear-to-br from-blue-800 to-blue-500">
      <BannerLeft {...banner_data} />

      <div className="header__right relative h-full w-full flex flex-col justify-center items-center rounded-lg md:w-1/2 md:max-h-100 md:max-w-100 ">
        <img
          src={banner_data.img}
          alt="Header Right"
          className="w-full md:absolute top-0 md:top-[1vh] mx-auto 2xl:top-0 rounded-lg"
        />
      </div>
    </div>
  );
};

export default Banner;
