import { Button, Card, CardActions, CardContent, FormControl, IconButton, Input, List, ListItem, ListItemText, Typography } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useState } from "react";
import { Box } from "@mui/system";
import postAction from "../../actions/MainPageActions";
import { useDispatch, useSelector } from "react-redux";
export const Post = props => {
    const [state, setPostState] = useState({...props.postInfo, likeCount: 5});
    const dispatch = useDispatch();
    const deletePost = () => {props.deletePost(state.id)}
    const handleClick = () => {
        let current = state.likeCount; 
        current++;
        setPostState(()=>{
            return {...state,
                 likeCount: current}
        })
    }
    const flag = useSelector(state => state.saga.redirectOnPost)
    const handlerPostClick = () =>{
        !flag ? props.redirectOnPost(state.id)  : console.log('выводим экшен о посте, на который редирект' + state.id)
        debugger;
        // dispatch({type: 'ALREADY_REDIRECTED', payload: state.id})
    }
    console.log(new Date(state.updatedAt).getFullYear())
    return(
        <ListItem style={{width:"300px", height: "100%"}}>            
                <Card
                onClick={handlerPostClick}
                sx={{ minWidth: 275, maxWidth: 500}}
                style={{height: "100%"}}>
                    <CardContent>
                        <span>{state.key}</span>
                        <Typography variant="h6">
                            {state.title + ' user:' + (state.user_id||' your_post')}
                        </Typography>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            {state.description}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            {new Date(state.updatedAt).getFullYear()+' : ' + 
                            new Date(state.updatedAt).getMonth() + ' : ' + 
                            new Date(state.updatedAt).getDay()}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button>Add comment ({state.comments.length})</Button>
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
        </ListItem>
    )
}
// header = {newPost.title}
    // user_id = {newPost.user_id}
    // description = {newPost.description} 
    // date={newPost.updatedAt.substr(0, 10)} 
    // key={newPost.id}
    // id={newPost.id}
    // comments={newPost.comments.length}
    // deletePost={deletePost}
    // redirectOnPost={redirectOnPost}