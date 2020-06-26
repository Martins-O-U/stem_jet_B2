
exports.up = function (knex) {
    return knex.schema.createTable('RegisteredList', table => {
        table.increments('id');
        table.string('name', 150).notNullable()
        table.string('email', 5000).notNullable();
    })
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('RegisteredList')
};