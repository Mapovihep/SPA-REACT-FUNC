import { Button, Card, CardActions, CardContent, FormControl, IconButton, Input, List, ListItem, ListItemText, Typography, Form } from "@mui/material"
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Comment } from "../MainPageParts/Comment";
import { InputForNewComment } from "./InputForNewComment";
export const Comments = props => {
    let commArray = [];
    for(let el of props.comments){
        commArray.push({...el, editMode: false, key: Math.round(Math.random()*100000)})// каждому элементу добавим режим редактирования, характеризующий его состояние
    }
    
    const [stateOfPage, setStateOfPage] = useState({inputValue: '', editMode: false, comments: commArray});
    useEffect(()=>{
        setStateOfPage({
            inputValue: '', editMode: false, comments: commArray
        })
    },[])
    const userId = useSelector(state => (state.saga.userProfile.id))
    const dispatch = useDispatch();
    //сделаем обновление при помощи обновления списка постов)))))))))))))))))))))
    return(
        <form style={{ display: `${props.display}`, width: "100%", textAlign: "center" }}>
            {stateOfPage.comments.map(newComment=><Comment commentInfo={newComment} editMode={newComment.editMode}></Comment>)}
            <InputForNewComment postId={props.postId}></InputForNewComment>
        </form>
    )
}