import React, { useEffect, useState } from 'react';
import type { NewsItem } from '../../type/type';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';

const apiKey = import.meta.env.VITE_API_KEY;
const TechnologyNews: React.FC = () => {
  const [newsItem, setNewsItems] = useState<NewsItem[]>([]);
  const [loading, seLoading] = useState(true);
  const navigate = useNavigate();

  const fetchNews = async () => {
    try {
      const res = await axios.get(
        `https://newsapi.org/v2/top-headlines?category=technology&apiKey=${apiKey}`
      );

      const articles: NewsItem[] = res.data.articles.map(
        (item: NewsItem, index: number) => ({
          id: index.toString(),
          title: item.title,
          description: item.description,
          imageUrl: item.urlToImage,
          content: item.content,
          category: 'technology',
        })
      );
      setNewsItems(articles);
      console.log(res.data);
    } catch (err) {
      console.error('Something went wrong', err);
    } finally {
      seLoading(false);
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
      <h1>Technology Today</h1>
      {loading ? (
        <Spinner animation="grow" variant="primary" />
      ) : (
        <div
          style={{
            display: 'grid',
            gap: '20px',
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
                src={news.urlToImage}
                width="300px"
                style={{ objectFit: 'cover' }}
              />
              <h3>{news.title}</h3>
              <p>{news.description}</p>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h5>{news.category}</h5>
                <button onClick={() => handleReadMore(news)}>Read More</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TechnologyNews;
