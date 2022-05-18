import React  from 'react'
import { useParams } from 'react-router-dom';
import articleContent from '../article-content'
import Articles from '../components/Articles';

const Article = () => {
  const {id} = useParams();
  const article = articleContent.find(article => article.id === id)
  const otherArticle = articleContent.filter(article => article.id !== id)
  if(!article){
    return <h1>Article does not exist.</h1>
  }
  return (
    <div><h1>{id}</h1>
    {
      article.content.map((para, index) => (<p key={index}>{para}</p>))
    }
    <h2>Other Articles</h2>
    <Articles articles={otherArticle}/>
    </div>
  )
}

export default Article;