
exports.up = function(knex, Promise) {
	return knex.schema.createTable('owner', function (t) {
		t.increments('id').primary()
		t.string('last_name').notNullable()
		t.string('first_name').notNullable()
		t.string('civility').notNullable()
		t.integer('age').notNullable()
		t.timestamps(false, true)
	})
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('owner')
};
