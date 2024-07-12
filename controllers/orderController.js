import Order from "../models/orderModel.js";
import catchAsync from "../utils/catchAsync.js";
import { deleteOne, getAll, getOne, updateOne } from "./handleFactory.js";

export const createOrder = catchAsync(async (req, res) => {
	const customer = req.user?._id;

	const newOrder = {
		customer,
		...req.body,
	};

	const doc = await Order.create(newOrder);

	res.status(201).json({
		status: "success",
		doc,
	});
});

export const getOrders = getAll(Order);
export const getOrder = getOne(Order);
export const deleteOrder = deleteOne(Order);
export const updateOrder = updateOne(Order);
