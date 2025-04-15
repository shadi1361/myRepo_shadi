import { useEffect, useState } from "react";
import Article from "../../components/article/Article";
import Navbar from "../../components/navbar/Navbar";
import styled from "./home.module.css";
import axios from "axios";
import { Link } from "react-router-dom";
import Loading from "../../components/spinner/Loading";

function Home() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("http://localhost:8000/articles")
      .then((result) => {
        setArticles(result.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className={styled.homeWrapper}>
      <Navbar title="Shadi Blog" />

      <div className="container">
        <h2>Neue Artikel:</h2>

        {isLoading ? (
          <Loading />
        ) : (
          <div className={styled.articles}>
            {articles.map((result) => (
              <Link to={`/article/${result.id}`} key={result.id}>
                <Article article={result} />
              </Link>
            ))}
          </div>
        )}
      </div>


    </div>
  );
}

export default Home;
