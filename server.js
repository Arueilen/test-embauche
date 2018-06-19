
const mysql = require('mysql'),
express = require('express'),
store = require('./modules/store.js'),
select = require('./modules/select.js'),
bodyParser = require('body-parser'),
app = express();

app.use(express.static('public'));
// use bodyparser in req.body...
app.use(bodyParser.json());

app.get('/', (req, res) => {
	res.send("les routes de l'api sont : <br>\
        pour voir tout les proprio -> /owners <br>\
        pour filtrer -> /owners?last_name=propriolastname&id=ownerid&ect.. <br>\
        pour creer un owner -> /createOwner?name=plutot&owner_id=owner_id;"
        );
});
app.get('/owners', (req, res) => {
	select.allowners(req.query).then((e)=>{
		res.send(e);
	});
});


app.post('/createOwner', (req, res) => {
	store.owner({
		// passing props to store owner
		first_name: req.query.first_name,
		last_name: req.query.last_name,
		civility: req.query.civility,
		age: req.query.age
	})
	// store owner being a Promise, on resolve send status 200
	.then(() => (select.allowners(req.query).then((e)=>{
		// res.redirect('/owners');
		console.log('owner created: ', e)
		res.json(e);
	})))
	.catch(function(error) {
		console.log(error)
		res.send(error)
	})
});

app.listen(8080, () => console.log('app owners running on localhost:8080'));