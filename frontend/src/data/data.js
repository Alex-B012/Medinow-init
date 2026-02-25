import { about_images, contact_img } from "../assets/assets";

const company_profile = {
  name: "MediNow",
  phone: "+1 (234) 123-4567",
  email: "contact@medinow.com",
  address: {
    line1: "Suite 123, 75, John Street",
    line2: "New York, NY 10579",
  },
};

export const promotion_data = {
  text: "Just explore our detailed list of trusted doctors, choose your ideal doctor, and schedule your appointment seamlessly.",
};

export const footer_data = {
  promo_text: {
    title: "Company",
    text: "We are dedicated to providing trusted medical care, connecting you with top healthcare professionals, and ensuring your well-being. Experience compassionate, accessible, and reliable healthcare anytime, anywhere.",
  },

  contacts: {
    title: "Get in Touch",
    phone: company_profile.phone,
    email: company_profile.email,
  },

  copyright: {
    text: {
      line1: "© 2026 MediNow.",
      line2: "All rights reserved.",
    },
  },
};

export const about_data = {
  img: about_images.about_greeting,
  text: [
    {
      id: 1,
      para: "At MediNow, we believe healthcare should be accessible, compassionate, and centered on each individual. Our mission is to connect people with reliable medical services through modern technology and trusted expertise. From primary care to preventive screenings, we provide a seamless experience supporting patients at every stage of life.",
    },
    {
      id: 2,
      para: "Founded to modernize healthcare delivery, MediNow combines innovation with personalized service. We offer virtual consultations, in-clinic visits, chronic care management, and diagnostics via a secure platform. By reducing wait times and improving communication, we make healthcare efficient, convenient, and accessible for everyone.",
    },
  ],
  values: {
    title: "Our values",
    text: [
      {
        id: 1,
        para: "Our values shape every patient experience and guide our care. We stand for compassion, integrity, innovation, and excellence. Through transparent, respectful service and smart technology, MediNow delivers reliable, personalized healthcare that builds trust and expands access to quality care for every community we serve.",
      },
    ],
  },
  chooseUs: {
    title: "Why choose us",
    text: [
      {
        id: 1,
        title: "Efficiency",
        para: "Fast appointments, reduced wait times, and streamlined digital healthcare services.",
      },
      {
        id: 2,
        title: "Convenience",
        para: "Book online, access virtual care, and manage health anytime.",
      },
      {
        id: 3,
        title: "Personalization",
        para: "Tailored treatment plans designed around individual patient needs.",
      },
    ],
  },
};

export const contact_data = {
  img: contact_img,
  office_data: {
    title: "Our office",
    address: company_profile.address,
    office_timings: {
      title: "Office Timings",
      timings: [
        { id: 1, day: "Monday", time: "9am – 7pm" },
        { id: 2, day: "Tuesday", time: "9am – 7pm" },
        { id: 3, day: "Wednesday", time: "9am – 7pm" },
        { id: 4, day: "Thursday", time: "9am – 7pm" },
        { id: 5, day: "Friday", time: "9am – 7pm" },
        { id: 6, day: "Saturday", time: "9am – 2pm" },
        { id: 7, day: "Sunday", time: "Closed" },
      ],
    },
    location_title: "Office location",
  },
  phone: company_profile.phone,
  email: company_profile.email,
  careers: {
    title: `Careers at ${company_profile.name}`,
    text: "Learn more about our teams and job openings",
    btn_text: "Explore Jobs",
  },
};
