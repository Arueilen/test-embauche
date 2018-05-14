
exports.up = function(knex, Promise) {
	return knex.schema.createTable('dog', function (t) {
		t.increments('id').primary()
		t.string('name').notNullable()
		t.integer('owner_id').notNullable()
		t.timestamps(false, true)
	})
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('dog')
};
