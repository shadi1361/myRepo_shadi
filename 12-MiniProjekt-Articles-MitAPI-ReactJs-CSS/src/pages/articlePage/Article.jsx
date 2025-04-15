import Navbar from "../../components/navbar/Navbar";
import styled from "./articlePage.module.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../../components/spinner/Loading";

function ArticlePage() {
  const [article, setArticle] = useState({});
  const params = useParams();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`http://localhost:8000/articles/${params.id}`)
      .then((result) => {
        setArticle(result.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <Navbar title="Shadi Blog" />
      <div className={styled.articleWrapper}>
        <div className="container">
          {isLoading ? (
            <Loading />
          ) : (
            <>
              <h1>{article.title}</h1>
              <div className={styled.articleInfo}>
                <span>Datum:{article.date} </span>
                <span>Autor:{article.autor} </span>
                <span>Lesezeit:{article.readingTime} Minuten</span>
              </div>

              <img src={article.imageUrl} alt="" />
              <p>{article.content}</p>
            </>
          )}
        </div>
      </div>


    </>
  );
}

export default ArticlePage;
