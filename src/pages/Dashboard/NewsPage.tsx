//import React from 'react';
import type { NewsItem } from '../../type/type';
import { useLocation } from 'react-router-dom';

const NewsPage = () => {
  const location = useLocation();

  const news = location.state?.news as NewsItem;

  if (!news) return <p>News not found</p>;
  return (
    <div style={{ width: '800px', height: '95vh', marginBottom: '10px' }}>
      <h5>{news.category}</h5>
      <img src={news.urlToImage} width={'900px'} />
      <h3>{news.title}</h3>
      <p>{news.description}</p>
      <p>{news.content}</p>
    </div>
  );
};

export default NewsPage;
