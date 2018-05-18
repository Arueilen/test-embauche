var mysql = require('mysql'),
    express = require('express'),
    select = require('./modules/select.js'),
    bodyParser = require('body-parser'),

    app = express();

app.use(express.static('public'));
// use bodyparser in req.body...
app.use(bodyParser.json());

app.get('/', (req, res) =>{
    // send an html form to send request to api (not functional, but the API is ok)
    res.sendFile('views/search.html', {root: __dirname });
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
app.listen(8000, ()=>console.log('app running on localhost:8000'));
