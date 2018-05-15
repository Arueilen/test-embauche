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
	res.sendFile('views/dogForm.html', {root: __dirname });
});
app.get('/dogs', (req, res)=>{
	select.alldogs().then((e)=>{
		res.send(e);
	});
});
app.post('/createDog', (req, res) => {
	store.dog({
		// passing props name to store dog
		name: req.body.name,
		// passing props owner_id
		owner_id: req.body.owner_id
	})
	// store dog being a Promise, on resolve send status 200
	.then(() => res.sendStatus(200))
})

app.listen(8000, ()=>console.log('app running on localhost:8000'));