import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";

export const login = asyncHandler(async (req, res) => {
  if (
    req.body.username === process.env.ADMIN_USERNAME &&
    req.body.password === process.env.ADMIN_PASSWORD
  ) {
    const jwtToken = jwt.sign(
      {
        username: req.body.username,
      },
      process.env.JWT_KEY
    );

    res
      .cookie("accessToken", jwtToken, { httpOnly: true, sameSite: "none" })
      .status(200)
      .send({
        success: true,
      });
  } else {
    res.status(200).send({
      success: false,
      error: "wrong username or password",
    });
  }
});

export const logout = asyncHandler((req, res) => {
  res
    .clearCookie("accessToken", { sameSite: "none", secure: true })
    .status(200)
    .send({ success: true, msg: "user logged out" });
});
