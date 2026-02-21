import Banner from "../components/Banner/Banner";
import SpecialityMenu from "../components/SpecialityMenu/SpecialityMenu";

const Home = () => {
  return (
    <div className="home flex flex-col gap-6 items-center w-full">
      <Banner />
      <SpecialityMenu />
    </div>
  );
};

export default Home;
