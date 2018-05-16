const knex = require('knex')(require('../knexfile'))

module.exports = {
	allowners : (query) => {
		// call knex to select all digs then return them
		return knex.select('id', 'last_name', 'first_name', 'civility', 'age', ).from('owner').where(query)
	}
}
