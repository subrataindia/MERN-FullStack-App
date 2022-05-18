import React from 'react'
import articleContent from '../article-content'
import Articles  from '../components/Articles'

const ArticlesList = () => {
  return (
    <div><h1>Articles</h1>
    <Articles articles={articleContent} />
    </div>
  )
}

export default ArticlesList