import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import { specialties_data } from "../../data/data_specialties";

import DoctorsFilterBtn from "./DoctorsFilterBtn";
import TopDoctorCard from "../../components/TopDoctors/TopDoctorCard";
import { formatSpecialty } from "../../utils/utils";

const Doctors = () => {
  const { specialty } = useParams();
  const [selectedSpecialty, setSelectedSpecialty] = useState(
    formatSpecialty(specialty) || "All",
  );
  const { doctors } = useContext(AppContext);

  const filteredDoctors =
    selectedSpecialty === "All"
      ? doctors
      : doctors.filter((doc) => doc.specialty === selectedSpecialty);

  return (
    <div className="doctors flex flex-col gap-6 items-center w-full pt-10 md:pb-10 lg:pb-25">
      <p className="doctors__text w-full text-left">
        Browse our doctors by specialty.
      </p>

      <div className="doctors__content w-full flex flex-col items-start md:flex-row">
        <div className="doctors__menu w-full pt-5 pb-10 flex flex-row flex-wrap justify-center md:w-52 md:mr-2 md:flex-col">
          <DoctorsFilterBtn
            specialty="All"
            selectedSpecialty={selectedSpecialty}
            onSelect={setSelectedSpecialty}
          />

          {specialties_data.map((item) => (
            <DoctorsFilterBtn
              key={item.id}
              specialty={item.name}
              selectedSpecialty={selectedSpecialty}
              onSelect={setSelectedSpecialty}
            />
          ))}
        </div>

        <div className="doctors__list w-full flex flex-wrap justify-center md:justify-start gap-4 lg:pl-10 xl:pl-18 2xl:pl-23">
          {filteredDoctors.map((doctor) => (
            <TopDoctorCard doctor={doctor} key={doctor._id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
