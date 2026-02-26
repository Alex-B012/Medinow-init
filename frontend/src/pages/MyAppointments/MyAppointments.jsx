import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

import TitleDescription from "../../components/Titles/TitleDescription";

const MyAppointments = () => {
  const { doctors } = useContext(AppContext);

  return (
    <div className="my-appointments w-full pb-10 flex flex-col gap-6">
      <TitleDescription title={"My Appointments"} case_class={"uppercase"} />
      <p className="my-appointments__text pb-3 font-medium text-zinc-600 border-b border-gray-300  ">
        My Appointment
      </p>
      {doctors.slice(0, 2).map((doctor) => (
        <div
          className="my-appointments__card pb-8 py-2 flex flex-col items-center gap-8 border-b border-gray-300 sm:flex-row sm:items-start"
          key={doctor.id}
        >
          <img className="my-appointments__img w-40 h-56" src={doctor.image} />
          <div className="my-appointments__doctor-info flex flex-col gap-6 text-sm text-zinc-600">
            <div>
              <p className="text-neutral-800 font-semibold text-lg">
                {doctor.name}
              </p>
              <p>{doctor.specialty}</p>
            </div>
            <div>
              <p className="text-zinc-700 font-semibold mb-1">Address:</p>
              <p className="">{doctor.address.line1}</p>
              <p className="">{doctor.address.line2}</p>
            </div>
            <p>
              <span className="text-zinc-700 font-semibold mr-2 flex w-fit">
                Date & Time:
              </span>
              <span>{"15 March, 2026 | 7:30 PM"}</span>
            </p>
          </div>
          <div className="m-auto"></div>
          <div className=" flex gap-6 justify-end sm:h-56 sm:flex-col">
            <button className="px-2 py-1 text-stone-500 text-center border rounded cursor-pointer hover:border-emerald-400 hover:bg-emerald-400 hover:text-white transition-colors duration-700 min-[400px]:py-2 min-[400px]:px-4">
              Pay Online
            </button>
            <button className="px-2 py-1 text-stone-500 text-center border rounded cursor-pointer hover:border-red-400 hover:bg-red-400 hover:text-white transition-colors duration-700 min-[400px]:py-2 min-[400px]:px-4">
              Cancel appointment
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyAppointments;
