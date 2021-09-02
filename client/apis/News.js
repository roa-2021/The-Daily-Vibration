import request from 'superagent'

export const getNews = () => {
  return request
  .get('https://api.thenewsapi.com/v1/news/similar/cc11e3ab-ced0-4a42-9146-e426505e2e67?api_token=ll6ZhwclKl4eBuIDzNdIOZlIxG2WL7azbPyyX8gG&language=en&published_on=2021-09-02')
    .then(response => {
      return response.body
    })
}
