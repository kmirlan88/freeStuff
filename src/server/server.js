const express = require('express');
const app = express();
const request = require('request')
const bodyParser = require('body-parser')


let port = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({extended:true}))

let url = `https://api.themoviedb.org/3/search/movie?api_key=4de3f13a4cdd05831b95a97d3b3e2da6&query=`

app.get('/', (req, res) => {
    res.send('I am root route!');
})

app.get('/search/:item', (req, res) => {
    let item = req.params.item;
    url += item
    request(url, (err, resp, body) => {
        if(!err && resp.statusCode == 200){
            let data = JSON.parse(body);
            res.json(data)
        }
        else{
            let data = JSON.parse(body);
            res.send(data.status_message)
        }
    })
})

app.post('/search', (req, res) => {
    let searchTerm = req.body.title;
    
})

app.listen(3000, () => {
    console.log('App is listening on port 3000!')
})