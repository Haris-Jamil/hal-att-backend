import asyncHandler from "express-async-handler";
import Attendance from "../models/Attendance.model.js";

export const getTodaysAttendance = asyncHandler(async (req, res) => {
  const userId = req.params.id;
  const date = req.params.date;
  const month = req.params.month;
  const year = req.params.year;

  const today = await Attendance.find({
    userId,
    date,
    month,
    year,
  });

  res.status(200).send({ success: true, today });
});

export const addAttendance = asyncHandler(async (req, res) => {
  const att = new Attendance(req.body);
  await att.save();
  res.status(200).send({ success: true });
});

export const deleteAttendance = asyncHandler(async (req, res) => {
  await Attendance.findOneAndDelete({ _id: req.params.id });
  res.status(200).send({ success: true });
});

export const updateAttendance = asyncHandler(async (req, res) => {
  const newAtt = await Attendance.findOneAndUpdate(
    { _id: req.params.id },
    req.body,
    { new: true }
  );
  res.status(200).send({ success: true, newAtt });
});

export const getMonthData = asyncHandler(async (req, res) => {
  const data = await Attendance.find({
    userId: req.params.userId,
    month: req.params.month,
    year: req.params.year,
  }).sort({ name: 1 });
  res.status(200).send({ success: true, data });
});
