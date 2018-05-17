const mysql = require('mysql'),
express = require('express'),
select = require('./modules/select.js'),
bodyParser = require('body-parser'),

app = express();

app.use(express.static('public'));
// use bodyparser in req.body...
app.use(bodyParser.json());

app.get('/', (req, res)=>{
	res.sendFile('views/search.html', {root: __dirname });
});
app.get('/closeSearch', (req, res)=>{
	select.closeSearch(req.query)
	.then((e)=>{
		res.send(e);
	});
});
app.get('/openSearch', (req, res)=>{
	select.openSearch(req.query)
	.then((e)=>{
		res.send(e);
	});
});
app.listen(8000, ()=>console.log('app running on localhost:8000'));