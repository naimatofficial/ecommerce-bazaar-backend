import multer, { diskStorage } from "multer";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const storage = diskStorage({
	destination: function (req, file, cb) {
		// const destFolder = path.join(__dirname, "../../uploads", file.fieldname);

		console.log(file);
		const __filename = fileURLToPath(import.meta.url);
		const __dirname = dirname(__filename);
		let destFolder = "";
		if (file.fieldname) {
			destFolder = path.join(__dirname, "../uploads", file.fieldname);
		} else {
			return cb(new Error("Invalid file field"));
		}

		console.log({ destFolder });

		fs.mkdir(destFolder, { recursive: true }, (err) => {
			if (err) return cb(err);
			cb(null, destFolder);
		});
	},
	filename: function (req, file, cb) {
		cb(null, `${Date.now()}-${file.originalname}`);
	},
});

const fileFilter = (req, file, cb) => {
	if (
		file.mimetype == "image/png" ||
		file.mimetype == "image/jpg" ||
		file.mimetype == "image/JPG" ||
		file.mimetype == "image/PNG"
	) {
		cb(null, true);
	} else {
		cb(null, false);
		// cb(new Error("Invalid mime type, only JPEG and PNG are allowed!"), false);
	}
};

const createMulterUpload = (fields) => {
	console.log(fields);
	return multer({
		storage: storage,
		fileFilter: fileFilter,
	}).fields([
		{ name: "image", maxCount: 1 },
		{ name: "identityImage", maxCount: 1 },
	]);
};

export default createMulterUpload;
