import { Button, Card, CardActions, CardContent, FormControl, IconButton, Input, List, ListItem, ListItemText, Typography, Form } from "@mui/material"
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
export const Comment = props => {
    const [editMode, setEditMode] = useState(props.editMode)
    const [stateOfComment, setStateOfComment] = useState(props.commentInfo)
    console.log(new Date(stateOfComment.createdAt.substring(0,24)))
    useEffect(()=>{
        setStateOfComment({
            title: stateOfComment.title,
            user_id:  stateOfComment.user_id, 
            createdAt: stateOfComment.createdAt, 
            updatedAt: stateOfComment.updatedAt,
            id: stateOfComment.id
        })
    },[])
    const handlerOnChange = e =>{  
        // setStateOfComment(()=>{stateOfComment.title=e.currentTarget.value;
        // return stateOfComment})
        console.log(e.currentTarget.value)
    }
    const changeYourComment = e =>{
        e.preventDefault();
        editMode===false ? setEditMode(true) : setEditMode(false);
        // e.currentTarget.type==='span' ? 
        // console.log(e.currentTarget.innerHTML) :
        // console.log(e.currentTarget.querySelector('input'))
    }
    return(<Card style={{display: "flex", flexWrap: 'wrap'}} >
                <button onClick={changeYourComment} style={{margin: "auto"}}>Change comment</button>
                {!editMode ? <Typography style={{display: "block", width: "100%"}}>{stateOfComment.title} </Typography> :
                <Input onChange={handlerOnChange} style={{margin: "auto"}} value={stateOfComment.title}></Input>}
                <Typography style={{display: "block", width: "100%"}} id="userId">{stateOfComment.user_id}</Typography>
                <Typography style={{display: "block", width: "50%"}}>{new Date(stateOfComment.createdAt).getDate()+'. ' + 
                (new Date(stateOfComment.createdAt).getMonth()+1) + '. ' + 
                new Date(stateOfComment.createdAt).getFullYear()}</Typography>
                <Typography style={{display: "block", width: "50%"}}>{new Date(stateOfComment.updatedAt).getDate()+'. ' + 
                (new Date(stateOfComment.updatedAt).getMonth()+1) + '. ' + 
                new Date(stateOfComment.updatedAt).getFullYear()}</Typography>
            </Card>
    )
}