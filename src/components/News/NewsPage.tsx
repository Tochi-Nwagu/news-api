//import React from 'react';
import type { NewsItem } from '../../type/type';
import { useLocation, useParams } from 'react-router-dom';

const NewsPage = () => {
  const location = useLocation();
  const { id } = useParams();
  const news = location.state?.news as NewsItem;

  if (!news) return <p>News not found</p>;
  return (
    <div>
      <h3>{news.category}</h3>
      <img src={news.imageUrl} />
      <h3>{news.title}</h3>
      <p>{news.description}</p>
      <p>{news.content}</p>
    </div>
  );
};

export default NewsPage;
