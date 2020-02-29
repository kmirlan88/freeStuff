const express = require('express');
const app = express();
const request = require('request')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require("mongoose");
const PostModel = require("./models/PostModel");

const db = mongoose.connect(
	"mongodb+srv://kmirlan88:plainfish615@cluster0-6zfdu.mongodb.net/mirlan",
	{ useNewUrlParser: true, useUnifiedTopology: true }
);


let port = process.env.PORT || 3000;
app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());


app.get("/getstuff", (req, res) => {
	PostModel.find((err, freeStuff) => {
		if (err) {
			return console.log(err);
		}
		return res.json(freeStuff);
	});
});


app.post("/poststuff", (req, res) => {
	console.log(req.body);
	const postModel = new PostModel(req.body.state);
	console.log(postModel);

	postModel.save();
	return res.status(201).json(postModel);
});


app.listen(3001, () => {
    console.log('App is listening on port 3001!')
})