require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require("mongoose");
const PostModel = require("./models/PostModel");
const path = require('path')
const crypto = require('crypto')
const multer = require('multer')
const GridFsStorage = require('multer-gridfs-storage')
const Grid = require('gridfs-stream')
const axios = require("axios");

const mongoURI = `mongodb+srv://${process.env.MONGODB}@cluster0-6zfdu.mongodb.net/mirlan`;

const geocoder = "https://maps.googleapis.com/maps/api/geocode/json?"

const port = process.env.PORT || 3001;

mongoose.connect(
	mongoURI,
	{ useUnifiedTopology: true, useNewUrlParser: true }
);
let gfs;

mongoose.connection
	.once('open', () => {
	gfs = Grid(mongoose.connection.db, mongoose.mongo)
	gfs.collection('uploads')
})


const storage = new GridFsStorage({
	url: mongoURI,
	file: (req, file) => {
		return new Promise((resolve, reject) => {
			crypto.randomBytes(16, (err, buf) => {
				if (err) {
					return reject(err);
				}
				const filename = buf.toString("hex") + path.extname(file.originalname);
				const fileInfo = {
					filename: filename,
					bucketName: "uploads"
				};
				resolve(fileInfo);
			});
		});
	}
});
const upload = multer({ storage });

app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'frontend/build')))


app.get("/getstufff", (req, res) => {

	PostModel.find((err, freeStuff) => {
		if (err) {
			return console.log(err);
		}
		return res.json(freeStuff);
	});
});

app.get("/getcomments", (req, res) => {
	PostModel.findById(req.query._id, (err, stuff) => {
		if (err) {
			return console.log(err);
		}
		return res.json(stuff);
	});
});

app.get("/image/:filename", (req, res) => {

	gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
		if (!file || file.length === 0) {
			return res.status(404).json({
				err: "No files exists"
			});
		}
		const readstream = gfs.createReadStream(file.filename);
		readstream.pipe(res);
	})
})

app.get("/stuff/:stuffid", (req, res) => {
	PostModel.findById(req.params.stuffid, (err, stuff) => {
		if (err) {
			return console.log(err);
		}
		return res.json(stuff);
	});
});


app.post("/poststuff", upload.single('file'), (req, res) => {
	const postModel = new PostModel(req.body);
	postModel.file = req.file.filename
	if (postModel.street == "null"){
		postModel.street = ""
	}
	if (postModel.street2 == "null") {
		postModel.street2 = "";
	}
	axios
		.get(geocoder, {
			params: {
				key: process.env.GEOCODER_API_KEY,
				address: `${postModel.street}, ${postModel.street2}, ${postModel.zip}`
			}
		})
		.then(function(response) {
			console.log(response.data.results[0].geometry.location.lat);
			console.log(response.data.results[0].geometry.location.lng);
			postModel.lat = response.data.results[0].geometry.location.lat;
			postModel.lng = response.data.results[0].geometry.location.lng;
			postModel.save();
			return res.status(201).json(postModel);
		})
		.catch(function(error) {
			console.log(error);
		});
});

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname + "/frontend/build/index.html"));
});

app.post("/comment", (req, res) => {
	const postModel = new PostModel();
	console.log(req.body)
	PostModel.findByIdAndUpdate(req.body.id, {$push: {comments: req.body.text}}, (err, stuff) => {
		if (err) {
			return console.log(err);
		}
		return res.status(201).json(postModel);
	});
	
});

app.listen(port, () => {
	console.log(`App is listening on port ${port}`);
});