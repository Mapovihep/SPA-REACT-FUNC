import { Button, Card, CardActions, CardContent, FormControl, IconButton, Input, List, ListItem, ListItemText, Typography } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useState } from "react";
import { Box } from "@mui/system";
export const Post = props => {
    const [state, setPostState] = useState({...props,  likeCount: 5});
    const deletePost = (e) =>{
        // console.log(e.currentTarget.parentNode.querySelector('span').textContent)
        props.delete('DELETE_POST', e.currentTarget.parentNode.querySelector('span').textContent)
    }
    const handleClick = () => {
        let current = state.likeCount;
        current++;
        setPostState(()=>{
            return {...state,
                 likeCount: current}
        })
    }
    return(
        <ListItem key={Math.random()}>            
            <Box>
                <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                        <Typography variant="h5" component="div">
                            {}
                        </Typography>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            {state.text}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            {state.date}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button>Add Comment</Button>
                        <IconButton aria-label="delete" onClick={deletePost}>
                            <DeleteIcon />
                        </IconButton>
                        <IconButton aria-label="delete" onClick={handleClick} >
                            <FavoriteIcon />
                        </IconButton>
                        <Typography color="text.secondary">
                            {state.likeCount}
                        </Typography>
                    </CardActions>
                </Card>
            </Box>
        </ListItem>
    )
}