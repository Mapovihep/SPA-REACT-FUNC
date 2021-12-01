import { Button, TextField, Alert } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import {  LOG_IN } from '../../actions/ReducerActions';
import { routesSaver } from '../../actions/RoutesForComponents';
import { LOAD_POSTS_FETCH, LOG_IN_FETCH } from '../../actions/SagaActions';
import  './styles.css'
import { useLocation } from 'react-router'

const LoginPage = props => {
    const [loginPageInfo, setInfo] = useState({ eMail: '', password: '', errorText: ''})
    const dispatch = useDispatch();

    useEffect(()=>{
        if(localStorage.getItem('token')!==null){
            dispatch({type:LOG_IN, payload: true})
            dispatch({type:LOAD_POSTS_FETCH, payload: true})
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
        loginPageInfo.eMail!==""&&loginPageInfo.password!=="" ?
        dispatch({type:LOG_IN_FETCH, state: loginPageInfo})
        : setInfo({...loginPageInfo, errorText: "Введите, пожалуйста, все данные"})
        const textFields = e.currentTarget.parentNode.querySelectorAll('input');
        for(let t of textFields){t.value=''}
    }
    
    return(
        <div className="login_Page">
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
                {loginPageInfo.errorText!==''&&<Alert variant="filled" severity="warning">
                    {loginPageInfo.errorText}
                </Alert>}
        </div> 
    )
}
export default LoginPage;