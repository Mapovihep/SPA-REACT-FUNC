import { useDispatch, useSelector } from "react-redux"
import React, {useState, useEffect, getState} from 'react'
import addingPost, { addPost } from "../actions/MainPageActions"
import postAction from "../actions/MainPageActions"
import { Button, FormControl, IconButton, Input, List, ListItem, ListItemText } from "@mui/material"
import {Post} from "./MainPageParts/Post"
import { InputForNewForm } from "./MainPageParts/InputForNewForm"

const MainPage = (props) => {
    const dispatch = useDispatch();
    const status = useSelector(state => state.saga.posts)
    const [posts, setPosts] = useState(status||[]);

    useEffect(()=>{setPosts(status)})
        // console.log('кеть')})//теперь он рендерится, когда происходит редирект при залогинивании, но без обращения к store не хочет, хотя его состояние меняется
    
    const deletePost = (id) => {
        dispatch({type: 'DELETE_POST', payload: id});
        setPosts(props.posts||[]);}
    const redirectOnPost = (id) => {
        dispatch({type: 'REDIRECT_ON_POST', payload: id});
    }
    return (
        <div>
            <InputForNewForm/>
            <span 
            style={{display: "inline-block",
            width:"100px", fontSize: "30px",
            paddingLeft: "30px"
            }}>{posts.length}</span>
            <List style={{display: "flex", 
            flexWrap: "wrap",
            alignItems: "center"}}>
                {posts.map(newPost=> 
                <Post 
                postInfo={newPost}
                deletePost={deletePost}
                redirectOnPost={redirectOnPost}
                key={Math.random()}>
                </Post>)}
            </List>       
        </div>
    );
}

export default MainPage;