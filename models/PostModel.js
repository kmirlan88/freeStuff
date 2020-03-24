const mongoose = require("mongoose");

const { Schema } = mongoose;

const postModel = new Schema(
	{
		itemName: String,
		street: String,
		street2: String,
		state: String,
		city: String,
		img: String,
		descr: String,
		zip: String,
		file: Object,
		lng: Number,
		lat: Number
	},
	{ collection: "freeStuff" }
);

module.exports = mongoose.model("PostModel", postModel);
