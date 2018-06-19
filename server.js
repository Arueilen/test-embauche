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
	res.send("les routes de l'api sont : <br>\
		pour voir tout les chiens -> /dogs <br>\
		pour filtrer -> /dogs?name=nomduchien&owner_id=owner_id <br>\
		pour creer un chien -> /createDog?name=nomduchien&owner_id=owner_id"
		);
});
app.get('/dogs', (req, res)=>{
	select.alldogs(req.query).then((e)=>{
		res.send(e);
	});
});
app.post('/createDog', (req, res) => {
	store.dog({
		// passing props name to store dog
		name: req.query.name,
		// passing props owner_id
		owner_id: req.query.owner_id
	})
	// store dog being a Promise, on resolve send status 200
	// .then((dog) => {
	// 	console.log("dog created");
	// 	res.json(dog);
	// })
	.then(() => (
		select.alldogs(req.query)
		.then((dog)=>{
			console.log('dog created: ', dog)
			res.json(dog);
		})
	))
	.catch(function(error) {
		res.send(error)
	})
})

app.listen(8008, ()=>console.log('app dogs running on localhost:8008'));