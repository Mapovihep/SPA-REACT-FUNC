import { useDispatch, useSelector } from "react-redux"
import React, {useState, useEffect, getState} from 'react'
import addingPost, { addPost } from "../actions/MainPageActions"
import postAction from "../actions/MainPageActions"
import { Button, FormControl, IconButton, Input, List, ListItem, ListItemText } from "@mui/material"
import {Post} from "./MainPageParts/Post"

const MainPage = (props) => {
    console.log(props);
    const [posts, setPosts] = useState(props.posts);
    const dispatch = useDispatch();
    
    
    useEffect(()=>{
        console.log('страница обновляется')
     },
    [posts])
    const someNewPosts = posts.map(newPost=> 
    <Post 
    header = {newPost.text||newPost.title}
    user_id = {newPost.user_id}
    description = {newPost.description} 
    date={newPost.date||newPost.updatedAt.substr(0, 10)} 
    key={newPost.id}
    id={newPost.id}
    comments={newPost.comments.length}></Post>);
    /*comments: (3) [{…}, {…}, {…}]
    createdAt: "2021-06-10T14:38:27.392Z"
    description: "first post"
    id: 1
    title: "first post"
    updatedAt: "2021-06-10T14:38:27.392Z"
    user_id: 5 */
    return (
        <div>
            <div style={{margin: "20px", width: "95%"}}>
                <Input 
                    onChange={addPost}
                    onKeyPress={addPost}            
                    type="text"
                    placeholder="Введи-ка заголовок будущего поста"
                    style={{margin: "20px", width: "70%"}}
                ></Input>
                <Button
                    onClick={addPost}
                    variant="contained"
                >Contained</Button>
            </div>
            <span 
            style={{display: "inline-block",
            width:"100px", fontSize: "30px",
            paddingLeft: "30px"
            }}>{posts.length}</span>
            <List style={{display: "flex", 
            flexWrap: "wrap",
            alignItems: "center"}}>
                {someNewPosts}
            </List>       
            {/*
            <button onClick={()=>dispatch({type:'LOAD_DATA'})}>
                Click me
            </button> */}
        </div>
    );
}
//</div><button onClick={()=>dispatch({type:'LOAD_DATA'})>Подгрузить данные</button></button>
//

export default MainPage;