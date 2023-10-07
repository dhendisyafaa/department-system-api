import express from "express";
import {
  createUser,
  deleteUser,
  getAllUsers,
  getUsersById,
} from "../controllers/user.controller.js";

export const router = express.Router();

router.get("/user", getAllUsers);
router.get("/user/:id", getUsersById);
router.post("/user", createUser);
router.delete("/user/:id", deleteUser);

export default router;
