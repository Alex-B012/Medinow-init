import { about_data } from "../../data/data";

import TitleDescription from "../../components/Titles/TitleDescription";
import AboutInfo from "./AboutInfo";
import SectionTitle from "../../components/Titles/SectionTitle";
import AboutChooseUsCard from "./AboutChooseUsCard";

const About = () => {
  return (
    <div className="about w-full pb-10 flex flex-col gap-6 items-center">
      <TitleDescription title={"About Us"} case_class={"uppercase"} />
      <div className="about__container flex flex-col gap-6 items-center w-full max-w-7xl">
        <AboutInfo data={about_data} img={about_data.img} />
        {about_data.chooseUs.title && (
          <SectionTitle title={about_data.chooseUs.title} />
        )}
        <div className="about__list flex flex-wrap gap-5 items-center justify-center w-full ">
          {about_data.chooseUs.text &&
            about_data.chooseUs.text.map((item) => (
              <AboutChooseUsCard data={item} key={item.id} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default About;
