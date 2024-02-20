import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
  {
    name: String,
    department: String,
    shiftStart: String,
    shiftEnd: String,
    requiredHours: String,
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
