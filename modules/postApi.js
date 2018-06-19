request = require('request')

module.exports = {
	createOwner : (req, res) => {
		return new Promise((resolve, reject) => {
			query = req.url.split('?')[1];
			// if a query exist add it to the url
			request.post("http://localhost:8080/createOwner"+(query?"?"+query:''), function(error, response, body){
				if(!error){
					resolve(body);
				}else{
					resolve(error);
				}
			})
		})
	},
	createDog : (req, res) => {
		return new Promise((resolve, reject) => {
			query = req.url.split('?')[1];
			request.post("http://localhost:8008/createDog"+(query?"?"+query:''), function(error, response, body){
			// get the dogs server and resolve the response's body
				if(!error){
					resolve(body);
				}else{
					resolve(error);
				}
			})
		})
	}
}
