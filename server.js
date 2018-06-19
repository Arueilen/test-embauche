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
	select.alldogs(req.query).then((e)=>{
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
	.then((dogs) => {
		console.log(dogs);
		res.json(dogs);
	})
})

app.listen(8008, ()=>console.log('app dogs running on localhost:8008'));