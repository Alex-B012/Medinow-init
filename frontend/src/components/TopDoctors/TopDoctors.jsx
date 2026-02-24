import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

import TitleDescription from "../Titles/TitleDescription";
import TopDoctorCard from "./TopDoctorCard";
import MoreBtn from "../Btns/MoreBtn";
import { navbar_links } from "../../data/links";

const TopDoctors = () => {
  const { doctors } = useContext(AppContext);
  const url =
    navbar_links.find((link) => link.name === "All Doctors")?.path ||
    "/doctors";

  return (
    <div className="top-doctors flex flex-col items-center gap-4 mb-8 px-4">
      <TitleDescription
        title="Top Doctors to Book"
        description={"Simply browse through our list of top doctors."}
      />
      <div className="top-doctors__list flex flex-wrap justify-center gap-4 py-5 w-full">
        {doctors.slice(0, 10).map((doctor) => (
          <TopDoctorCard doctor={doctor} key={doctor._id} />
        ))}
      </div>
      <MoreBtn url={url} />
    </div>
  );
};

export default TopDoctors;
