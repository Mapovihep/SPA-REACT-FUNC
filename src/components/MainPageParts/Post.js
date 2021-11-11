import { Button, FormControl, IconButton, Input, List, ListItem, ListItemText } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from "react";
export const Post = props => {
    const [state, setPostState] = useState('initial state');
    const deletePost = (e) =>{
        // console.log(e.currentTarget.parentNode.querySelector('span').textContent)
        props.delete('DELETE_POST', e.currentTarget.parentNode.querySelector('span').textContent)
    }
    return(
        <ListItem key={Math.random()}>
            <ListItemText primary={props.text} />
            <IconButton aria-label="delete" onClick={deletePost}>
                <DeleteIcon />
            </IconButton>
        </ListItem>
    )
}