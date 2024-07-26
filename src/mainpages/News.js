import React from 'react'
import './cssf/news.css'

function News() {
  return (
    <div>
      <div className='news-block-body'>
        <div className='news-block1-div everyblock'>
          <div>
            <div><h3>News</h3></div><div><p>lorem ipsum dolor sit amet</p></div>
          </div>
        </div>
        <div className='news-block2-div everyblock'>
          <div><h3>News</h3></div><div><p>lorem ipsum dolor sit amet</p></div>
        </div>
        <div className='news-block34-div everyblock'>
          <div className='news-block3-div '>
            <div><h3>News</h3></div><div><p>lorem ipsum dolor sit amet</p></div>
          </div>
          <div className='news-block4-div'>
            <div>
              <div><h3>News</h3></div><div><p>lorem ipsum dolor sit amet</p></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default News