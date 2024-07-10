import express from "express";

import checkObjectId from "../middleware/checkObjectId.js";
import { protect, restrictTo } from "../middleware/authMiddleware.js";
import {
	createBrand,
	deleteBrand,
	getBrand,
	getBrands,
	updateBrand,
} from "../controllers/brandController.js";

const router = express.Router();

router
	.route("/")
	.get(protect, getBrands)
	.post(protect, restrictTo("admin"), createBrand);

router
	.route("/:id")
	.get(checkObjectId, getBrand)
	.put(protect, restrictTo("admin"), checkObjectId, updateBrand)
	.delete(protect, restrictTo("admin"), checkObjectId, deleteBrand);

export default router;
