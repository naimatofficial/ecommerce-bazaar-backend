import mongoose from "mongoose";

const bannerSchema = new mongoose.Schema(
	{
		bannerType: {
			type: String,
			required: [true, "Please provide banner."],
		},
		url: {
			type: String,
			required: [true, "Please provide banner url."],
			unique: true,
		},
		resourceType: {
			type: String,
			required: [true, "Please provide resource type."],
		},

		image: {
			type: String,
			required: [true, "Please provide logo."],
		},
		product: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Product",
			required: true,
		},
		published: {
			type: Boolean,
			default: false,
		},
	},
	{
		timestamps: true,
	}
);

const Banner = mongoose.model("Banner", bannerSchema);

export default Banner;
