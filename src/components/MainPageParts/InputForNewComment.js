import { Button, Input } from "@mui/material"
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export const InputForNewComment = props =>{
    const dispatch = useDispatch();
    const [newComment, setNewComment] = useState({value: ''})
    
    const handlerOnChange = e => {
        setNewComment(()=>{newComment.value = e.target.value;
        return newComment})
    }
    const handlerOnSubmit = e => {
        e.preventDefault();
        dispatch({type: 'ADDING_COMMENT', payload: {value: newComment.value, postId: props.postId}});
        e.target.value='';
    }
    return (<form onSubmit={handlerOnSubmit}>
                <Input placeholder="Введите свой комментарий"
                style={{width: "90%"}}
                onChange={handlerOnChange}/>
                <Button onClick={handlerOnSubmit}>Добавить коммент</Button>
            </form>)
}