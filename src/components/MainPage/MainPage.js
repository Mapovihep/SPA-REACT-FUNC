import { useDispatch, useSelector } from "react-redux"
import React, {useState, useEffect, getState} from 'react'
import { List } from "@mui/material"
import { Post } from "../MainPageParts/Post"
import { InputForNewForm } from "../MainPageParts/InputForNewForm"
import './styles.css'

const MainPage = (props) => {
    const dispatch = useDispatch();
    const status = useSelector(state => state.saga.posts)
    const [posts, setPosts] = useState(props.posts||[]);

    useEffect(()=>{setPosts(props.posts)})    
    return (
        <div>
            <InputForNewForm/>
            <span 
            style={{display: "inline-block",
            width:"100px", fontSize: "30px",
            paddingLeft: "30px"
            }}>{posts.length}</span>
            <List className='container_MainPage'>
                {posts.map(newPost=> 
                <Post className='post_MainPage'
                postInfo={newPost}
                // redirectOnPost={redirectOnPost}
                key={Math.random()}>
                </Post>)}
            </List>       
        </div>
    );
}

export default MainPage;