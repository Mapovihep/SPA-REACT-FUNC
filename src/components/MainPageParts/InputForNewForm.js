import { Button, FormControl, IconButton, Input, List, ListItem, ListItemText } from "@mui/material"
import React, { useState } from 'react'
import { inputAction } from "../../actions/MainPageActions"

export const InputForNewForm = () => {
    const [inputText, setInputText] = useState({text: '', date: ''})
    const setState = (e) => {
        let postTitle = '';
        e.preventDefault()
        e.type==="change"&&(postTitle = e.currentTarget.value)
        setInputText({...inputText, text: postTitle, date: ''})
    }
    const addPostTitle = () =>{
        inputAction(inputText.text, inputText.date)
    }
    return(
        <form 
        style={{margin: "20px", width: "95%"}}
        onSubmit={setState}>
            <label>
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
            </label>
        </form>
    )
}