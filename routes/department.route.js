import express from "express";
import {
  addDepart,
  deleteDepart,
  getAllDepart,
} from "../controllers/department.controller.js";
import validateToken from "../middlewares/validateToken.js";
const router = express.Router();

router.post("/add", validateToken, addDepart);
router.get("/delete/:id", validateToken, deleteDepart);
router.get("/all", validateToken, getAllDepart);

export default router;
