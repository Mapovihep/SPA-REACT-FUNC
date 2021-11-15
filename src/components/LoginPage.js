import { Button, TextField } from '@mui/material';
import React, { useState } from 'react'
import ProfilePage from './ProfilePage';

const LoginPage = props => {
    const [loginPageInfo, setInfo] = useState({ login: '', password: ''})

    const handleChange = (e) => {
        const field = e.currentTarget;
        const type = field.id;
        type === 'Login' ? 
        setInfo({...loginPageInfo, login: field.value}) 
        : setInfo({...loginPageInfo, password: field.value})
        }
    async function getData(pattern){
        props.dispatch({type:'LOAD_DATA'})
        
    }
    const dispatchFromThis = () => {
        props.dispatch({type:'SIGN_UP', state: loginPageInfo})
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
                <Button onClick={dispatchFromThis}>
                    changing localState
                </Button>
            <ProfilePage />     
        </div> 
    )
}
export default LoginPage;