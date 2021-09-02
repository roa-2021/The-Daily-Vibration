import request from 'superagent'

export const getNews = () => {
  return request
    .get('https://api.thenewsapi.com/v1/news/top?api_token=P8bP4pTUuzlhUkUSOVKoBoQpFQMWmBQuKzFOiY7v&language=en&categories=entertainment')
    .then(response => {
      return response.body
    })
}
