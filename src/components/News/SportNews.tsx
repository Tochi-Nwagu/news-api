import React, { useEffect, useState } from 'react';
import type { NewsItem } from '../../type/type';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const apiKey = import.meta.env.VITE_API_KEY;
const SportNews: React.FC = () => {
  const [newsItem, setNewsItems] = useState<NewsItem[]>([]);
  const navigate = useNavigate();

  const fetchNews = async () => {
    try {
      const res = await axios.get(
        `https://newsapi.org/v2/top-headlines?category=sports&apiKey=${apiKey}`
      );
      const articles: NewsItem[] = res.data.articles.map(
        (item: any, index: number) => ({
          id: index.toString(),
          title: item.title,
          description: item.description,
          imageUrl: item.urlToImage,
          content: item.content,
          category: 'sports',
        })
      );
      setNewsItems(articles);
      console.log(res);
    } catch (err) {
      console.error('Something went wrong', err);
    }
  };
  const handleReadMore = (news: NewsItem) => {
    navigate(`/news/${encodeURIComponent(news.title)}`, {
      state: { news },
    });
  };
  useEffect(() => {
    fetchNews();
  }, []);
  return (
    <div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'Repeat(5, 1fr)',
          gap: '10px',
        }}
      >
        {newsItem.map((news) => (
          <div key={news.id} style={{ width: '300px', paddingBottom: '10px' }}>
            <img
              src={news.imageUrl}
              width="300px"
              style={{ objectFit: 'cover' }}
            />
            <h3>{news.title}</h3>
            <p>{news.description}</p>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <h3>{news.category}</h3>
              <button onClick={() => handleReadMore(news)}>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SportNews;
