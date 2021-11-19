import { Button, FormControl, IconButton, Input, List, ListItem, ListItemText } from "@mui/material"
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { inputAction } from "../../actions/MainPageActions"

export const InputForNewForm = () => {
    const userInfo = useSelector(state => state.saga.userProfile)
    const [inputInfo, setInputText] = useState({});
    useEffect(()=>{setInputText({
        title: '',
        description: '', 
        email: userInfo.email, 
        first_name: userInfo.first_name, 
        last_name: userInfo.last_name, 
        user_id:  userInfo.id, 
        createdAt: '', 
        updatedAt: '',
        comments: [],
        id: 11111})}, [userInfo])
    const dispatch = useDispatch();

    const setState = (e) => {
        let postTitle = '';
        e.preventDefault()
        e.type==="change"&&(postTitle = e.currentTarget.value)
        setInputText({...inputInfo, title: postTitle, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString()})
    }
    const addPostTitle = e => {
        dispatch(inputAction(inputInfo))
        console.log(inputInfo)
        e.currentTarget.parentNode.querySelector('input').value=''
    }
    return(
        <form 
        style={{margin: "20px", width: "95%"}}
        onSubmit={setState}>
            <Input 
            onChange={setState}
            // onKeyPress={addPost}            
            type="text"
            placeholder="Введи-ка заголовок будущего поста"
            style={{margin: "20px", width: "70%"}}
        ></Input>
        <Button
            variant="contained"
            onClick={addPostTitle}
        >Contained</Button>
        </form>
    )
}