import  './styles.css'

import { Button,
     ButtonGroup, 
     Card, 
     Typography, 
     Input,
     DialogTitle,
     Dialog,
     DialogActions} from "@mui/material"
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Moment from 'react-moment';
import { CHANGE_COMMENT_FETCH, DELETE_COMMENT_FETCH } from "../../../../actions/SagaActions";
export const Comment = props => {
    const [editMode, setEditMode] = useState(false);
    const [stateOfComment, setStateOfComment] = useState({...props.commentInfo, deleteFlag: false});
    const userId = useSelector(state => (state.saga.userProfile.id));
    const dispatch = useDispatch();
    useEffect(()=>{
        setStateOfComment({
            title: props.commentInfo.title,
            user_id:  props.commentInfo.user_id, 
            createdAt: props.commentInfo.createdAt, 
            updatedAt: props.commentInfo.updatedAt,
            id: props.commentInfo.id,
            count: 0,
            currentUser: userId===stateOfComment.user_id,
            deleteFlag: false,
        })
    },[]) 
    const handlerOnChange = e => {  
        setStateOfComment(state => ({...state, title: e.target.value}))
    }
    const delCom = e => {
        setStateOfComment(state => ({...state, deleteFlag: !state.deleteFlag}))
    }
    delCom.yes = e => {
        dispatch({type: DELETE_COMMENT_FETCH, 
            payload: {commentId: stateOfComment.id, postId: props.postId}})
    }
    const changeYourComment = e => {  
        const dispChange = e => {
            dispatch({type: CHANGE_COMMENT_FETCH, 
                payload: {commentId: stateOfComment.id, 
                value: stateOfComment.title}});
            setEditMode(false)
        }
        setEditMode(true)
        stateOfComment.count%2!==0&&
        (stateOfComment.title!==props.commentInfo.title ? 
            dispChange(e) 
            : setEditMode(false))
        setStateOfComment(state => ({...state, count: state.count+1}))
    }
    return(<Card className="comment_container" >
                {!editMode ? 
                <Typography className="comment_title">
                    {stateOfComment.title} 
                </Typography> 
                : <Input autoFocus onChange={handlerOnChange} 
                    className="comment_title_input"
                    value={stateOfComment.title}/>}
                {stateOfComment.currentUser&&<ButtonGroup variant="contained" className="button_container">
                <Button className="button_act" size='small' onClick={changeYourComment}>
                    {!editMode ? 'Change' : 'Save'}
                </Button>
                <Button className="button_act" size='small' onClick={delCom}>
                    Delete
                    <Dialog
                    open={stateOfComment.deleteFlag}
                    aria-labelledby="alert-dialog-title">
                        <DialogTitle id="alert-dialog-title">
                        {"Do you want to delete your comment?"}
                        </DialogTitle>
                        <DialogActions>
                        <Button onClick={delCom.yes}>Yes</Button>
                        <Button>No</Button>
                        </DialogActions>
                    </Dialog>
                </Button>
                </ButtonGroup >}
                <Typography className="comment_author" variant="h6" id="userId">
                    User Id: {stateOfComment.user_id}
                </Typography>
                <Typography className="comment_date_of_creation">
                    Created at: <Moment calendar={true}>
                        {stateOfComment.createdAt}
                    </Moment>      
                </Typography>       
            </Card>
    )
}