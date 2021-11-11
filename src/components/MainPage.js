import { useDispatch, useSelector } from "react-redux"
import React, {useState, useEffect, getState} from 'react'
import addingPost from "../actions/MainPageActions"
import postAction from "../actions/MainPageActions"
import { Button, FormControl, IconButton, Input, List, ListItem, ListItemText } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';
import { Post } from "./MainPageParts/Post"
import { NorthWest } from "@mui/icons-material"

const MainPage = (props) => {
    const postFromState = useSelector((state) => state.page.posts);
    console.log(postFromState);
    // const [posts, setPosts] = useState(JSON.parse(localStorage.getItem('initial posts')));
    const [posts, setPosts] = useState(postFromState);

    useEffect(()=>{
        localStorage.setItem('initial posts', JSON.stringify(posts));
    }, [posts])

    const addPost = (event) => {
        let current=event.currentTarget;
        if(event.key === 'Enter'){
            setPosts([
                ...posts,
                current.querySelector('input').value
            ],  
            props.dispatch(postAction('ADD_POST', current.querySelector('input').value)),
            current.querySelector('input').value='')
        }else{
            if(event.type === "click"){
                setPosts([
                    ...posts,
                    current.parentNode.querySelector('input').value
                ],
                props.dispatch(postAction('ADD_POST', current.querySelector('input').value)),
                current.parentNode.querySelector('input').value='',
            )}
        }
    }
    
        const someNewPosts = posts.map(newPost=> 
        <Post text = {newPost} delete={postAction} key={Math.random()}></Post>);
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
            {/* <form
            onSubmit={addPost}
            onKeyPress={addPost}>
            <input 
            type="text"
            placeholder="Введи-ка сюда свой пост"
            ></input>
            <button>Запости чего-нибудь)</button>
            
            <ul>
                {someNewPosts}
            </ul>
            <button onClick={()=>dispatch({type:'LOAD_DATA'})}>
                Click me
            </button> */}
        </div>
    );
}
//</div><button onClick={()=>dispatch({type:'LOAD_DATA'})>Подгрузить данные</button></button>
//

export default MainPage;