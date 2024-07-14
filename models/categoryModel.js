import mongoose from "mongoose";
import slugify from "slugify";

const categorySchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, "Please provide category name."],
			unique: true,
		},
		image: {
			type: String,
			required: [true, "Please provide logo."],
		},
		status: {
			type: String,
			enum: ["active", "inactive"],
			default: "active",
		},
		priority: Number,
	},
	{
		toJSON: { virtuals: true },
		toObject: { virtuals: true },
	},
	{
		timestamps: true,
	}
);

categorySchema.virtual("slug").get(function () {
	return slugify(this.name, { lower: true });
});

const Category = mongoose.model("Category", categorySchema);

export default Category;
