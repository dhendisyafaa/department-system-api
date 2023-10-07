import express from "express";
import {
  getAllProjects,
  createProject,
  deleteProject,
  getProjectsById,
} from "../controllers/project.controller.js";

export const router = express.Router();

router.get("/project", getAllProjects);
router.get("/project/:id", getProjectsById);
router.post("/project", createProject);
router.delete("/project/:id", deleteProject);

export default router;
