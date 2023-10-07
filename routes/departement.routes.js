import express from "express";
import {
  createDepartement,
  deleteDepartement,
  getAllDepartements,
  getDepartementById,
} from "../controllers/departement.controller.js";

const router = express.Router();

router.get("/departement", getAllDepartements);
router.get("/departement/:id", getDepartementById);
router.post("/departement", createDepartement);
router.delete("/departement/:id", deleteDepartement);

export default router;
