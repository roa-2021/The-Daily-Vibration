import request from 'superagent'

// export const getComment = () => {
//   return request.get('/api/v1/comment').then((response) => {
//     console.log(response)
//     return response.body
//   })
// }

export const addComment = (formObj) => {
  return request
    .post('/api/v1/comment')
    .send(formObj)
    .then((response) => {
      console.log(response.body)
      // refreshFruit()
      // return null
    })
}
