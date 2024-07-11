import SubCategory from "../models/subCategoryModel.js";
import catchAsync from "../utils/catchAsync.js";
import {
	createOne,
	deleteOne,
	getAll,
	getOne,
	updateOne,
} from "./handleFactory.js";

export const createSubCategory = createOne(SubCategory);
export const getSubCategories = getAll(SubCategory);
export const getSubCategory = getOne(SubCategory);
export const deleteSubCategory = deleteOne(SubCategory);
export const updateSubCategory = updateOne(SubCategory);

export const getSubCategoriesFromMainCategory = catchAsync(
	async (req, res, next) => {
		const { mainCategory } = req.params;
		const doc = await SubCategory.find({ mainCategory });

		res.status(200).json({
			status: "success",
			results: doc?.length,
			data: doc,
		});
	}
);
