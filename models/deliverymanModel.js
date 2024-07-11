import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";

const reviewSchema = mongoose.Schema(
	{
		name: { type: String, required: true },
		rating: { type: Number, required: true },
		comment: { type: String, required: true },
		deliveryman: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: "Deliveryman",
		},
	},
	{
		timestamps: true,
	}
);

const deliverymanSchema = new mongoose.Schema(
	{
		firstName: {
			type: String,
			required: [true, "Please tell us your name."],
		},
		lastName: {
			type: String,
		},
		email: {
			type: String,
			required: [true, "Please provide your email address."],
			unique: true,
			lowercase: true,
			validate: [validator.isEmail, "Please provide a valid email address."],
		},
		phoneNumber: {
			type: String,
			unique: true,
		},
		identityType: {
			type: String,
			required: [true, "Please provide identity type."],
			unique: true,
		},
		identityNumber: {
			type: String,
			required: [true, "Please provide identity number."],
		},
		identityImage: {
			type: String,
			// required: [true, 'Please provide identity image.']
		},
		address: {
			type: String,
			required: [true, "Please provide address."],
		},
		image: {
			type: String,
			// required: [true, 'Please provide deliveryman image .']
		},
		role: {
			type: String,
			enum: ["deliveryman"],
			default: "deliveryman",
		},
		password: {
			type: String,
			required: [true, "Please provide a password."],
			minlength: 8,
			select: false,
		},
		status: {
			type: String,
			enum: ["active", "inactive"],
			default: "inactive",
		},
		reviews: [reviewSchema],
		rating: {
			type: Number,
			default: 0,
			set: (val) => (Math.round(val * 10) / 10).toFixed(1),
		},
	},
	{
		timestamps: true,
	}
);

deliverymanSchema.methods.correctPassword = async function (
	candidatePassword,
	deliverymanPassword
) {
	return await bcrypt.compare(candidatePassword, deliverymanPassword);
};

deliverymanSchema.pre("save", async function (next) {
	// Only work when the password is not modified
	if (!this.isModified("password")) return next();

	// Hash the password using cost of 12
	this.password = await bcrypt.hash(this.password, 12);

	next();
});

const Deliveryman = mongoose.model("Deliveryman", deliverymanSchema);

export default Deliveryman;
