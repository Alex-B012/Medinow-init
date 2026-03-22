import { useContext } from "react";
import { AdminContext, ApplicationContext } from "../../../context/AppContext";
import { useEffect } from "react";

import Title from "../../../components/Title";
import AdminContent from "../components/AdminContent";
import TableHeaderCell from "../../../components/AppointmentsTable/TableHeaderCell";
import TableBodyRow from "../../../components/AppointmentsTable/TableBodyRow";
import AppointmentsRecords from "../../../components/AppointmentsTable/AppointmentsRecords";

const AdminAppointments = () => {
  const { aToken, appointments, getAllAppointments, cancelAppointment } =
    useContext(AdminContext);
  const { currency } = useContext(ApplicationContext);

  useEffect(() => {
    if (aToken) getAllAppointments();
  }, [aToken, getAllAppointments]);

  return (
    <div className="appointments w-full min-h-screen pb-10 px-0 sm:px-6 lg:min-w-screen lg:bg-gray-100">
      <Title title={"All Appointments"} />
      <AdminContent>
        <div className="appointments__table hidden sm:flex flex-col">
          <div className="appointments__header py-3 px-0 hidden border-b sm:grid grid-cols-[0.5fr_3fr_1fr_3fr_3fr_1fr_1fr] grid-flow-col ">
            <TableHeaderCell data={"#"} text_position={"center"} />
            <TableHeaderCell data={"Patient"} />
            <TableHeaderCell data={"Age"} text_position={"center"} />
            <TableHeaderCell data={"Date & Time"} text_position={"center"} />
            <TableHeaderCell data={"Doctor"} text_position={"center"} />
            <TableHeaderCell data={"Fees"} text_position={"center"} />
            <TableHeaderCell data={"Actions"} />
          </div>

          <div className="appointments__body py-3">
            {appointments.map((appointment, idx) => (
              <TableBodyRow
                componentData={{
                  data: appointment,
                  currency: currency,
                  cancel_appointment: cancelAppointment,
                }}
                number={idx + 1}
                key={appointment._id}
              />
            ))}
          </div>
        </div>
        <AppointmentsRecords
          componentData={{
            data: appointments,
            currency: currency,
            cancel_appointment: cancelAppointment,
          }}
        />
      </AdminContent>
    </div>
  );
};

export default AdminAppointments;
