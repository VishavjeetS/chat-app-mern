import express from "express";
import User from "../models/user.model.js";
import protectRoute from "../middlewear/protectRoute.js";
import { getUsersForSidebar } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/", protectRoute, getUsersForSidebar);

export default router;
