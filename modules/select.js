const knex_owners = require('knex')(require('../knex/knexfile.owners')),
knex_dogs = require('knex')(require('../knex/knexfile.dogs'));

module.exports = {
	SearchDog : (owners) => {
		return new Promise((resolve, reject)=>{

			// get all owners' ids
			let owner_ids = [];
			owners.map(e=>{
				owner_ids.push(e.id);
			});

			// call knex to select all dogs where owner_id is in the selected owner_ids
			knex_dogs.select('id', 'name', 'owner_id').from('dog').whereIn('owner_id', owner_ids)
			.then(dogs=>{
				owners.map(owner=>{
					owner.dogs = dogs.filter(dog=> dog.owner_id == owner.id)
				});
				resolve(owners);
			})
		})
	},
	openSearch : (query) => {

		queryKeys = Object.keys(query);

		// select all owners
		r = knex_owners.select('id', 'last_name', 'first_name', 'civility', 'age').from('owner')

		queryKeys.map(e=>{
			// for each query search all owners where a collumn is named as the key and set as the value
			r = r.orWhere(e, query[e]);
		})

		return r;
	},
	closeSearch : (query) => {
		// select all owners where query's exact
		return knex_owners.select('id', 'last_name', 'first_name', 'civility', 'age').from('owner').where(query);
	}
}
