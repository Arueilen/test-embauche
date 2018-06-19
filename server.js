const PORT = 8000;
const HOST = 'localhost';

var mysql = require('mysql'),
    express = require('express'),
    getApi = require('./modules/getApi.js'),
    postApi = require('./modules/postApi.js'),
    bodyParser = require('body-parser'),
    request = require('request'),

    app = express();

app.use(express.static('public'));
app.use(bodyParser.json());

app.get('/', (req, res) =>{
    res.send("les routes de l'api sont : <br>\
        pour voir tout les proprio -> /api <br>\
        pour filtrer -> /api?last_name=propriolastname&id=ownerid&ect.. <br>\
        pour creer un chien -> /post/dog?name=plutot&owner_id=owner_id <br>\
        pour creer un owner -> /post/owner?name=plutot&owner_id=owner_id"
        );
});
app.get('/api', (req, res) => {
    let dogs, owners;
    getApi.ownersApi(req, res)
    .then(o=>{owners = o})
    .then(()=>getApi.dogsApi())
    .then(d=>{dogs = d})
    .then(()=>getApi.apiSetup(owners, dogs))
    .then(result=>res.send(result))
    // res.sendFile('views/search.html', {root: __dirname });
});

app.get('/post/owner', (req, res) => {
    postApi.createOwner(req, res)
    .then(e=>res.send(e))
})

app.get('/post/dog', (req, res) => {
    postApi.createDog(req, res)
    .then(e=>res.send(e))
})

app.listen(PORT, HOST)
console.log('app API running on localhost:8000');
