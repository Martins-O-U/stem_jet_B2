
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('usersList').del()
    .then(function () {
      // Inserts seed entries
      return knex('usersList').insert([
        {
          full_name: 'James Brown',
          email_address: 'james@mail.com',
          location: 'Here, Earth',
        },
        {
          full_name: 'Sweet Talks',
          email_address: 'sweet@mail.com',
          location: 'lagos, Nigeria',
        }
      ]);
    });
};
