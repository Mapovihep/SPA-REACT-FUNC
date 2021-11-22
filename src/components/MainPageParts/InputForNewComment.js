import { Button, Card, CardActions, CardContent, FormControl, IconButton, Input, List, ListItem, ListItemText, Typography, Form } from "@mui/material"
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export const InputForNewComment = props =>{
    const dispatch = useDispatch();
    const [newComment, setNewComment] = useState({value: ''})
    
    const handlerOnChange = e => {
        setNewComment(()=>{newComment.value = e.currentTarget.value;
        return newComment})
    }
    const handlerOnSubmit = e => {
        e.preventDefault();
        dispatch({type: 'ADD_COMMENT', payload: {value: newComment.value, postId: props.postId}});
    }
    return (<form onSubmit={handlerOnSubmit}>
                <Input placeholder="Введите свой комментарий"
                style={{width: "90%"}}
                onChange={handlerOnChange}></Input>
                <Button onClick={handlerOnSubmit}>Добавить коммент</Button>
            </form>)
}