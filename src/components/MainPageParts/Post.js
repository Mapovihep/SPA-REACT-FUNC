import { Button, Card, CardActions, CardContent, FormControl, IconButton, Input, List, ListItem, ListItemText, Typography, Form } from "@mui/material"
import { Link } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';
import FavoriteIcon from '@mui/icons-material/Favorite';
import React,{ useEffect, useState } from "react";
import { Box } from "@mui/system";
import { deletePostAction, redirectOnPostAction } from "../../actions/MainPageActions";
import { useDispatch, useSelector } from "react-redux";
import { Comments } from "./Comments";
export const Post = props => {
    const flag = useSelector(state => state.saga.redirectOnPost);
    const onPostId = useSelector((state=>state.saga.onPostId));    
    const [state, setPostState] = useState({...props.postInfo, likeCount: 5, formComm: "none"})
    onPostId&&console.log(props.postInfo)
    const dispatch = useDispatch();
    
    const deletePost = () => {
        dispatch(deletePostAction(state.id))
    }

    const handleClickLike = () => {
        let current = state.likeCount; 
        current++;
        setPostState(()=>{
            return {...state,
                 likeCount: current}
        })
    }
    // console.log(flag)

    const handlerPostClick = () => {
        // !flag ? dispatch(redirectOnPostAction(state.id))  : console.log('выводим экшен о посте, на который редирект ' + state.id)
        // debugger;
        // dispatch({type: 'ALREADY_REDIRECTED', payload: state.id})
    }
    const showComments = () => {
        if(state.formComm !== 'block'){
        setPostState(()=>{
            return {...state, formComm: 'block'}
        })
        }else{setPostState(()=>{
            return {...state, formComm: 'none'}
        })}
    }
    
    return(
        <ListItem onClick={handlerPostClick} style={{width:"300px", height: "100%"}}>    
                {/* <Link style={{paddingLeft: 13, textDecoration: 'none'}} to={`/post/id:${state.id}`}>       */}
                    <Card
                    sx={{ minWidth: 275, maxWidth: 500}}
                    style={{height: "100%", display: "flex", flexDirection: "column"}}>
                        <CardContent>
                            {/* <span>{state.key}</span> */}
                            <Typography variant="h6">
                                {state.title + ' user:' + (state.user_id||' your_post')}
                            </Typography>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                {state.description}
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                updated at
                                {' '+new Date(state.updatedAt).getDate()+'. ' + 
                                (new Date(state.updatedAt).getMonth()+1) + '. ' + 
                                new Date(state.updatedAt).getFullYear()}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button onClick={showComments}>Show comments ({state.comments.length})</Button>
                            {/* <Button style={{padding: "0"}} onClick={showComments}>Add</Button> */}
                            <IconButton aria-label="delete" onClick={deletePost}>
                                <DeleteIcon />
                            </IconButton>
                            <IconButton aria-label="delete" onClick={handleClickLike} >
                                <FavoriteIcon />
                            </IconButton>
                            <Typography color="text.secondary">
                                {state.likeCount}
                            </Typography>
                        </CardActions>
                        <Comments display= {state.formComm} comments={state.comments} postId={state.id}></Comments>
                    </Card>
                {/* </Link> */}
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