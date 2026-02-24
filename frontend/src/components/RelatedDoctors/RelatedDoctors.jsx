import { useContext, useMemo } from "react";
import { AppContext } from "../../context/AppContext";
import TopDoctorCard from "../TopDoctors/TopDoctorCard";
import SectionTitle from "../Titles/SectionTitle";

const RelatedDoctors = ({ docId, specialty }) => {
  const { doctors } = useContext(AppContext);

  const relDocs = useMemo(() => {
    if (!doctors.length || !specialty) return [];

    return doctors.filter(
      (doctor) =>
        doctor.specialty === specialty && doctor._id !== Number(docId),
    );
  }, [doctors, specialty, docId]);

  return (
    <div className="related-doctors w-full flex flex-wrap justify-center sm:justify-start gap-4 py-5">
      <SectionTitle title="Related Doctors" />
      {relDocs.map((doctor) => (
        <TopDoctorCard key={doctor._id} doctor={doctor} />
      ))}
    </div>
  );
};

export default RelatedDoctors;
