import React from 'react'

function LatestArticlesBlogs({imageUrl, BlogsImageHeading,BlogsParagraph}) {
  return (
    <div>
        <div className='latest_article'>
            <img src={imageUrl} alt="" />
            <h3>{BlogsImageHeading}</h3>
            <p>{BlogsParagraph}</p>
        </div>
      </div>
  )
}

export default LatestArticlesBlogs
