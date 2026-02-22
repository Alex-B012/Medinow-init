import { doctorsData } from "../../data/data_doctors";

import TitleDescription from "../TitleDescription";
import TopDoctorCard from "./TopDoctorCard";
import MoreBtn from "../Btns/MoreBtn";

const TopDoctors = () => {
  return (
    <div className="top-doctors flex flex-col items-center gap-4 mb-8 px-4">
      <TitleDescription
        title="Top Doctors to Book"
        description={"Simply browse through our list of top doctors."}
      />
      <div className="top-doctors__list grid grid-cols-auto gap-4 pt-5 px-3 sm:px-0">
        {doctorsData.slice(0, 10).map((doctor) => (
          <TopDoctorCard doctor={doctor} key={doctor._id} />
        ))}
      </div>
      <MoreBtn />
    </div>
  );
};

export default TopDoctors;
