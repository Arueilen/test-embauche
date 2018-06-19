const knex = require('knex')(require('../knexfile'))

module.exports = {
	alldogs : (query) => {
		// call knex to select all digs then return them
		console.log('alldogs');
		return knex.select('id', 'name', 'owner_id', ).from('dog').where(query)
	}
}
