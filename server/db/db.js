const knex = require('knex')
const config = require('./knexfile')
const env = process.env.NODE_ENV || 'development'
const connection = knex(config[env])

const getAllComments = (db = connection) => {
  return db('comment')
}

const addComment = (comment, db = connection) => {
  console.log(comment)
  return db('comment').insert(comment)
}

module.exports = {
  getAllComments,
  addComment,
}
