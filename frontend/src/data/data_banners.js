import { header_doctors_image, header_images } from "../assets/assets";
import { promotion_data } from "./data";
import { appointment_links } from "./links";

export const welcome_banner = {
  title: {
    line1: "Book Appointment",
    line2: "With Trusted Doctors",
  },
  three_images: {
    images: header_images,
  },

  text: promotion_data.text,
  img: header_doctors_image,

  button: {
    text: "Book Appointment",
    same_page_link: "speciality",
  },
};

export const appointment_banner = {
  title: {
    line1: "Book Appointment",
    line2: "With 100+ Trusted Doctors",
  },

  img: header_doctors_image,

  button: {
    text: "Create account",
    link: appointment_links[0],
  },
};
