import jwt from "jsonwebtoken";

const validateToken = (req, res, next) => {
  const accessToken = req.cookies.accessToken;
  if (!accessToken) {
    res.status(401);
    throw new Error("no authtoken found");
  }

  jwt.verify(accessToken, process.env.JWT_KEY, (err, payload) => {
    if (err) {
      res.status(403);
      throw new Error("accesstoken is not valid");
    }
    next();
  });
};

export default validateToken;
