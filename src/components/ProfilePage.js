import { Button } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'

const ProfilePage = props => {
    
    async function handleClickProfile(){
        let response = await fetch('https://test-api-post.herokuapp.com/auth/sign_up', {
            method: 'POST',
            headers: {'Content-Type': 'application/json;charset=utf-8'},
            body: JSON.stringify({
                email: "email@search.ru",
                password: "password", 
                first_name:"firstName", 
                last_name: "lastName" 
            })
        })
        console.log(response)
        let data = await response.json(); 
        console.log(data)
    }
    async function handleClickLogin(){
        let response = await fetch('https://test-api-post.herokuapp.com/auth/sign_in', {
            method: 'POST',
            headers: {'Content-Type': 'application/json;charset=utf-8'},
            body: JSON.stringify({
                email: "email@search.ru",
                password: "password", 
            })
        })
        let token = response.headers.get('Authorization')
        console.log(token);
        console.log(response);
        let data = await response.json(); 
        console.log(data);
    }
    async function handleClickGetPosts(){
        let request = await fetch('https://test-api-post.herokuapp.com/posts/all', {
            method: 'GET',
            headers: {'Content-Type': 'application/json;charset=utf-8'}}
        )
        console.log(request)
        let data = await request.json(); 
        console.log(data)
    }
    
    return(
        <Box>
            <Button onClick={handleClickProfile}>Sign up</Button>
            <Button onClick={handleClickGetPosts}>Get Posts</Button>
            <Button onClick={handleClickLogin}>Log in</Button>
        </Box>
    )
}
export default ProfilePage;