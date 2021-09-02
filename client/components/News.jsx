import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
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

  return (
    <>
      <ul>
        {News.map(aNews => {
          return (
            <div key={aNews.uuid} className='articleContainer'>

              <div className='articleTitle'><Link to={aNews.url}>{aNews.title}</Link>
              </div>

              <div className='articleDescriptionContainer'>
                <p className='articleDescription'>{aNews.description}</p>
              </div>

              <div className='articleImageContainer'>
                <img className='articleImage' src={aNews.image_url}/>
              </div>

            </div>
          )
        })}
      </ul>
    </>
  )
}

export default News
