
exports.up = function (knex) {
    return knex.schema.createTable('blogList', table => {
        table.increments('id');
        table.string('title', 150).notNullable()
        table.string('body', 5000).notNullable();
    })
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('blogList')
};