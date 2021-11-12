import { Button, TextField } from '@mui/material';
import React, { useState } from 'react'
import ProfilePage from './ProfilePage';

const LoginPage = props => {
    const [info, setInfo] = useState({ login: '', password: ''})

    const handleChange = (e) => {
        const field = e.currentTarget;
        const type = field.id;
        type === 'Login' ? 
        setInfo({...info, login: field.value}) 
        : setInfo({...info, password: field.value})
        }
    async function getData(pattern){
        // const request = await fetch('https://test-api-post.herokuapp.com/auth/sign_up', {
        //     method: 'POST',
        //     headers: {'Content-Type': 'application/json;charset=utf-8'},
        //     body: JSON.stringify({
        //         email: "email@kiku.ru",
        //         password: "data.data.password", 
        //         first_name:"data.data.firstName", 
        //         last_name: "data.data.lastName" 
        //     })
        // })
        // console.log(request)
        // const data = await request.json(); 
        // console.log(data)
        props.dispatch({type:'LOAD_DATA'})
    }
    return(
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", margin: "20px"}}>
                <TextField
                    id="Login"
                    label="Login"
                    style={{margin: "10px 0"}}
                    onChange={handleChange}
                />
                <TextField
                    id="Password"
                    label="Password"
                    style={{margin: "10px 0"}}
                    onChange={handleChange}
                    type='password'
                />
                <Button onClick={getData}>
                    Log In
                </Button>
            <ProfilePage dispatch={props.dispatch}/>     
        </div> 
    )
}
export default LoginPage;