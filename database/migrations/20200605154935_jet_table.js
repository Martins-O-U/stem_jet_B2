
exports.up = function (knex) {
    return knex.schema.createTable('usersList', users => {
        users.increments('id');
        users.string('full_name', 128).notNullable()
        users.string('email_address', 128).notNullable();
        users.string('location', 150)
    })
        .createTable('blogList', blog => {
            blog.increments("id");
            blog.string('title', 150).notNullable()
            blog.string('body').notNullable();
            blog.timestamps('created_at');
        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('usersList')
        .dropTableIfExists('blogList')
};