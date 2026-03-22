import { useContext, useEffect } from "react";
import {
  AdminContext,
  ApplicationContext,
  DoctorContext,
} from "../../../context/AppContext";
import { appointment_payment_options } from "../../../data/data";

import Title from "../../../components/Title";
import AdminContent from "../../Admin/components/AdminContent";
import TableHeaderCell from "../../../components/AppointmentsTable/TableBodyCell";
import TableBodyRowDoctor from "../../../components/AppointmentsTable/TableBodyRowDoctor";
import AppointmentsRecordsDoctor from "../../../components/AppointmentsTable/AppointmentsRecordsDoctor";

const DoctorAppointments = () => {
  const { dToken, doctorAppointments, getDoctorAppointments } =
    useContext(DoctorContext);
  const { cancelAppointment } = useContext(AdminContext);
  const { currency } = useContext(ApplicationContext);

  useEffect(() => {
    if (dToken) getDoctorAppointments();
  }, [dToken, getDoctorAppointments]);

  return (
    <div className="doctor-appointments w-full min-h-screen pb-10 px-0 sm:px-6 lg:min-w-screen lg:bg-gray-100">
      14:13:22
      <Title title={"All Appointments"} />
      <AdminContent>
        <div className="appointments__table hidden sm:flex flex-col">
          <div className="appointments__header py-3 px-0 hidden border-b sm:grid grid-cols-[0.5fr_3fr_1fr_3fr_3fr_1fr_1fr] grid-flow-col ">
            <TableHeaderCell data={"#"} text_position={"center"} />
            <TableHeaderCell data={"Patient"} />
            <TableHeaderCell data={"Payment"} text_position={"center"} />
            <TableHeaderCell data={"Age"} text_position={"center"} />
            <TableHeaderCell data={"Date & Time"} text_position={"center"} />
            <TableHeaderCell data={"Fees"} text_position={"center"} />
            <TableHeaderCell data={"Actions"} />
          </div>

          <div className="appointments__body py-3">
            {doctorAppointments.map((appointment, idx) => (
              <TableBodyRowDoctor
                componentData={{
                  data: appointment,
                  currency: currency,
                  cancel_appointment: cancelAppointment,
                  paymentOptions: appointment_payment_options,
                }}
                number={idx + 1}
                key={appointment._id}
              />
            ))}
          </div>
        </div>

        <AppointmentsRecordsDoctor
          componentData={{
            data: doctorAppointments,
            currency: currency,
            cancel_appointment: cancelAppointment,
            paymentOptions: appointment_payment_options,
            appointmentCompleted: "",
          }}
        />
      </AdminContent>
    </div>
  );
};

export default DoctorAppointments;
