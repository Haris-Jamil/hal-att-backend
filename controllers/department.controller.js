import asyncHandler from "express-async-handler";
import Department from "../models/Department.model.js";

export const addDepart = asyncHandler(async (req, res) => {
  const newDepartment = new Department({
    name: req.body.name,
  });
  await newDepartment.save(newDepartment);
  res.status(200).send({ success: true });
});

export const deleteDepart = asyncHandler(async (req, res) => {
  await Department.findOneAndDelete({ _id: req.params.id });
  res.status(200).send({ success: true });
});

export const getAllDepart = asyncHandler(async (req, res) => {
  const departs = await Department.find();
  res.status(200).send(departs);
});
