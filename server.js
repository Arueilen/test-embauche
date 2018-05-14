const mysql = require('mysql'),
express = require('express'),
storeDog = require('./modules/storeDog'),
bodyParser = require('body-parser'),

app = express();

app.use(express.static('public'));
app.use(bodyParser.json());
app.get('/', (req, res)=>{
	res.sendFile('views/dogForm.html', {root: __dirname });
});
app.post('/createDog', (req, res) => {
	storeDog({
		name: req.body.name,
		owner_id: req.body.owner_id
  	})
  	.then(() => res.sendStatus(200))
})

app.listen(8000, ()=>console.log('app running on localhost:8000'));