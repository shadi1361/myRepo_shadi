import { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import styled from "./createArticle.module.css";
import Input from "../../components/input/Input";
import TextArea from "../../components/textArea/TextArea";
import axios from "axios";

function CreateArticle() {
  const [article, setArticle] = useState({
    title: "",
    date: "",
    readingTime: "",
    author: "",
    message: "",
    ImageURL: ""
  });

  const handleChangeArticle = (e) => {
    setArticle((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const handleChangeArticleMessage = (e) => {
    setArticle((prevState) => ({
      ...prevState,
      message: e.target.value
    }));
  };

  const handleCreateNewArticle = () => {
    axios.post("http://localhost:8000/articles", {
      id: 9,
      imageUrl: article.imageURL,
      title: article.title,
      readingTime: article.readingTime,
      autor: article.author,
      date: article.date,
      content: article.message
    });
  };

  return (
    <>
      <Navbar title="Shadi Blog" />
      <div className={styled.createArticlePage}>
        <div className="container">
          <h1>Erstellung neues Artikels:</h1>

          <Input
            label="Titel:"
            name="title"
            handleChange={handleChangeArticle}
            type="text"
          />
          <Input label="Datum" name="date" handleChange={handleChangeArticle} />
          <Input
            label="Lesezeit:"
            name="readingTime"
            handleChange={handleChangeArticle}
            type="text"
          />
          <Input
            label="Autor:"
            name="author"
            handleChange={handleChangeArticle}
            type="text"
          />

          <Input
            label="Fotoadresse:"
            name="imageURL"
            handleChange={handleChangeArticle}
            type="text"
          />

          <TextArea label="Notizen" handleChange={handleChangeArticleMessage} />

          <div className="{styled.buttonWrapper}">
            <button onClick={handleCreateNewArticle}>ساخت مقاله</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateArticle;
