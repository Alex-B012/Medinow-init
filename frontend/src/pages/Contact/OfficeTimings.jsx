import SectionTitle from "../../components/Titles/SectionTitle";

const OfficeTimings = ({ data }) => {
  return (
    <div className="office-timings w-full">
      {data.title && <SectionTitle title={data.title} />}
      <div className="office-timings__list w-full mt-5 flex flex-wrap gap-3 sm:gap-4 ">
        {data.timings &&
          data.timings.map((item) => (
            <div
              className="office-timings__item w-32 py-3  text-center border border-gray-300 rounded-lg sm:w-40"
              key={item.id}
            >
              <p className="font-semibold">{item.day}</p>
              <p>{item.time}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default OfficeTimings;
