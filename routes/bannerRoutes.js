import express from "express";

import checkObjectId from "../middleware/checkObjectId.js";
import { protect, restrictTo } from "../middleware/authMiddleware.js";
import {
	createBanner,
	deleteBanner,
	getBanner,
	getBanners,
	updateBanner,
} from "../controllers/bannerController.js";
import { uploadSingleImage } from "../middleware/upload.js";

const router = express.Router();

router
	.route("/")
	.get(getBanners)
	.post(protect, restrictTo("admin"), uploadSingleImage, createBanner);

router
	.route("/:id")
	.get(checkObjectId, getBanner)
	.put(protect, restrictTo("admin"), checkObjectId, updateBanner)
	.delete(protect, restrictTo("admin"), checkObjectId, deleteBanner);

export default router;
