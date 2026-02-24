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
      "Dr. John Davidson is a highly experienced general physician with over 15 years of practice. He provides comprehensive primary healthcare, preventive medicine, and chronic disease management. He is committed to delivering patient-centered care, focusing on accurate diagnosis, personalized treatment plans, and long-term wellness strategies. Dr. Davidson emphasizes lifestyle modification, early detection of illnesses, and continuous monitoring to ensure his patients maintain optimal health and quality of life.",
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
      "Dr. Emma Williams is a dedicated pediatrician specializing in child development, vaccinations, and preventive child healthcare. She works closely with families to monitor growth milestones, provide nutritional guidance, and manage common childhood illnesses. Dr. Williams believes in creating a comfortable and friendly environment for children while educating parents about preventive strategies to ensure healthy physical and emotional development.",
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
      "Dr. George Smith specializes in diagnosing and treating neurological disorders including migraines, epilepsy, stroke, and nerve disorders. With extensive clinical expertise, he utilizes advanced diagnostic techniques and evidence-based treatments to manage complex neurological conditions. Dr. Smith is dedicated to improving patients’ quality of life through personalized care plans, rehabilitation guidance, and long-term neurological health monitoring.",
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
      "Dr. Charles Brown is an experienced general physician focused on preventive care, routine check-ups, and long-term disease management. He has spent over two decades helping patients manage chronic illnesses while promoting healthy living habits. Dr. Brown prioritizes early diagnosis, patient education, and structured follow-up plans to ensure consistent health improvements and sustainable lifestyle changes.",
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
      "Dr. Benjamin Taylor is an experienced neurologist specializing in neurodegenerative disorders, nerve pain, and complex neurological cases. He provides detailed evaluations and advanced treatment options tailored to each patient’s specific condition. Dr. Taylor is committed to combining medical innovation with compassionate care to support patients dealing with chronic neurological challenges and improve their daily functioning.",
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
      "Dr. Olivia Clark is a dermatologist specializing in skin conditions, acne treatment, eczema, and cosmetic dermatology procedures. She offers comprehensive skin evaluations and customized treatment plans designed to restore skin health and confidence. Dr. Clark stays updated with the latest dermatological advancements to provide safe, effective, and minimally invasive cosmetic solutions.",
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
      "Dr. Sophia Johnson specializes in women's reproductive health, prenatal care, and gynecological treatments. She provides compassionate and comprehensive care for women at every stage of life, from adolescence to menopause. Dr. Johnson emphasizes preventive screenings, hormonal balance management, and patient education to promote long-term reproductive wellness and overall health.",
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
      "Dr. William Davis is a pediatric specialist focusing on childhood illnesses, growth monitoring, and immunization programs. He works closely with families to ensure children receive timely vaccinations and proper developmental assessments. Dr. Davis is dedicated to providing a supportive and reassuring environment that encourages healthy growth and long-term well-being.",
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
      "Dr. James Walker provides comprehensive adult healthcare including diabetes management, hypertension control, and preventive screenings. He focuses on creating personalized treatment strategies that address both immediate health concerns and long-term risk reduction. Dr. Walker believes in empowering patients through education, regular monitoring, and proactive lifestyle adjustments.",
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
      "Dr. Isabella Harris specializes in advanced dermatological care including psoriasis treatment, skin cancer screening, and cosmetic dermatology. With over two decades of experience, she provides thorough skin assessments and cutting-edge treatment solutions. Dr. Harris is committed to patient safety, early detection of serious conditions, and delivering natural-looking cosmetic enhancements.",
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
      "Dr. Henry Moore specializes in digestive disorders, liver diseases, acid reflux, and colon health management. He provides detailed diagnostic evaluations and personalized treatment plans to manage both acute and chronic gastrointestinal conditions. Dr. Moore emphasizes preventive screenings, dietary guidance, and long-term digestive wellness strategies.",
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
      "Dr. Lily Parker is dedicated to child wellness, preventive care, and managing pediatric infections and developmental conditions. She partners with parents to track developmental milestones and ensure children receive timely medical attention. Dr. Parker is passionate about building long-term relationships with families to support healthy childhood growth.",
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
      "Dr. Charlotte Lewis focuses on digestive health, IBS treatment, liver conditions, and advanced endoscopic procedures. She provides comprehensive gastrointestinal evaluations and patient-focused treatment strategies to relieve symptoms and improve digestive function. Dr. Lewis stays current with modern endoscopic technologies to ensure accurate diagnosis and minimally invasive care.",
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
      "Dr. Robert King is a senior dermatologist specializing in chronic skin disorders, cosmetic dermatology, and minor skin procedures. With extensive experience in treating complex dermatological conditions, he combines medical expertise with aesthetic precision. Dr. King focuses on patient education, preventive skin care, and delivering safe procedural outcomes.",
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
      "Dr. Emily Taylor specializes in women's reproductive health, hormonal disorders, prenatal care, and preventive gynecological services. She provides comprehensive evaluations, individualized treatment plans, and supportive prenatal guidance to ensure healthy pregnancies. Dr. Taylor is dedicated to empowering women through education, preventive screenings, and long-term reproductive wellness care.",
    rating: 4.8,
    fees: 70,
    image: doctors.doc15,
    address: {
      line1: `36, Waverley Avenue, Newburgh, NY`,
      line2: `23, Railway Street, Newburgh, NY`,
    },
  },
];
