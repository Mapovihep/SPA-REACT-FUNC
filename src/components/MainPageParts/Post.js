import { Button, Card, CardActions, CardContent, FormControl, IconButton, Input, List, ListItem, ListItemText, Typography } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useState } from "react";
import { Box } from "@mui/system";
import postAction from "../../actions/MainPageActions";
import { useDispatch } from "react-redux";
export const Post = props => {
    const [state, setPostState] = useState({...props,  likeCount: 5});
    const dispatch = useDispatch();
    const deletePost = (e) =>{
        dispatch({type: 'DELETE_POST', payload: state.id});
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
        <ListItem style={{width:"300px", height: "100%"}}>            
            <Box>
                <Card sx={{ minWidth: 275, maxWidth: 500}} style={{height: "100%"}}>
                    <CardContent>
                        <span>
                            {state.key}
                        </span>
                        <Typography variant="h6" component="div">
                            {state.header + ' user:' + (state.user_id||' your_post')}
                        </Typography>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            {state.description}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            {state.date}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button>Add comment ({props.comments})</Button>
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