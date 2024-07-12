import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
	{
		orderId: {
			type: Number,
			required: true,
		},
		orderType: {
			type: String,
			required: true,
		},
		products: [
			{
				type: Schema.Types.ObjectId,
				ref: "Product",
			},
		],
		orderStatus: {
			type: String,
			required: true,
		},
		paymentStatus: {
			type: String,
			enum: ["Paid", "Unpaid"],
			required: true,
			default: "Unpaid",
		},
		paymentMethod: {
			type: String,
			required: true,
		},
		verficationCode: {
			type: Number,
			required: true,
		},
		itemPrice: {
			type: Number,
			required: true,
			default: 0,
		},
		itemDiscount: {
			type: Number,
			required: true,
			default: 0,
		},
		subTotal: {
			type: Number,
			required: true,
			default: 0,
		},
		couponDiscount: {
			type: Number,
			required: true,
			default: 0,
		},
		tax: {
			type: Number,
			required: true,
			default: 0,
		},
		deliveryFee: {
			type: Number,
			required: true,
			default: 0,
		},
		totalAmount: {
			type: Number,
			required: true,
			default: 0,
		},
		shippingMethod: {
			type: String,
			required: true,
		},
		customer: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: "Customer",
		},
		vendor: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: "Vendor",
		},
	},
	{
		timestamps: true,
	}
);

orderSchema.pre(/^find/, function (next) {
	this.populate([
		{
			path: "customer",
			select: "-__v -createdAt -updatedAt",
		},
		{
			path: "products",
			select: "-__v -createdAt -updatedAt",
		},
		{
			path: "vendor",
			select: "-__v -createdAt -updatedAt",
		},
	]);
	next();
});

const Order = mongoose.model("Order", orderSchema);

export default Order;
