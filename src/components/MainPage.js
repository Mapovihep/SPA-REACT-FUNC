import { useDispatch, useSelector } from "react-redux"
import React, {useState, useEffect, getState} from 'react'
import addingPost, { addPost } from "../actions/MainPageActions"
import {deletePostAction, redirectOnPostAction}  from "../actions/MainPageActions"
import { Button, FormControl, IconButton, Input, List, ListItem, ListItemText } from "@mui/material"
import {Post} from "./MainPageParts/Post"
import { InputForNewForm } from "./MainPageParts/InputForNewForm"

const MainPage = (props) => {
    const dispatch = useDispatch();
    const status = useSelector(state => state.saga.posts)
    const [posts, setPosts] = useState(props.posts||[]);

    useEffect(()=>{setPosts(props.posts)})
        // console.log('кеть')})//теперь он рендерится, когда происходит редирект при залогинивании, но без обращения к store не хочет, хотя его состояние меняется
    
    
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
                // redirectOnPost={redirectOnPost}
                key={Math.random()}>
                </Post>)}
            </List>       
        </div>
    );
}

export default MainPage;