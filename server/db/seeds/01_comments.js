exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('comments')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('comments').insert([
        { id: 1, article_id: 1, name: 'Max', comment: 'This Article is good!' },
        { id: 2, article_id: 2, name: 'Phil', comment: 'This Article is bad!' },
        { id: 3, article_id: 3, name: 'Kao', comment: 'This news rules!' },
        {
          id: 4,
          article_id: 4,
          name: 'Kang',
          comment: 'Wow what a complete waste of time!',
        },
      ])
    })
}
