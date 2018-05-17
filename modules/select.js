const knex_owners = require('knex')(require('../knex/knexfile.owners')),
knex_dogs = require('knex')(require('../knex/knexfile.dogs'));

module.exports = {
	closeSearchDog : (query) => {
		// call knex to select all dogs where owners_id is the selected owner's id
		return knex_dogs.select('id', 'name', 'owner_id').from('dog').where(query);
	},
	openSearch : (query) => {
		// select all owners where query's ok
		return knex_owners.select('id', 'last_name', 'first_name', 'civility', 'age').from('owner').where(query);
	},
	closeSearch : (query) => {
		// select all owners where query's ok
		return knex_owners.select('id', 'last_name', 'first_name', 'civility', 'age').from('owner').where(query)
	}
}
