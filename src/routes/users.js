import { Router } from "express";
import * as usersController from "../controllers/usersController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { requireAccessibility } from "../middlewares/roleMiddleWare.js";

const router = Router();

router.get("/", authMiddleware,requireAccessibility("ADMIN"), usersController.getAllUsers);

// GET current user's profile
router.get("/me", authMiddleware, usersController.getProfile);

// Update current user's profile
router.put("/me", authMiddleware, usersController.updateProfile);

// Delete current user's account
router.delete("/me", authMiddleware, usersController.deleteAccount);

export default router;