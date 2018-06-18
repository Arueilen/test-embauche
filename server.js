const PORT = 8000;
const HOST = 'localhost';

var mysql = require('mysql'),
    express = require('express'),
    select = require('./modules/select.js'),
    bodyParser = require('body-parser'),
    request = require('request'),

    app = express();



app.use(express.static('public'));
// use bodyparser in req.body...
app.use(bodyParser.json());

app.get('/', (req, res) =>{
    select.dogsApi(req, res)
    .then(e=>{
        res.send(e);
    })
    // res.sendFile('views/search.html', {root: __dirname });
});
app.get('/closeSearch', (req, res)=>{
    // call closeSearch 
    select.closeSearch(req.query)
    .then(e=>{
        select.SearchDog(e)
        .then(r=>{
            res.send(r);
        })
    });
});
app.get('/openSearch', (req, res)=>{
    select.openSearch(req.query)
    .then(e=>{
        select.SearchDog(e)
        .then(r=>{
            res.send(r);
        })
    });
});


app.listen(PORT, HOST)
console.log('app API running on localhost:8000');
