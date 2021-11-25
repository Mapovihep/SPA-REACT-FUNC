import { Button, 
        Card, 
        CardActions, 
        CardContent, 
        IconButton, 
        ListItem,
        Input, 
        Typography} from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';
import FavoriteIcon from '@mui/icons-material/Favorite';
import React,{ useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Comments } from "./Comments";
import Moment from "react-moment";
import { useNavigate } from "react-router";
import { editIsOver } from "../../actions/PostActions";
import { DELETE_POST_FETCH } from "../../actions/SagaActions";

export const Post = props => {
    const [state, setPostState] = useState({...props.postInfo, 
        likeCount: 5, 
        editMode: false, 
        editStyle: 'none', 
        actionCount: 0})  
    const [commFormState, setCommFormState] = useState({
        formComm: "none", 
    })
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userId = useSelector(state => (state.saga.userProfile.id))
    useEffect(()=>{
        setPostState({...props.postInfo, 
            likeCount: 5, 
            editMode: false, 
            editStyle: 'none', 
            actionCount: 0});
        setCommFormState({formComm: "none"})
        props.fromRouter!==undefined&&setPostState(state => ({...state, editStyle: 'block'}))
        console.log(state.editCommentMode)
        if(state.editCommentMode){
            setCommFormState(state => ({...state, formComm: 'block'}))
        }
    },[props])
    
    const editMode = () => {
        state.actionCount%2===0 ? 
        setPostState(state => ({...state, editMode: true, actionCount: state.actionCount+1}))
        : setPostState(state => ({...state, editMode: false, actionCount: state.actionCount+1}));
        editIsOver(state, props);
    }
    const deletePost = () => {
        console.log(state.id)
        userId===state.user_id&&window.confirm('Are you sure?') ? 
        dispatch({type: DELETE_POST_FETCH, payload: state.id})
        : window.alert('You are not the author of this post');
    }
    const handleClickLike = () => {
        setPostState(state => ({...state, likeCount: state.likeCount+1}))
    }
    const showComments = () => {
        commFormState.formComm !== 'block' ? 
        setCommFormState(state => ({...state, formComm: 'block'}))
        : setCommFormState(state => ({...state, formComm: 'none'}));
    }
    const handlerRoute = () => {
        navigate(`/posts/${state.id}`)}
    const handlerChangePost = e =>{
        e.target.type!=='textarea' ?
        setPostState(state => ({...state, title: e.target.value}))
        : setPostState(state => ({...state, description: e.target.value}))
    }
    return(
        <ListItem>    
            <Card style={{height: "100%", width: "90vw", display: "flex", flexDirection: "column"}}>      
                    <CardContent>
                        {state.editMode ? <Input 
                        style={{display: 'block', width: '100%'}}
                        onChange={handlerChangePost} 
                        value={state.title}/>
                        : <Typography onClick={handlerRoute} variant="h6">
                            {state.title + ' user:' + (state.user_id||' your_post')}
                        </Typography>}
                        {state.editMode ? 
                        <textarea 
                        style={{display: 'block', width: '100%'}}
                        onChange={handlerChangePost} 
                        value={state.description}/> 
                        : <Typography 
                        onClick={handlerRoute}
                        sx={{ fontSize: 14 }} 
                        color="text.secondary" 
                        gutterBottom>
                            {state.description}
                        </Typography>}
                        {"updated "} 
                        <Moment style={{ marginBottom: "10px" }} calendar={true}>
                            {state.updatedAt} 
                        </Moment>
                    </CardContent>
                    <CardActions>
                        <Button onClick={showComments}>Show comments ({state.comments.length})</Button>
                        <IconButton aria-label="delete" onClick={deletePost}>
                            <DeleteIcon />
                        </IconButton>
                        <IconButton aria-label="delete" onClick={handleClickLike} >
                            <FavoriteIcon />
                        </IconButton>
                        <Typography color="text.secondary">
                            {state.likeCount}
                        </Typography>
                        <Button onClick={editMode} style={{display:`${state.editStyle}`}}>Edit</Button>
                    </CardActions>
                    <Comments 
                    display= {commFormState.formComm} 
                    comments={state.comments} 
                    postId={state.id}/>
            </Card>
        </ListItem>
    )
}