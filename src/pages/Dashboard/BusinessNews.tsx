import React, { useEffect, useState } from 'react';
import type { NewsItem } from '../../type/type';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';

// interface BusinessNewsProps {
//   news: NewsItem;
// }

const apikey = import.meta.env.VITE_API_KEY;
const BusinessNews: React.FC = () => {
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  const fetchNews = async () => {
    try {
      const res = await axios.get(
        `https://newsapi.org/v2/top-headlines?category=business&country=us&apiKey=${apikey}`
      );

      const articles: NewsItem[] = res.data.articles.map(
        (item: NewsItem, index: number) => ({
          id: index.toString(),
          title: item.title,
          description: item.description,
          imageUrl: item.urlToImage,
          content: item.content,
          category: 'business',
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
    navigate(`/dashboard/dashboard/news/${id}`, {
      state: { news },
    });
  };

  useEffect(() => {
    fetchNews();
  }, []);
  return (
    <div>
      <h1>World's Business News</h1>
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
          {newsItems.map((news) => (
            <div
              key={news.id}
              style={{
                width: '300px',
                marginBottom: '10px',
                // border: '1px solid #fda',
                // boxShadow: 'rgba(256, 134, 126, 0)',
                height: 'fit-content',
              }}
            >
              <img
                src={news.urlToImage}
                width="300px"
                style={{ objectFit: 'cover' }}
              />
              <h3 style={{ fontSize: '18px' }}>{news.title}</h3>
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

export default BusinessNews;
