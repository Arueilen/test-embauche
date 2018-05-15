const knex = require('knex')(require('../knexfile'))

module.exports = {
	alldogs : () => {
		// call knex to select all digs then return them
		return knex.select('name', 'owner_id').from('dog')
	}
}
