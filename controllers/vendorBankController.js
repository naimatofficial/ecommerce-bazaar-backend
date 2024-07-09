import VendorBank from "../models/vendorBankModel.js";
import {
	createOne,
	deleteOne,
	getAll,
	getOne,
	updateOne,
} from "./handleFactory.js";

export const createVendorBank = createOne(VendorBank);
export const getVendorBanks = getAll(VendorBank);
export const getVendorBank = getOne(VendorBank);
export const deleteVendorBank = deleteOne(VendorBank);
export const updateVendorBank = updateOne(VendorBank);
