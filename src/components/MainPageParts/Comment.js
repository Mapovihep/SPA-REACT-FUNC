import { Card, Typography} from "@mui/material"
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Moment from 'react-moment';
export const Comment = props => {
    const [editMode, setEditMode] = useState(props.editMode)
    const [stateOfComment, setStateOfComment] = useState(props.commentInfo)
    const userId = useSelector(state => (state.saga.userProfile.id))
    const dispatch = useDispatch();
    useEffect(()=>{
        setStateOfComment({
            title: props.commentInfo.title,
            user_id:  props.commentInfo.user_id, 
            createdAt: props.commentInfo.createdAt, 
            updatedAt: props.commentInfo.updatedAt,
            id: props.commentInfo.id
        })
    },[])
    const handlerOnChange = e =>{  
        setStateOfComment(prevState => ({...prevState, title:e.target.value}))
    }
    const changeYourComment = e =>{  
        e.preventDefault();
        if(userId===stateOfComment.user_id){
            const ifTrueFunc = () => {
                setEditMode(false);
                props.commentInfo.title!==stateOfComment.title&&dispatch(
                    {type: "CHANGING_COMMENT", 
                    payload: {commentId: stateOfComment.id, 
                    value: stateOfComment.title}});
            }
            if(stateOfComment.title===''){
                dispatch({type: "DELETING_COMMENT", 
                payload: {commentId: stateOfComment.id, postId: props.postId}})
            }else{
                editMode===false ? setEditMode(true) : ifTrueFunc();
            }
        }
    }
    return(<Card style={{display: "flex", flexWrap: 'wrap'}} >
                <button onClick={changeYourComment} style={{margin: "auto"}}>
                    Change comment
                </button>
                {!editMode ? 
                <Typography style={{display: "block", width: "100%"}}>
                    {stateOfComment.title} 
                </Typography> 
                : <textarea onChange={handlerOnChange} style={{margin: "auto"}} value={stateOfComment.title}></textarea>}
                <Typography style={{display: "block", width: "100%"}} id="userId">
                    {stateOfComment.user_id}
                </Typography>
                <Typography style={{textAlign: "center", display: "block", width: "50%"}}>
                    Created at: <Moment format="YYYY.MM.DD">
                        {stateOfComment.createdAt}
                    </Moment>      
                </Typography>       
                <Typography style={{display: "block", width: "50%"}}>
                    Updated at: <Moment format="YYYY.MM.DD">
                        {stateOfComment.updatedAt}
                    </Moment>
                </Typography>
            </Card>
    )
}