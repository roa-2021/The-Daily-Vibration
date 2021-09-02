exports.up = (knex) => {
  return knex.schema.createTable('comments', (t) => {
    t.increments('id').primary()
    t.integer('article_id')
    t.string('name')
    t.string('comment')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('comments')
}
