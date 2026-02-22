import { doctors } from "../assets/assets";
import { specialties_data } from "./data_specialties";

export const doctorsData = [
  {
    _id: 1,
    name: "Dr. John Davidson",
    specialty: specialties_data[0].name,
    degree: "MBBS",
    experience: "15 years",
    about:
      "Dr. John Davidson is a highly experienced general physician with over 15 years of practice. He provides comprehensive primary healthcare, preventive medicine, and chronic disease management.",
    rating: 4.5,
    fees: 50,
    image: doctors.doc1,
    address: {
      line1: `1122, 17th Street, New York, NY`,
      line2: `75, John Street, New York, NY`,
    },
  },

  {
    _id: 2,
    name: "Dr. Emma Williams",
    specialty: specialties_data[3].name,
    degree: "MBBS, MD Pediatrics",
    experience: "12 years",
    about:
      "Dr. Emma Williams is a dedicated pediatrician specializing in child development, vaccinations, and preventive child healthcare.",
    rating: 4.7,
    fees: 45,
    image: doctors.doc2,
    address: {
      line1: `23, Oak Road, Brooklyn, NY`,
      line2: `45, Elm Street, Brooklyn, NY`,
    },
  },

  {
    _id: 3,
    name: "Dr. George Smith",
    specialty: specialties_data[4].name,
    degree: "MBBS, MD Neurology",
    experience: "18 years",
    about:
      "Dr. George Smith specializes in diagnosing and treating neurological disorders including migraines, epilepsy, stroke, and nerve disorders.",
    rating: 4.8,
    fees: 70,
    image: doctors.doc3,
    address: {
      line1: `112, Kings Avenue, Manhattan, NY`,
      line2: `58, Green Lane, Manhattan, NY`,
    },
  },

  {
    _id: 4,
    name: "Dr. Charles Brown",
    specialty: specialties_data[0].name,
    degree: "MBBS",
    experience: "22 years",
    about:
      "Dr. Charles Brown is an experienced general physician focused on preventive care, routine check-ups, and long-term disease management.",
    rating: 4.6,
    fees: 60,
    image: doctors.doc4,
    address: {
      line1: `34, Birchwood Drive, Queens, NY`,
      line2: `67, Rose Street, Queens, NY`,
    },
  },

  {
    _id: 5,
    name: "Dr. Benjamin Taylor",
    specialty: specialties_data[4].name,
    degree: "MBBS, MD Neurology",
    experience: "20 years",
    about:
      "Dr. Benjamin Taylor is an experienced neurologist specializing in neurodegenerative disorders, nerve pain, and complex neurological cases.",
    rating: 4.7,
    fees: 85,
    image: doctors.doc5,
    address: {
      line1: `21, High Street, Staten Island, NY`,
      line2: `98, Victoria Road, Staten Island, NY`,
    },
  },

  {
    _id: 6,
    name: "Dr. Olivia Clark",
    specialty: specialties_data[2].name,
    degree: "MBBS, MD Dermatology",
    experience: "10 years",
    about:
      "Dr. Olivia Clark is a dermatologist specializing in skin conditions, acne treatment, eczema, and cosmetic dermatology procedures.",
    rating: 4.6,
    fees: 60,
    image: doctors.doc6,
    address: {
      line1: `56, Queen's Street, Long Island City, NY`,
      line2: `33, Princes Avenue, Long Island City, NY`,
    },
  },

  {
    _id: 7,
    name: "Dr. Sophia Johnson",
    specialty: specialties_data[1].name,
    degree: "MBBS, MD Gynecology",
    experience: "14 years",
    about:
      "Dr. Sophia Johnson specializes in women's reproductive health, prenatal care, and gynecological treatments.",
    rating: 4.9,
    fees: 65,
    image: doctors.doc7,
    address: {
      line1: `87, Cherry Lane, Bronx, NY`,
      line2: `12, Brookside Road, Bronx, NY`,
    },
  },

  {
    _id: 8,
    name: "Dr. William Davis",
    specialty: specialties_data[3].name,
    degree: "MBBS, MD Pediatrics",
    experience: "16 years",
    about:
      "Dr. William Davis is a pediatric specialist focusing on childhood illnesses, growth monitoring, and immunization programs.",
    rating: 4.7,
    fees: 65,
    image: doctors.doc8,
    address: {
      line1: `72, St. Andrew's Square, Jersey City, NJ`,
      line2: `10, Market Street, Jersey City, NJ`,
    },
  },

  {
    _id: 9,
    name: "Dr. James Walker",
    specialty: specialties_data[0].name,
    degree: "MBBS",
    experience: "19 years",
    about:
      "Dr. James Walker provides comprehensive adult healthcare including diabetes management, hypertension control, and preventive screenings.",
    rating: 4.6,
    fees: 55,
    image: doctors.doc9,
    address: {
      line1: `55, Victoria Crescent, New Rochelle, NY`,
      line2: `42, Morningside Road, New Rochelle, NY`,
    },
  },

  {
    _id: 10,
    name: "Dr. Isabella Harris",
    specialty: specialties_data[2].name,
    degree: "MBBS, MD Dermatology",
    experience: "25 years",
    about:
      "Dr. Isabella Harris specializes in advanced dermatological care including psoriasis treatment, skin cancer screening, and cosmetic dermatology.",
    rating: 4.9,
    fees: 90,
    image: doctors.doc10,
    address: {
      line1: `33, Greenfield Avenue, Yonkers, NY`,
      line2: `81, Baker Street, Yonkers, NY`,
    },
  },

  {
    _id: 11,
    name: "Dr. Henry Moore",
    specialty: specialties_data[5].name,
    degree: "MBBS, MD Gastroenterology",
    experience: "15 years",
    about:
      "Dr. Henry Moore specializes in digestive disorders, liver diseases, acid reflux, and colon health management.",
    rating: 4.5,
    fees: 75,
    image: doctors.doc11,
    address: {
      line1: `19, Ashford Road, White Plains, NY`,
      line2: `49, Oxford Street, White Plains, NY`,
    },
  },

  {
    _id: 12,
    name: "Dr. Lily Parker",
    specialty: specialties_data[3].name,
    degree: "MBBS, MD Pediatrics",
    experience: "12 years",
    about:
      "Dr. Lily Parker is dedicated to child wellness, preventive care, and managing pediatric infections and developmental conditions.",
    rating: 4.8,
    fees: 70,
    image: doctors.doc12,
    address: {
      line1: `18, Church Road, Mount Vernon, NY`,
      line2: `65, Park Lane, Mount Vernon, NY`,
    },
  },

  {
    _id: 13,
    name: "Dr. Charlotte Lewis",
    specialty: specialties_data[5].name,
    degree: "MBBS, MD Gastroenterology",
    experience: "17 years",
    about:
      "Dr. Charlotte Lewis focuses on digestive health, IBS treatment, liver conditions, and advanced endoscopic procedures.",
    rating: 4.6,
    fees: 65,
    image: doctors.doc13,
    address: {
      line1: `44, Downing Street, Scarsdale, NY`,
      line2: `27, Mill Lane, Scarsdale, NY`,
    },
  },

  {
    _id: 14,
    name: "Dr. Robert King",
    specialty: specialties_data[2].name,
    degree: "MBBS, MD Dermatology",
    experience: "23 years",
    about:
      "Dr. Robert King is a senior dermatologist specializing in chronic skin disorders, cosmetic dermatology, and minor skin procedures.",
    rating: 4.7,
    fees: 85,
    image: doctors.doc14,
    address: {
      line1: `29, Victoria Road, Tarrytown, NY`,
      line2: `56, Woodlands Lane, Tarrytown, NY`,
    },
  },

  {
    _id: 15,
    name: "Dr. Emily Taylor",
    specialty: specialties_data[1].name,
    degree: "MBBS, MD Gynecology",
    experience: "14 years",
    about:
      "Dr. Emily Taylor specializes in women's reproductive health, hormonal disorders, prenatal care, and preventive gynecological services.",
    rating: 4.8,
    fees: 70,
    image: doctors.doc15,
    address: {
      line1: `36, Waverley Avenue, Newburgh, NY`,
      line2: `23, Railway Street, Newburgh, NY`,
    },
  },
];
