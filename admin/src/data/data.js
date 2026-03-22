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

export const doctor_links = {
  doctor_dashboard: {
    name: "Dashboard",
    icon: assets.home_icon,
    url: "doctor-dashboard",
  },
  doctor_appointments: {
    name: "Appointments",
    icon: assets.appointment_icon,
    url: "doctor-appointments",
  },
  doctor_profile: {
    name: "Profile",
    icon: assets.doctor_icon,
    url: "doctor-profile",
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
  { id: 11, name: "11 Years" },
  { id: 12, name: "12 Years" },
  { id: 13, name: "13 Years" },
  { id: 14, name: "14 Years" },
  { id: 15, name: "15 Years" },
  { id: 16, name: "16 Years" },
  { id: 17, name: "17 Years" },
  { id: 18, name: "18 Years" },
  { id: 19, name: "19 Years" },
  { id: 20, name: "20 Years" },
  { id: 21, name: "21 Years" },
  { id: 22, name: "22 Years" },
  { id: 23, name: "23 Years" },
  { id: 24, name: "24 Years" },
  { id: 25, name: "25 Years" },
  { id: 26, name: "26 Years" },
  { id: 27, name: "27 Years" },
  { id: 28, name: "28 Years" },
  { id: 29, name: "29 Years" },
  { id: 30, name: "30 Years" },
  { id: 31, name: "15+ Years" },
];

export const appointment_payment_options = {
  online: "Online",
  cash: "Cash",
};
