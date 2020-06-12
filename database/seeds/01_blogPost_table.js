
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('blogList').del()
    .then(function () {
      // Inserts seed entries
      return knex('blogList').insert([
        { id: 1, title: 'How I became a Bloger', body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem voluptatem non tenetur est temporibus saepe doloremque asperiores aliquam! Temporibus, aliquam eligendi dolor tenetur itaque perspiciatis doloremque. Veniam recusandae voluptatem quasi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem voluptatem non tenetur est temporibus saepe doloremque asperiores aliquam! Temporibus, aliquam eligendi dolor tenetur itaque perspiciatis doloremque. Veniam recusandae voluptatem quasi." },
        { id: 2, title: 'Never say Never', body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem voluptatem non tenetur est temporibus saepe doloremque asperiores aliquam! Temporibus, aliquam eligendi dolor tenetur itaque perspiciatis doloremque. Veniam recusandae voluptatem quasi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem voluptatem non tenetur est temporibus saepe doloremque asperiores aliquam! Temporibus, aliquam eligendi dolor tenetur itaque perspiciatis doloremque. Veniam recusandae voluptatem quasi." },
        { id: 3, title: 'Be Yourself, Every other person is Taken', body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem voluptatem non tenetur est temporibus saepe doloremque asperiores aliquam! Temporibus, aliquam eligendi dolor tenetur itaque perspiciatis doloremque. Veniam recusandae voluptatem quasi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem voluptatem non tenetur est temporibus saepe doloremque asperiores aliquam! Temporibus, aliquam eligendi dolor tenetur itaque perspiciatis doloremque. Veniam recusandae voluptatem quasi." }
      ]);
    });
};
