import { Button, Card, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deletePostAction, redirectOnPostAction } from '../../actions/MainPageActions';
import getProfile from '../../sagas/Profile/getProfile';
import deletePost from '../../sagas/Posts/deletePost';
import { Post } from '../MainPageParts/Post';

const ProfilePage = props => {
    const userProfile = useSelector(state => (state.saga.userProfile||[]));
    const [posts, setPosts] = useState(props.posts)
    const usersPosts = posts.filter(el => el.user_id === userProfile.id);
    const [userInfo, setUserInfo] = useState(userProfile);
    const dispatch = useDispatch();
    useEffect(()=>{getProfileThere()},[userInfo])

    const getProfileThere = () => {
        dispatch({type: 'LOAD_USERS_DATA', payload: userInfo})
    }
    
    const ProfileInfo = () => {
        return <Card style ={{width: "200px", textAlign: "center"}}>
            <Typography>id: {userProfile.id}</Typography>
            <Typography>email: {userProfile.email}</Typography>
            <Typography>first_name: {userProfile.first_name}</Typography>
            <Typography>last_name: {userProfile.last_name}</Typography>
            <Typography>posts: {userProfile.posts ? userProfile.posts.length : ' 0 '}</Typography>
        </Card>
    }
    
    const UsersPosts = () =>{
        return(
            usersPosts.map(newPost=> 
                <Post 
                postInfo={newPost}
                // redirectOnPost={redirectOnPost}
                key={Math.random()}>
                </Post>)
        )
    }
    return(
        <Box style={{display: "flex", flexDirection: "column", alignItems: "center", margin: "20px"}}>
            <ProfileInfo></ProfileInfo>
            <UsersPosts></UsersPosts>
        </Box>
    )
}
export default ProfilePage;