import request from 'superagent'

const url = 'https://api.thenewsapi.com/v1/news/top?api_token=ASxRg3pkGB5dMPv7ALh6lpzPxMGgxm8ePBrM84wE&language=en&categories='

export const getNews = () => {
  return request
    .get(`${url}entertainment`)
    .then(response => {
      return response.body
    })
}

export const getFoodNews = () => {
  return request
    .get(`${url}food`)
    .then(response => {
      return response.body
    })
}
export const getTechNews = () => {
  return request
    .get(`${url}tech`)
    .then(response => {
      return response.body
    })
}
export const getHealthNews = () => {
  return request
    .get(`${url}health`)
    .then(response => {
      return response.body
    })
}
export const getBusinessNews = () => {
  return request
    .get(`${url}business`)
    .then(response => {
      return response.body
    })
}
export const getPoliticsNews = () => {
  return request
    .get(`${url}politics`)
    .then(response => {
      return response.body
    })
}
