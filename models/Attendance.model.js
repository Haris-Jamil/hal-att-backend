import mongoose from "mongoose";

const AttendanceSchema = mongoose.Schema(
  {
    userId: String,
    date: Number,
    month: Number,
    year: Number,
    timeIn: String,
    timeOut: String,
    onLeave: {
      type: Boolean,
      default: false,
    },
    isAbsent: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Attendance", AttendanceSchema);
