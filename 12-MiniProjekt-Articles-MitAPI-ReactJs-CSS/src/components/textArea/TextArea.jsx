import styled from './textArae.module.css';

function TextArea(props){
    return(
        <div className ={styled.textAreaWrapper}>
            <label>{props.label} </label>
            <textarea onChange={props.handleChange}></textarea>
        </div>
    )
}

export default TextArea;
