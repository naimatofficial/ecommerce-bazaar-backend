import SubSubCategory from "../models/subSubCategoryModel.js";
import catchAsync from "../utils/catchAsync.js";
import {
	createOne,
	deleteOne,
	getAll,
	getOne,
	updateOne,
} from "./handleFactory.js";

export const createSubSubCategory = createOne(SubSubCategory);
export const getSubSubCategories = getAll(SubSubCategory);
export const getSubSubCategory = getOne(SubSubCategory);
export const deleteSubSubCategory = deleteOne(SubSubCategory);
export const updateSubSubCategory = updateOne(SubSubCategory);

export const getSubSubCategoriesFromSubCategories = catchAsync(
	async (req, res, next) => {
		const { subCategory } = req.params;
		const doc = await SubSubCategory.find({ subCategory });

		res.status(200).json({
			status: "success",
			results: doc?.length,
			data: doc,
		});
	}
);
