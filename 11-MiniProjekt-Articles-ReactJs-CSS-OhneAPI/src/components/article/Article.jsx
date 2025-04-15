import styled from "./article.module.css";
import img6 from "./../../assets/images/img6.jpg"
function Article(props) {//console.log(props);oder console.log(props.data);oder console.log(props.data.title);میشه پراپرتیاروجدا داد    
    console.log(props.article);

   return(
        <div className={styled.articleWrapper}>   
            <img src={props.article.imageUrl} />
            <h3>{props.article.title}</h3>
            <p>Lesezeit {props.article.readingTime} Minuten</p>
            <p className={styled.para}>Autor: {props.article.autor}</p>
        </div>
    );
}
export default Article;

