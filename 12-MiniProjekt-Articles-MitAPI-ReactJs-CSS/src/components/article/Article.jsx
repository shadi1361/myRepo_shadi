import styled from './article.module.css';

function Article(props) {

    return (
        <div className={styled.articleWrapper}>
            <img src={props.article.imageUrl} alt="" />
            <h3>{props.article.title}</h3>
            <p>Lesezeit {props.article.readingTime} Minutes</p>
            <p className={styled.para}>Autor: {props.article.autor}</p>
        </div>
    );
}
export default Article;
