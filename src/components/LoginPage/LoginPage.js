import { Button, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
const LoginPage = props => {
    const [loginPageInfo, setInfo] = useState({ eMail: '12@mail.ru', password: '1', errorText: ''})
    const dispatch = useDispatch();
    useEffect(()=>{
        if(localStorage.length!==0){
            dispatch({type:'LOG_IN', state: loginPageInfo})
        }
    }, [])
    const handleChange = (e) => {
        const field = e.currentTarget;
        const type = field.id;
        type === 'Login' ? 
        setInfo({...loginPageInfo, eMail: field.value}) 
        : setInfo({...loginPageInfo, password: field.value})
        }
    const originalLogIn = e => {
        if(loginPageInfo.eMail!==""&&loginPageInfo.password!==""){
            dispatch({type:'LOG_IN', state: loginPageInfo})
        }else{
            setInfo({...loginPageInfo, errorText: "Введите-ка, сударь, все данные"})
        }
        const textFields = e.currentTarget.parentNode.querySelectorAll('input');
        for(let t of textFields){t.value=''}
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
                <Link to="/">
                    <Button onClick={originalLogIn}>
                        LogIn
                    </Button>
                </Link>
                <span>{loginPageInfo.errorText}</span>
        </div> 
    )
}
export default LoginPage;