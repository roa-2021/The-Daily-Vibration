import React, { useState, useEffect } from 'react'
// import {Link} from 'react-router-dom'
import { getNews } from '../apis/News'

const News = () => {

  const [News, setNews] = useState([])

  useEffect(() => {
    refreshNews()
  }, [])

  const refreshNews = () => {
    getNews()
      .then(news => setNews(news.data))
  }

  return(
    <>
      <ul>
        {News.map(aNews => {
          return (
          <>
          <li key={aNews.uuid}>{aNews.title}</li>    
          </>
          )
        })}
      </ul>
    </>
)
}

export default News
