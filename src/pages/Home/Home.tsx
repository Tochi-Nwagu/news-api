import React, { useEffect, useState } from 'react';
import type { NewsItem } from '../../type/type';
import axios from 'axios';
import { Link } from 'react-router-dom';
import('./Home.css');

interface HomeProps {
  news: NewsItem;
}

const apikey = import.meta.env.VITE_API_KEY;

const Home: React.FC<HomeProps> = () => {
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);

  const fetchNews = async () => {
    try {
      const res = await axios(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apikey}`
      );

      const articles: NewsItem[] = res.data.articles.map(
        (item: any, index: number) => ({
          id: index.toString(), // if no id, use index or create uuid
          title: item.title,
          description: item.description,
          imageUrl: item.urlToImage,
          content: item.content,
          category: 'general', // NewsAPI doesn't return category per article
        })
      );
      setNewsItems(articles);
      console.log(res);
    } catch (err) {
      console.error('Something went wrong', err);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <div className="home">
      {newsItems.map((news) => (
        <div key={news.id} className="top-stories">
          <h3>{news.category}</h3>
          <img src={news.imageUrl} width="200px" />
          <h3>{news.title}</h3>
          <p>{news.description}</p>
          <Link to={'/login'}>
            <button>Read More</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Home;
