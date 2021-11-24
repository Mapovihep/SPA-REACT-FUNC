import { Button, 
        Card, 
        CardActions, 
        CardContent, 
        IconButton, 
        ListItem, 
        Typography} from "@mui/material"
import { Link } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';
import FavoriteIcon from '@mui/icons-material/Favorite';
import React,{ useEffect, useState } from "react";
import { deletePostAction } from "../../actions/MainPageActions";
import { useDispatch, useSelector } from "react-redux";
import { Comments } from "./Comments";
import Moment from "react-moment";
import { useNavigate } from "react-router";
export const Post = props => {
    const [state, setPostState] = useState({...props.postInfo, likeCount: 5, formComm: "none", editMode: false, editStyle: 'none'})  
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userId = useSelector(state => (state.saga.userProfile.id))
    useEffect(()=>{
        setPostState({...props.postInfo, likeCount: 5, formComm: "none"});
        props.fromRouter!==undefined&&setPostState(prevState => ({...prevState, editStyle: 'block'}))
        console.log(props.fromRouter)
    },[props, props.fromRouter])
    const editMode = () => {
        setPostState(prevState => ({...prevState, editMode: true}))
    }
    
    const deletePost = () => {
        userId===state.user_id&&window.confirm('Are you sure?') ? 
        dispatch(deletePostAction(state.id))
        : window.alert('You are not the author of this post');
    }
    const handleClickLike = () => {
        setPostState(prevState => ({...prevState, likeCount: prevState.likeCount+1}))
    }
    const showComments = () => {
        state.formComm !== 'block' ? 
        setPostState(state => ({...state, formComm: 'block'}))
        : setPostState(state => ({...state, formComm: 'none'}))
    }
    const handlerRoute = () => {
        navigate(`/posts/${state.id}`)}
    return(
        <ListItem>    
            <Card style={{height: "100%", width: "90vw", display: "flex", flexDirection: "column"}}>      
                    <CardContent>
                        <Typography onClick={handlerRoute} variant="h6">
                            {state.title + ' user:' + (state.user_id||' your_post')}
                        </Typography>
                        <Typography 
                        onClick={handlerRoute}
                        sx={{ fontSize: 14 }} 
                        color="text.secondary" 
                        gutterBottom>
                            {state.description}
                        </Typography>
                        {"updated at "} 
                        <Moment style={{ marginBottom: "10px" }} format="DD.MM.YYYY">
                            {state.updatedAt}
                        </Moment>
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
                        <Button onClick={editMode} style={{display:`${state.editStyle}`}}></Button>
                    </CardActions>
                    <Comments display= {state.formComm} comments={state.comments} postId={state.id}></Comments>
            </Card>
        </ListItem>
    )
}