const express = require('express')
const router = express.Router()

const db = require('../db/db')

router.get('/', (req, res) => {
  return db
    .getAllComments()
    .then((comment) => {
      return res.json(comment)
    })
    .catch((err) => {
      console.log(err.message)
      return res.status(500).send('500 error :(')
    })
})

router.post('/', (req, res) => {
  const newComment = req.body
  console.log(newComment)
  res.json({ greeting: 'hi' })
  // return db.addComment(newComment).then((ids) => {
  //   return res.send('ok')
  //   // return db.getCommentById(ids[0])
  //   //   .then(comment => {
  //   //     return res.json(comment)
  //   //   })
  // })
})

module.exports = router
