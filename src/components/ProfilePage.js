import { Button, Card, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import getProfile from '../sagas/getProfile';

const ProfilePage = props => {
    const userProfile = useSelector(state => (state.saga.userProfile||[]));
    const [userInfo, setUserInfo] = useState(userProfile);
    console.log(userProfile);
    const dispatch = useDispatch();
    const getProfileThere = () => {
        dispatch({type: 'LOAD_USERS_DATA', payload: userInfo})
    }
    useEffect(()=>{getProfileThere()},[])
    const ProfileInfo = () => {
        return <Card style ={{width: "200px", textAlign: "center"}}>
            <Typography>id: {userProfile.id}</Typography>
            <Typography>email: {userProfile.email}</Typography>
            <Typography>first_name: {userProfile.first_name}</Typography>
            <Typography>last_name: {userProfile.last_name}</Typography>
            <Typography>posts: {userProfile.posts ? userProfile.posts.length : ' 0 '}</Typography>
        </Card>
    }
    return(
        <Box style={{display: "flex", flexDirection: "column", alignItems: "center", margin: "20px"}}>
            <ProfileInfo></ProfileInfo>
        </Box>
    )
}
export default ProfilePage;