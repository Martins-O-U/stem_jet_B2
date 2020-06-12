
exports.up = function (knex) {
    return knex.schema.createTable('blogList', table => {
        table.increments('id');
        table.string('title', 150).notNullable()
        table.string('body').notNullable();
    })
        .createTable('usersCollections', table => {
            table.increments('id');
            table.string('fullName').notNullable();
            table.string('emailAddress').notNullable();
            table.string('locations')
        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('blogList')
};