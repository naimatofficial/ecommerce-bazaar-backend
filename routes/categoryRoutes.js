import express from "express";

import checkObjectId from "../middleware/checkObjectId.js";
import { protect, restrictTo } from "../middleware/authMiddleware.js";
import {
	createCategory,
	deleteCategory,
	getCategories,
	getCategory,
	updateCategory,
} from "../controllers/categoryController.js";
import { getSubCategoriesFromMainCategory } from "../controllers/subCategoryController.js";
import { getSubSubCategoriesFromSubCategories } from "../controllers/subSubCategoryController.js";
import { uploadSingleImage } from "../middleware/upload.js";

const router = express.Router();

router.get("/:mainCategory/sub-categories", getSubCategoriesFromMainCategory);

router.get(
	"/:mainCategory/sub-categories/:subCategory/sub-sub-categories",
	getSubSubCategoriesFromSubCategories
);

router
	.route("/")
	.get(getCategories)
	.post(protect, restrictTo("admin"), uploadSingleImage, createCategory);

router
	.route("/:id")
	.get(checkObjectId, getCategory)
	.put(protect, restrictTo("admin"), checkObjectId, updateCategory)
	.delete(protect, restrictTo("admin"), checkObjectId, deleteCategory);

export default router;
