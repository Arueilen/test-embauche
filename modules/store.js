const knex = require('knex')(require('../knexfile'))

module.exports = {
	owner : ({ last_name, first_name, civility, age }) => {
		// call knex to add a dog with name = ${name} and owner_id = ${owner_id} to DB
		return knex('owner').insert({
			last_name,
			first_name,
			civility,
			age
		})
	}
}
