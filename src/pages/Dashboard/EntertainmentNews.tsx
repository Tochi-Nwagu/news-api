import React, { useEffect, useState } from 'react';
import type { NewsItem } from '../../type/type';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import('./Entertainment.css');

const apikey = import.meta.env.VITE_API_KEY;
const EntertainmentNews: React.FC = () => {
  const [newsItem, setNewsItems] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchNews = async () => {
    try {
      const res = await axios.get(
        `https://newsapi.org/v2/top-headlines?category=entertainment&apiKey=${apikey}`
      );
      const articles: NewsItem[] = res.data.articles.map(
        (item: NewsItem, index: number) => ({
          id: index.toString(),
          title: item.title,
          description: item.description,
          urlToImage: item.urlToImage,
          content: item.content,
          category: 'entertainment',
        })
      );
      setNewsItems(articles);
      console.log(res);
    } catch (err) {
      console.error('Something went wrong', err);
    } finally {
      setLoading(false);
    }
  };

  const handleReadMore = (news: NewsItem) => {
    navigate(`/dashboard/news/${news.id}`, {
      state: { news },
    });
  };
  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <div>
      <h1
        className="main-heading"
        style={{ textAlign: 'center', padding: '10px', paddingBottom: '40px' }}
      >
        Entertainment Daily
      </h1>
      {loading ? (
        <Spinner animation="grow" variant="primary" />
      ) : (
        <div className="entertainment">
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
                width="200px"
                style={{ objectFit: 'cover' }}
              />
              <h3>{news.title}</h3>
              <p>{news.content}</p>
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

export default EntertainmentNews;
