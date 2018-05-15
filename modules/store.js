const knex = require('knex')(require('../knexfile'))

module.exports = {
	dog : ({ name, owner_id }) => {
		// call knex to add a dog with name = ${name} and owner_id = ${owner_id} to DB
		return knex('dog').insert({
			name,
			owner_id
		})
	}
}
