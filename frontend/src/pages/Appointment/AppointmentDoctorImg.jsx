const AppointmentDoctorImg = ({ img_data }) => {
  return (
    <div className="appointment-doctor-img w-60 h-85 min-w-60 border border-blue-200 rounded-xl">
      <img
        className="appointment-doctor-img__image w-60 h-85 object-cover rounded-xl"
        src={img_data.src}
        alt={img_data.alt}
      />
    </div>
  );
};

export default AppointmentDoctorImg;
