import doctorModel from "../models/doctorModel.js";
import userModel from "../models/userModel.js";
import { v2 as cloudinary } from "cloudinary";
import { handleServerError } from "../utils/utils.js";

const deleteCloudinaryRedundantImages = async () => {
  try {
    console.log("deleteCloudinaryRedundantImages - start");

    // Collect all public_ids from DB
    const users = await userModel.find({}, "image_id");
    const doctors = await doctorModel.find({}, "image_id");
    const dbPublicIds = new Set();

    users.forEach((user) => {
      if (user.image_id) dbPublicIds.add(user.image_id);
    });

    doctors.forEach((doctor) => {
      if (doctor.image_id) dbPublicIds.add(doctor.image_id);
    });

    // Get all Cloudinary images in users & doctors folders
    const folders = ["users", "doctors"];
    let cloudinaryImages = [];

    for (const folder of folders) {
      let nextCursor = null;
      do {
        const result = await cloudinary.api.resources({
          type: "upload",
          prefix: `${process.env.CLOUDINARY_PROJECT_NAME}/${folder}`,
          max_results: 500,
          next_cursor: nextCursor,
        });

        cloudinaryImages.push(...result.resources);
        nextCursor = result.next_cursor;
      } while (nextCursor);
    }

    const orphanPublicIds = cloudinaryImages
      .map((img) => img.public_id)
      .filter((public_id) => !dbPublicIds.has(public_id));

    console.log("Total DB image_ids:", dbPublicIds.size);
    console.log("Total Cloudinary images:", cloudinaryImages.length);
    console.log("Orphan public_ids found:", orphanPublicIds.length);

    if (orphanPublicIds.length > 0) {
      const batchSize = 100;

      for (let i = 0; i < orphanPublicIds.length; i += batchSize) {
        const batch = orphanPublicIds.slice(i, i + batchSize);
        const result = await cloudinary.api.delete_resources(batch);
        // console.log("Deleted batch:", result.deleted);
      }
      console.log("All Cloudinary orphan images deleted");
    }
  } catch (error) {
    handleServerError(error);
  }
};

export { deleteCloudinaryRedundantImages };
