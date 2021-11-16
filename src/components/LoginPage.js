import { Button, TextField } from '@mui/material';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import ProfilePage from './ProfilePage';

const LoginPage = props => {
    const [loginPageInfo, setInfo] = useState({ eMail: '12@mail.ru', password: '1', errorText: ''})
    const dispatch = useDispatch();
    const handleChange = (e) => {
        const field = e.currentTarget;
        const type = field.id;
        type === 'Login' ? 
        setInfo({...loginPageInfo, eMail: field.value}) 
        : setInfo({...loginPageInfo, password: field.value})
        }
    async function getData(pattern){
        props.dispatch({type:'LOAD_DATA', state: loginPageInfo})
        
    }
    const originalLogIn = e => {
        if(loginPageInfo.eMail!==""&&loginPageInfo.password!==""){
            console.log("диспатчим, господа")
            dispatch({type:'LOG_IN', state: loginPageInfo})
        }else{
            console.log("не диспатчим, господа")
            setInfo({...loginPageInfo, errorText: "Введите-ка, сударь, все данные"})
        }
        const textFields = e.currentTarget.parentNode.querySelectorAll('input');
        for(let t of textFields){
            t.value=''
        }
        
    }
    return(
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", margin: "20px"}}>
                <TextField
                    id="Login"
                    placeholder="Login"
                    style={{margin: "10px 0"}}
                    onChange={handleChange}
                />
                <TextField
                    id="Password"
                    placeholder="Password"
                    style={{margin: "10px 0"}}
                    onChange={handleChange}
                    type='password'
                />
                <Button onClick={getData}>
                    Log In
                </Button>
                <Button onClick={originalLogIn}>
                    originalLogIn
                </Button>
                <span>{loginPageInfo.errorText}</span>
            <ProfilePage />     
        </div> 
    )
}
export default LoginPage;