import { assets } from "../assets/assets";

export const admin_links = {
  admin_dashboard: {
    name: "Dashboard",
    icon: assets.home_icon,
    url: "admin-dashboard",
  },
  all_appointments: {
    name: "Appointments",
    icon: assets.appointment_icon,
    url: "all-appointments",
  },
  add_doctor: {
    name: "Add Doctor",
    icon: assets.add_icon,
    url: "add-doctor",
  },
  doctor_list: {
    name: "Doctors List",
    icon: assets.people_icon,
    url: "doctor-list",
  },
};

export const specialties_data = [
  { id: 1, name: "General physician" },
  { id: 2, name: "Gynecologist" },
  { id: 3, name: "Dermatologist" },
  { id: 4, name: "Pediatrician" },
  { id: 5, name: "Neurologist" },
  {
    id: 6,
    name: "Gastroenterologist",
  },
];

export const years_data = [
  { id: 1, name: "1 Year" },
  { id: 2, name: "2 Year" },
  { id: 3, name: "3 Year" },
  { id: 4, name: "4 Year" },
  { id: 5, name: "5 Year" },
  { id: 6, name: "6 Year" },
  { id: 7, name: "7 Year" },
  { id: 8, name: "8 Year" },
  { id: 9, name: "9 Year" },
  { id: 10, name: "10 Years" },
  { id: 11, name: "10+ Years" },
];
