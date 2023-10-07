import express from "express";
import { getAllDeptproj } from "../controllers/deptproj.controller.js";

export const router = express.Router();

router.get("/deptproj", getAllDeptproj);

export default router;
