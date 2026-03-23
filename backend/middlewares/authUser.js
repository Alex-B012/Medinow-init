import jwt from "jsonwebtoken";

const authUser = async (req, res, next) => {
  if (process.env.NODE_ENV) console.log("authUser - start");

  try {
    const { token } = req.headers;

    if (!token)
      return res.status(401).json({
        success: false,
        message: "Not Authorized Login Again",
      });

    const token_decode = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = token_decode.id;

    next();
  } catch (error) {
    console.log("authAdmin - Error:", error);
    res.json({ success: false, message: error.message });
  }
};

export default authUser;
