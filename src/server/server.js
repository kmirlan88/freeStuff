const express = require('express');
const app = express();
const request = require('request')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require("mongoose");
const PostModel = require("./models/PostModel");
const path = require('path')
const crypto = require('crypto')
const multer = require('multer')
const GridFsStorage = require('multer-gridfs-storage')
const Grid = require('gridfs-stream')

const mongoURI = "mongodb+srv://kmirlan88:plainfish615@cluster0-6zfdu.mongodb.net/mirlan";

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

let port = process.env.PORT || 3000;
app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());


app.get("/getstuff", (req, res) => {
	
	gfs.files.find().toArray((err, files) => {
		if(!files || files.length === 0){
			return res.status(404).json({
				err: "No files exists"
			})
		}
		return res.json(files);
	})
	
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


app.post("/poststuff", upload.single('file'), (req, res) => {
	console.log(req.body);
	const postModel = new PostModel(req.body);
	console.log("req.file")
	console.log(req.file.filename)
	console.log(postModel)
	postModel.file = req.file.filename
	console.log(postModel);

	postModel.save();
	return res.status(201).json(postModel);
});


app.listen(3001, () => {
    console.log('App is listening on port 3001!')
})