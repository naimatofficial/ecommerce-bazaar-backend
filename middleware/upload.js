import AppError from "../utils/appError.js";
import createMulterUpload from "./createMulterUpload.js";

export const deliverymanUpload = async (req, res, next) => {
	const fields = [
		{ name: "image", maxCount: 1 },
		{ name: "identityImage", maxCount: 1 },
	];

	// for (let f in fields) {
	const upload = createMulterUpload(fields);
	upload(req, res, (err) => {
		if (err) {
			return next(new AppError("Image not uploaded.", 400));
		}
		next();
	});
	// }
	// fields?.map((field) => {
	// 	const upload = createMulterUpload(field);
	// 	upload(req, res, (err) => {
	// 		if (err) {
	// 			return next(new AppError("Image not uploaded.", 400));
	// 		}
	// 		return next();
	// 	});
	// });
};

export const uploadSingleImage = (req, res, next) => {
	const fields = [{ name: "logo", maxCount: 1 }];

	const upload = createMulterUpload(fields);
	upload(req, res, (err) => {
		if (err) {
			return res.status(400).send({ error: err.message });
		}
		next();
	});
};

export const vendorUpload = async (req, res, next) => {
	const fields = [
		{ name: "identityImage", maxCount: 1 },
		{ name: "image", maxCount: 1 },
	];

	const upload = await createMulterUpload(fields);
	upload(req, res, (err) => {
		if (err) {
			return next(new AppError("Image not uploaded.", 400));
		}
		next();
	});
};
