import express from "express";

import checkObjectId from "../middleware/checkObjectId.js";
import { protect, restrictTo } from "../middleware/authMiddleware.js";
import {
	createDilveryman,
	deleteDilveryman,
	getDilveryman,
	getDilverymans,
	updateDilveryman,
} from "../controllers/deliverymanController.js";
import { deliverymanUpload } from "../middleware/upload.js";

const router = express.Router();

router
	.route("/")
	.get(protect, getDilverymans)
	.post(protect, restrictTo("admin"), deliverymanUpload, createDilveryman);

router
	.route("/:id")
	.get(checkObjectId, getDilveryman)
	.put(protect, restrictTo("admin"), checkObjectId, updateDilveryman)
	.delete(protect, restrictTo("admin"), checkObjectId, deleteDilveryman);

export default router;
