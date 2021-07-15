import React, { useEffect, useState } from 'react';
import SkeletonArticle from '../skeletons/SkeletonArticle';

const Articles = () => {
  const [articles, setArticles] = useState(null);
  useEffect(() => {
    setTimeout(async() => {
      try {
        const resp = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await resp.json();
        setArticles(data);
      } catch(err) {
        console.log(err);
      }
    }, 5000);
  }, []);
  return (
    <div className="articles">
      <h2>Articles</h2>
      {articles && articles.map(article => (
        <div className="article" key={article.id}>
          <h3>{article.title}</h3>
          <p>{article.body}</p>
        </div>
      ))}

      {!articles && [1,2,3,4,5].map(key => (
        <SkeletonArticle key={key} theme="light"/>
      ))}
    </div>
  );
}

export default Articles;