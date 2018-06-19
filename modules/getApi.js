request = require('request')

module.exports = {
	apiSetup : (owners, dogs) => {
		return new Promise((resolve, reject) => {
			if(dogs.errno || owners.errno){
				// if error in dogs or in owners
				err = {
					'dogsErr':dogs.errno?dogs:null,
					'ownersErr':owners.errno?owners:null,
				}
				// create err containing the errors
				resolve(err);
			}
			else{
				owners = JSON.parse(owners);
				dogs = JSON.parse(dogs);

				let result = owners.map(owner=>{
					return {
							...owner,
							dogs: dogs.filter(dog=>dog.owner_id==owner.id),
						}
				})
				resolve(result.length>0?result:'aucun résultat');
				// if result longer then 0 resolve result else resolve 'aucun résultat'
			}
		})
	},
	ownersApi : (req, res) => {
		return new Promise((resolve, reject) => {
			query = req.url.split('?')[1];
			// if a query exist add it to the url
			request("http://localhost:8080/owners"+(query?"?"+query:''), function(error, response, body){
				if(!error){
					resolve(body);
					// get the owners server and resolve the response's body
				}else{
					resolve(error);
					// resolve the error
				}
			})
		})
	},
	dogsApi : (req, res) => {
		return new Promise((resolve, reject) => {
			request("http://localhost:8008/dogs", function(error, response, body){
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
