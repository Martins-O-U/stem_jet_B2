
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('usersCollection').del()
    .then(function () {
      // Inserts seed entries
      return knex('usersCollection').insert([
        {
          id: 1,
          fullName: 'James Brown',
          emailAddress: 'james@mail.com',
          locations: 'Here, Earth',
        },
        {
          id: 2,
          fullName: 'Sweet Talks',
          emailAddress: 'sweet@mail.com',
          locations: 'lagos, Nigeria',
        }
      ]);
    });
};
