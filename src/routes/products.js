import { Router } from "express";
import * as productsController from "../controllers/productsController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { requireAccessibility } from "../middlewares/roleMiddleWare.js";

const router = Router();

router.get("/", productsController.getAllProducts);
router.get("/:id", productsController.getProductById);
router.post("/", authMiddleware, requireAccessibility("ADMIN"), productsController.createProduct);
router.put("/:id", authMiddleware, requireAccessibility("ADMIN"), productsController.updateProduct);
router.delete("/:id", authMiddleware, requireAccessibility("ADMIN"),  productsController.deleteProduct);

export default router;
