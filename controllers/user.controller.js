import asyncHandler from "express-async-handler";
import User from "../models/User.model.js";
import Department from "../models/Department.model.js";

export const addUser = asyncHandler(async (req, res) => {
  const newUser = new User(req.body);
  await newUser.save(newUser);
  res.status(200).send({ success: true });
});

export const removeUser = asyncHandler(async (req, res) => {
  await User.findOneAndDelete({ _id: req.params.id });
  res.status(200).send({ success: true });
});

export const getAllUsers = asyncHandler(async (req, res) => {
  const users = await User.find();
  res.status(200).send(users);
});

export const editUser = asyncHandler(async (req, res) => {
  const updatedUser = await User.findOneAndUpdate(
    { _id: req.params.id },
    req.body,
    { new: true }
  );
  res.status(200).send({ success: true, updatedUser });
});

export const getUserByDepartment = asyncHandler(async (req, res) => {
  let data = [];
  const departments = await Department.find().sort({ name: 1 });
  for (let d of departments) {
    const users = await User.find({ department: d.name }).sort({
      name: 1,
    });
    data.push({ department: d.name, users });
  }
  res.status(200).json({ success: true, response: data });
});
