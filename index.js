import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import connectDB from "./config/dbConnection.js";
import AuthRouter from "./routes/auth.route.js";
import DepartmentRouter from "./routes/department.route.js";
import UserRouter from "./routes/user.route.js";
import AttendanceRouter from "./routes/attendance.route.js";
import { errorHandler } from "./middlewares/errorHandler.js";

dotenv.config();

const port = process.env.PORT || 5000;
const app = express();

app.use(
  cors({
    origin: ["http://localhost:5173", "https://hal-att-frontend.vercel.app"],
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());
app.use(helmet());
app.use("/api/auth", AuthRouter);
app.use("/api/department", DepartmentRouter);
app.use("/api/user", UserRouter);
app.use("/api/attendance", AttendanceRouter);
app.use(errorHandler);

connectDB().then(() => {
  app.listen(port, () => {
    console.log("server running on port " + port);
  });
});

export default app;
