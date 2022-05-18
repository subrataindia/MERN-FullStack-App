import React from 'react'
import { Link } from 'react-router-dom'

const Articles = ({articles}) => {
  return (
    <div>{
        articles.map((article, index) => (
          <Link style={{textDecoration: 'none'}} key={index} to={`/article/${article.id}`} ><h3>{article.title}</h3>
          <p>{article.content[0].substring(0,250)}...</p></Link>
        ))
      }</div>
  )
}

export default Articles;