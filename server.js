const mysql = require('mysql'),
express = require('express'),
store = require('./modules/store.js'),
select = require('./modules/select.js'),
bodyParser = require('body-parser'),

app = express();

app.use(express.static('public'));
// use bodyparser in req.body...
app.use(bodyParser.json());

app.get('/', (req, res)=>{
	res.sendFile('views/ownerForm.html', {root: __dirname });
});
app.get('/owners', (req, res)=>{
	select.allowners(req.query).then((e)=>{
		res.send(e);
	});
});
app.post('/createOwner', (req, res) => {
	store.owner({
		// passing props to store owner
		first_name: req.body.first_name,
		last_name: req.body.last_name,
		civility: req.body.civility,
		age: req.body.age
	})
	// store owner being a Promise, on resolve send status 200
	.then(() => (select.allowners(req.query).then((e)=>{
		// res.redirect('/owners');
		res.json(e);
	})))
});

app.listen(8000, ()=>console.log('app running on localhost:8000'));