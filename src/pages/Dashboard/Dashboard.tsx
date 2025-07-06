import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import type { NewsItem } from '../../type/type';
// import('./Home.css');

const Dashboard: React.FC = () => {
  const [articles, setArticles] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();
  const navigate = useNavigate();

  const fetchHeadlines = async () => {
    try {
      const response = await axios.get(
        'https://newsapi.org/v2/top-headlines?country=us&apikey=ebe5a59b98534ec2b7258518d0a613e4'
      );
      setArticles(response.data.articles);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching news:', error);
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
    fetchHeadlines();
  }, []);

  return (
    <div
      className="Home"
      style={{
        padding: '20px',
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
      }}
    >
      {articles.map((article, index) => (
        <div key={index} style={{ marginBottom: '30px' }}>
          <h3>{article.title}</h3>
          {article.urlToImage && (
            <img
              src={article.urlToImage}
              alt={article.title}
              style={{ width: '300px', height: 'auto', marginBottom: '10px' }}
            />
          )}
          <p>{article.description}</p>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <h3>{article.category}</h3>
            <button onClick={() => handleReadMore(article)}>Read More</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
