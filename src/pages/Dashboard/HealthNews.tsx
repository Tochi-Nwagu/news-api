import React, { useEffect, useState } from 'react';
import type { NewsItem } from '../../type/type';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';

const apikey = import.meta.env.VITE_API_KEY;

const HealthNews: React.FC = () => {
  const [newsItem, setNewsItems] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchNews = async () => {
    try {
      const res = await axios.get(
        `https://newsapi.org/v2/top-headlines?category=health&apiKey=${apikey}`
      );

      const articles: NewsItem[] = res.data.articles.map(
        (item: any, index: number) => ({
          id: index.toString(),
          title: item.title,
          description: item.description,
          imageUrl: item.urlToImage,
          content: item.content,
          category: 'health',
        })
      );
      setNewsItems(articles);
      console.log(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleReadMore = (news: NewsItem) => {
    navigate(`/dashboard/dashboard/news/${encodeURIComponent(news.title)}`, {
      state: { news },
    });
  };

  useEffect(() => {
    fetchNews();
  }, []);
  return (
    <div>
      <h1>Health News from across the World</h1>
      {loading ? (
        <Spinner animation="grow" variant="primary" />
      ) : (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            marginLeft: '10px',
          }}
        >
          {newsItem.map((news) => (
            <div
              key={news.id}
              style={{
                width: '300px',
                paddingBottom: '10px',
              }}
            >
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
      )}
    </div>
  );
};

export default HealthNews;
