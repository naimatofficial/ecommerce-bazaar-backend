import Brand from "../models/brandModel.js";
import {
	createOne,
	deleteOne,
	getAll,
	getOne,
	updateOne,
} from "./handleFactory.js";

export const createBrand = createOne(Brand);
export const getBrands = getAll(Brand);
export const getBrand = getOne(Brand);
export const deleteBrand = deleteOne(Brand);
export const updateBrand = updateOne(Brand);
