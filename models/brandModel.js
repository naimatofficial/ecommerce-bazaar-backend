import mongoose from "mongoose";
import slugify from "slugify";

const brandSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, "Please provide brand."],
			unique: true,
		},
		image: {
			type: String,
			required: [true, "Please provide brand image."],
		},
		status: {
			type: String,
			enum: ["active", "inactive"],
			default: "active",
		},
	},
	{
		toJSON: { virtuals: true },
		toObject: { virtuals: true },
	},
	{
		timestamps: true,
	}
);

brandSchema.virtual("slug").get(function () {
	return slugify(this.name, { lower: true });
});

const Brand = mongoose.model("Brand", brandSchema);

export default Brand;
