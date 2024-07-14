import Banner from "../models/bannerModel.js";
import {
	createOne,
	deleteOne,
	getAll,
	getOne,
	updateOne,
} from "./handleFactory.js";

export const createBanner = createOne(Banner);
export const getBanners = getAll(Banner);
export const getBanner = getOne(Banner);
export const deleteBanner = deleteOne(Banner);
export const updateBanner = updateOne(Banner);
