import { useDispatch, useSelector } from "react-redux"
import React, {useState, useEffect, getState} from 'react'
import addingPost from "../actions/MainPageActions"
import postAction from "../actions/MainPageActions"
import { Button, FormControl, IconButton, Input, List, ListItem, ListItemText } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';
import {Post} from "./MainPageParts/Post"
import { NorthWest, PinDropSharp } from "@mui/icons-material"

const MainPage = (props) => {
    // const [posts, setPosts] = useState(JSON.parse(localStorage.getItem('initial posts')));
    const [posts, setPosts] = useState(useSelector((state) => state.page.posts));
    console.log(posts);

    // useEffect(()=>{
    //     localStorage.setItem('initial posts', JSON.stringify(posts));
    // }, [posts])

    const addPost = (event) => {
        let current=event.currentTarget;
        if(event.key === 'Enter'){
            setPosts([
                ...posts,
                {text: current.querySelector('input').value, date: '1'}
            ],  
            props.dispatch(postAction('ADD_POST', current.querySelector('input').value)),
            current.querySelector('input').value='')
        }else{
            if(event.type === "click"){
                setPosts([
                    ...posts,
                    {text: current.parentNode.querySelector('input').value, date: '2'}
                ],
                props.dispatch(postAction('ADD_POST', current.parentNode.querySelector('input').value)),
                current.parentNode.querySelector('input').value='',
            )}
        }
    }
    
        const someNewPosts = posts.map(newPost=> 
        <Post text = {newPost.text} date={newPost.date} delete={postAction} key={Math.random()}></Post>);

    return (
        <div>
            <Input 
                onChange={addPost}
                onKeyPress={addPost}            
                type="text"
                placeholder="Введи-ка сюда свой пост"
                style={{margin: "20px", width: "75%"}}
            ></Input>
            <Button
                onClick={addPost}
                variant="contained"
            >Contained</Button>
            <List>
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