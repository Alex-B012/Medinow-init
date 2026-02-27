//add doctor
const addDoctor = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      specialty,
      degree,
      experience,
      about,
      fees,
      address,
    } = req.body;

    const imageFile = req.file;

    console.log(
      "obj:",
      {
        name,
        email,
        password,
        specialty,
        degree,
        experience,
        about,
        fees,
        address,
      },
      imageFile,
    );

    res.json({ success: true, message: "Doctor added" });
  } catch (error) {
    console.log("ERROR:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

export default addDoctor;
