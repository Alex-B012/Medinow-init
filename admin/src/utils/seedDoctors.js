import axios from "axios";
import { doctorsData } from "../data/data_doctors.js";
import { toast } from "react-toastify";

export const seedDoctorsToServer = async (backendUrl, aToken) => {
  console.log("seedDoctorsToServer");
  try {
    for (const doc of doctorsData) {
      const formData = new FormData();

      try {
        formData.append("name", doc.name);
        formData.append(
          "email",
          `${doc.name.replaceAll(" ", "").toLowerCase()}@mail.com`,
        );
        formData.append("password", "12345678");
        formData.append("experience", doc.experience);
        formData.append("fees", doc.fees);
        formData.append("specialty", doc.specialty);
        formData.append("degree", doc.degree);
        formData.append("about", doc.about);
        formData.append("address", JSON.stringify(doc.address));

        // convert image path to file
        const imgResponse = await fetch(doc.image);
        const blob = await imgResponse.blob();
        const file = new File([blob], "doctor.jpg", { type: blob.type });
        formData.append("image", file);

        await axios.post(backendUrl + "/api/admin/add-doctor", formData, {
          headers: { a_token: aToken },
        });

        console.log("Doctors seeded successfully");
      } catch (error) {
        const message = error.response?.data?.message;
        const error_data = error.response?.data;
        toast.error(message);
        console.log(error_data);
      }
    }
  } catch (error) {
    console.error("Doctor seeding failed:", error);
  }
};
