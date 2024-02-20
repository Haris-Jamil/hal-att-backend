import express from "express";
import {
  addUser,
  editUser,
  getAllUsers,
  removeUser,
  getUserByDepartment,
} from "../controllers/user.controller.js";
import validateToken from "../middlewares/validateToken.js";

const router = express.Router();

router.post("/add", validateToken, addUser);
router.get("/delete/:id", validateToken, removeUser);
router.post("/edit/:id", validateToken, editUser);
router.get("/all", validateToken, getAllUsers);
router.get("/userByDepartment", validateToken, getUserByDepartment);

export default router;
