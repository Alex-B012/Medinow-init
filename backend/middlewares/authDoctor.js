import jwt from "jsonwebtoken";

const authDoctor = async (req, res, next) => {
  console.log("authDoctor");

  try {
    const { d_token } = req.headers;

    if (!d_token)
      return res.status(401).json({
        success: false,
        message: "Not Authorized Login Again",
      });

    const token_decode = jwt.verify(d_token, process.env.JWT_SECRET);
    req.docId = token_decode.id;

    next();
  } catch (error) {
    console.log("authDoctor - Error:", error);
    res.json({ success: false, message: error.message });
  }
};

export default authDoctor;
