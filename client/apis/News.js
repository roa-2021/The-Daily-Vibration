import request from 'superagent'

export const getNews = () => {
  return request
    .get('https://api.thenewsapi.com/v1/news/top?api_token=8krBgJIkri7Uzuu6uDvNuPIGyRe3G5ErXQ6bk38l&language=en&categories=entertainment')
    .then(response => {
      return response.body
    })
}
