import express from "express";
import {
  createComputer,
  deleteComputer,
  getAllComputers,
  getComputerById,
} from "../controllers/computer.controller.js";

const router = express.Router();

router.get("/computer", getAllComputers);
router.get("/computer/:id", getComputerById);
router.post("/computer", createComputer);
router.delete("/computer/:id", deleteComputer);

export default router;
