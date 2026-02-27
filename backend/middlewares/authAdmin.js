import jwt from "jsonwebtoken";

const authAdmin = async (req, res, next) => {
  try {
    const { a_token } = req.headers;

    if (!a_token) {
      return res.json({
        success: false,
        message: "Not Authorized Login Again",
      });
    }

    const token_decode = jwt.verify(a_token, process.env.JWT_SECRET);

    if (token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
      return res.json({
        success: false,
        message: "Not Authorized Login Again",
      });
    }

    next();
  } catch (error) {
    console.log("authAdmin - catch:", error);
    res.json({ success: false, message: error.message });
  }
};

export default authAdmin;
