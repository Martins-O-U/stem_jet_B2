
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('ContactList').del()
    .then(function () {
      // Inserts seed entries
      return knex('ContactList').insert([
        { id: 1, name: 'John Wood', email: "johnwood@email.com", number: 1234567890, comment: "I have a talk show and would like to interview your team" },
      ]);
    });
};
