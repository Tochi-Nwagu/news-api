import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ("./Home.css")

const Home: React.FC = () => {
  const [articles, setArticles] = useState<any[]>([]);
  const navigate = useNavigate();

  
  const fetchHeadlines = async () => {
    try {
      const response = await axios.get("https://newsapi.org/v2/top-headlines?country=us&apikey=ebe5a59b98534ec2b7258518d0a613e4");
      setArticles(response.data.articles);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  };

  useEffect(() => {
    fetchHeadlines();
  }, []);

  return(
    <div  className="Home"     style={{ padding: "20px" }}>
      {articles.map((article, index) => (
        <div key={index} style={{ marginBottom: "30px" }}>
          <h3>{article.title}</h3>
          {article.urlToImage && (
            <img
              src={article.urlToImage}
              alt={article.title}
              style={{ width: "300px", height: "auto", marginBottom: "10px" }}
            />
          )}
          <p>{article.description}</p>
          <button onClick={() => navigate("/register")}>Read More</button>
        </div>
      ))}
    </div>
  );
};

export default Home;










