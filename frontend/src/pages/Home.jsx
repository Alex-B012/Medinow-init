import Banner from "../components/Banner/Banner";
import SpecialityMenu from "../components/SpecialityMenu/SpecialityMenu";
import TopDoctors from "../components/TopDoctors/TopDoctors";

const Home = () => {
  return (
    <div className="home flex flex-col gap-6 items-center w-full">
      <Banner />
      <SpecialityMenu />
      <TopDoctors />
    </div>
  );
};

export default Home;
