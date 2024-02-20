import mongoose from "mongoose";

const DepartmentScehama = mongoose.Schema(
  {
    name: String,
  },
  { timestamps: true }
);

export default mongoose.model("Department", DepartmentScehama);
