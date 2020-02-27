const express = require('express');
const app = express();
const request = require('request')
const bodyParser = require('body-parser')
const cors = require('cors')


let port = process.env.PORT || 3000;
app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());

app.route("/poststuff")
    .post((req, res) => {
        console.log(req.body)
        res.redirect("/getstuff");
    })


app.listen(3001, () => {
    console.log('App is listening on port 3001!')
})