import React from 'react'

function Blog_article_page({imageUrl, paragraph, btn_text, heading}) {
  return (
    <div className='blog_article_component'>
      <img src={imageUrl} alt="" />
      <h1>{heading}</h1>
      <p>{paragraph}</p>
      <button>{btn_text}</button>
    </div>
  )
}

export default Blog_article_page
