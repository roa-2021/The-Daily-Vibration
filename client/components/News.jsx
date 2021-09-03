import React, { useState, useEffect } from 'react'
import { getNews } from '../apis/News'

const News = () => {
  const [News, setNews] = useState([])

  useEffect(() => {
    refreshNews()
  }, [])

  const refreshNews = () => {
    getNews().then((news) => setNews(news.data))
  }

  return (
    <div className='container-news'>
      <div className='newsFeedContainer'>
        {News.map((aNews) => {
          return (
            <div key={aNews.uuid} className='articleContainer'>
              <article>
                <div className='news-column__left'>
                  <img className='articleImage' src={aNews.image_url} />
                </div>
                <div className='news-column__right'>
                  <p className='source'>{aNews.source}</p>
                  <a className='articleTitle' href={aNews.url}>{aNews.title}</a>
                  <p className='articleDescription'>{aNews.snippet}</p>
                </div>
              </article>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default News
