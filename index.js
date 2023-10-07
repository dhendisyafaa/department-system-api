import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import db from "./config/database.js";
import { Computer } from "./models/computer.js";
import { Departement } from "./models/departement.js";
import { Deptproj } from "./models/deptproj.js";
import { Project } from "./models/project.js";
import { User } from "./models/user.js";
import ComputerRoutes from "./routes/computer.routes.js";
import DepartementRoutes from "./routes/departement.routes.js";
import DeptprojRoutes from "./routes/deptproj.routes.js";
import ProjectRoutes from "./routes/project.routes.js";
import UserRoutes from "./routes/user.routes.js";
dotenv.config();

const app = express();
const PORT = process.env.APP_PORT;

app.use(cors());
app.use(express.json());

app.use(ComputerRoutes);
app.use(UserRoutes);
app.use(ProjectRoutes);
app.use(DepartementRoutes);
app.use(DeptprojRoutes);

try {
  await db.authenticate();
  console.log("db connected");
  Computer.sync();
  Departement.sync();
  User.sync();
  Project.sync();
  Deptproj.sync();
} catch (error) {
  res.status(500).json({ message: error });
}

app.listen(PORT, () => {
  console.log("Server up and running...");
});
