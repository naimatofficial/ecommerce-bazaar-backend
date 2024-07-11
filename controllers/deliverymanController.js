import Dilveryman from "../models/deliverymanModel.js";
import catchAsync from "../utils/catchAsync.js";
import { deleteOne, getAll, getOne, updateOne } from "./handleFactory.js";

export const createDilveryman = catchAsync(async (req, res, next) => {
	let data = req.body;
	console.log(req.files);
	// const imageUrl = req.files.image ? req.files.image[0].path : null;
	// const identityImageUrl = req.files.identityImage
	// 	? req.files.identityImage[0].path
	// 	: null;

	// console.log({ imageUrl, identityImageUrl });
	// if (imageUrl && identityImageUrl)
	// 	data = { ...data, image: imageUrl, identityImage: identityImageUrl };
	// const doc = await Deliveryman.create(data);

	res.status(201).json({
		status: "success",
		doc: null,
	});
});

export const getDilverymans = getAll(Dilveryman);
export const getDilveryman = getOne(Dilveryman);
export const deleteDilveryman = deleteOne(Dilveryman);
export const updateDilveryman = updateOne(Dilveryman);
