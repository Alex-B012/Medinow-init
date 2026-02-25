import TitleDescription from "../../components/Titles/TitleDescription";

const MyAppointments = () => {
  return (
    <div className="my-appointments w-full pb-10 flex flex-col gap-6">
      <TitleDescription title={"My Appointments"} case_class={"uppercase"} />
      4:05:01 MyAppointment
    </div>
  );
};

export default MyAppointments;
