exports.up = function (knex) {
    return knex.schema.createTable('ContactList', table => {
        table.increments('id');
        table.string('name', 150).notNullable()
        table.string('email', 150).notNullable();
        table.integer('number', 20).notNullable()
        table.string('comment', 500).notNullable();
    })
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('ContactList')
};