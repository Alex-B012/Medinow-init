import Banner from "../components/Banner/Banner";
import SpecialityMenu from "../components/SpecialityMenu/SpecialityMenu";
import TopDoctors from "../components/TopDoctors/TopDoctors";

import { appointment_banner, welcome_banner } from "../data/data_banners";

const Home = () => {
  return (
    <div className="home flex flex-col gap-6 items-center w-full">
      <Banner banner_data={welcome_banner} />
      <SpecialityMenu />
      <TopDoctors />
      <Banner banner_data={appointment_banner} />
    </div>
  );
};

export default Home;
