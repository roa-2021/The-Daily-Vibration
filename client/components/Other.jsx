import React, { useState, useEffect } from 'react'
import { getFoodNews,getTechNews,getHealthNews,getBusinessNews,getPoliticsNews } from '../apis/News'


const Other = (props) => {
  // return (
  //   <p>{props.match.params.id}</p>
  // )
  const [News, setNews] = useState([])
  useEffect(() => {
    refreshNews()
  }, [])

  useEffect(()=>{
    refreshNews()
  },[props.match.params.id])
  
  const refreshNews = () => {
      if(props.match.params.id==='food')
      {
      return getFoodNews().then((news) => setNews(news.data))
      }
     else if(props.match.params.id==='health')
      {
      return getHealthNews().then((news) => setNews(news.data))
      }
      else if(props.match.params.id==='politics')
      {
      return getPoliticsNews().then((news) => setNews(news.data))
      }
      else if(props.match.params.id==='business')
      {
      return getBusinessNews().then((news) => setNews(news.data))
      }
      else if(props.match.params.id==='tech')
      {
      return getTechNews().then((news) => setNews(news.data))
      }
  }
  return (
    <div className="container-news">
      <div className="newsFeedContainer">
        {News.map((aNews) => {
          return (
            <div key={aNews.uuid} className="articleContainer">
              <article>
                <div className="news-column__left">
                  <img className="articleImage" src={aNews.image_url} />
                </div>

                <div className="news-column__right">
                  <h2 className="articleTitle">
                    <a href={aNews.url}>{aNews.title}</a>
                  </h2>
                  <p className='articleDate'>Date:{aNews.published_at}</p>
                  <p className='snippet'>Snippet:{aNews.snippet}</p>
                  <p className='source'>Source:{aNews.source}</p>
                  <p className="articleDescription">Description:{aNews.description}</p>
                </div>
              </article>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Other