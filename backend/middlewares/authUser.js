import jwt from "jsonwebtoken";

const authUser = async (req, res, next) => {
  console.log("authUser");
  try {
    const { token } = req.headers;

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Not Authorized Login Again",
      });
    }

    const token_decode = jwt.verify(token, process.env.JWT_SECRET);

    console.log("token_decode.id", token_decode.id);
    req.userId = token_decode.id;
    next();
  } catch (error) {
    console.log("authAdmin - catch:", error);
    res.json({ success: false, message: error.message });
  }
};

export default authUser;
