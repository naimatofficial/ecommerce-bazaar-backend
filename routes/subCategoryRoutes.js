import express from "express";

import checkObjectId from "../middleware/checkObjectId.js";
import { protect, restrictTo } from "../middleware/authMiddleware.js";
import {
	createSubCategory,
	deleteSubCategory,
	getSubCategories,
	getSubCategory,
	updateSubCategory,
} from "../controllers/subCategoryController.js";
import { uploadSingleImage } from "../middleware/upload.js";

const router = express.Router();

router
	.route("/")
	.get(protect, getSubCategories)
	.post(protect, restrictTo("admin"), uploadSingleImage, createSubCategory);

router
	.route("/:id")
	.get(checkObjectId, getSubCategory)
	.put(protect, restrictTo("admin"), checkObjectId, updateSubCategory)
	.delete(protect, restrictTo("admin"), checkObjectId, deleteSubCategory);

export default router;
