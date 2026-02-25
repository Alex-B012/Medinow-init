export const navbar_links = [
  { name: "Home", path: "/" },
  { name: "All Doctors", path: "/doctors" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export const auth_links = [
  { name: "Login", path: "/login" },
  { name: "My Profile", path: "/my-profile" },
  { name: "My Appointments", path: "/my-appointments" },
  { name: "Logout", path: "/" },
];

export const appointment_links = [
  { name: "Appointment", path: "/appointment" },
];

export const footer_links = [
  { name: "Home", path: "/" },
  {
    name: "About Us",
    path: navbar_links.find((link) => link.name === "About").path,
  },
  {
    name: "Contact Us",
    path: navbar_links.find((link) => link.name === "Contact").path,
  },
  { name: "Career", path: "/career" },
  { name: "Privacy Policy", path: "/privacy-policy" },
];
