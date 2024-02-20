import express from "express";
import {
  getTodaysAttendance,
  addAttendance,
  deleteAttendance,
  updateAttendance,
  getMonthData,
} from "../controllers/attendance.controller.js";
import validateToken from "../middlewares/validateToken.js";

const router = express.Router();

router.get("/today/:id/:date/:month/:year", validateToken, getTodaysAttendance);
router.get("/month/:userId/:month/:year", validateToken, getMonthData);
router.post("/add", validateToken, addAttendance);
router.post("/update/:id", validateToken, updateAttendance);
router.get("/delete/:id", validateToken, deleteAttendance);

export default router;
