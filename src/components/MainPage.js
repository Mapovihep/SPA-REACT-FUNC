import { useDispatch, useSelector } from "react-redux"
import React, {useState, useEffect, getState} from 'react'
import addingPost from "../actions/MainPageActions"
import postAction from "../actions/MainPageActions"
import { Button, FormControl, IconButton, Input, List, ListItem, ListItemText } from "@mui/material"
import { DeleteIcon } from "@mui/icons-material/Delete"

const MainPage = () => {
    const dispatch = useDispatch();
    // localStorage.clear();
    // const newR = ['Unos Posto', 'Duos Posto', 'Trez posto, MAMA MIA!!'];
    // localStorage.setItem('Новые посты', JSON.stringify(newR));
    //const newLoadedPosts = ['Unos Posto', 'Duos Posto', 'Trez posto, MAMA MIA!!'] 
    const [ newPosts, setNewPosts] = useState(JSON.parse(localStorage.getItem('Новые посты')));


    const someNewPosts = newPosts.map(newPost=> 
    <ListItem>
        <ListItemText primary={newPost} key={Math.random()} endIcon={ <DeleteIcon />}>
            <IconButton aria-label="delete">
                <DeleteIcon />
            </IconButton>
        </ListItemText>
    </ListItem>);
    
    useEffect(()=>{
        localStorage.clear();
        localStorage.setItem('Новые посты', JSON.stringify(newPosts));
        
    }, [newPosts])
    

    const addPost = (event) => {
        const inputForm = event.currentTarget.querySelector('input');
        if(event.type === 'submit'){
        event.preventDefault();
        if(inputForm.value !== ''){
            setNewPosts([
                ...newPosts,
                inputForm.value
            ],
            inputForm.value=''
            )      
        }
        }
    }

    return (
        <div>
            <FormControl
            fullWidth
            onSubmit={addPost}
            onKeyPress={addPost}>
                <Input                
                    type="text"
                    placeholder="Введи-ка сюда свой пост"
                    style={{margin: "20px", height: "30px"}}
                ></Input>
                <Button variant="contained">Contained</Button>
            </FormControl>
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