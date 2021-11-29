import  './styles.css'

import { Button, Input, TextField } from "@mui/material"
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { ADD_USERS_POST_FETCH } from "../../../actions/SagaActions"

export const InputForNewPost = () => {
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
        comments: []})}, [userInfo])
    const dispatch = useDispatch();

    const setState = (e) => {
        e.preventDefault()
        let field = e.target;
        let selector = field.id;
        selector==="Title" ? 
        setInputText({...inputInfo,  title: e.target.value}) : 
        setInputText({...inputInfo, description: e.target.value});
    }
    const addPostTitle = e => {
        setInputText({...inputInfo, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString()})
        e.preventDefault();
        dispatch({type: ADD_USERS_POST_FETCH, payload: inputInfo})
        for(let el of e.target.parentNode.querySelectorAll('input')){
            el.value='';
        }
    }
    return(
        <form 
        style={{margin: "20px", width: "95%"}}>
            <TextField 
            onChange={setState}
            id="Title"
            placeholder="Write post title"
            style={{ margin: "20px", width: '70%', height: "30px"}}
            />
            <TextField
            onChange={setState}
            id="Description"
            placeholder="Write description of your post"
            style={{ margin: "20px", width: '70%', height: "30px"}}
            />
            <Button
            variant="contained"
            onClick={addPostTitle}>
                Set the Post
            </Button>
        </form>
    )
}