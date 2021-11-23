import { Button, TextField } from '@mui/material';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

const SignUpPage = () => {
    const [info, setInfo] = useState({ eMail: '', password: '', firstName: '', lastName: '', errorText: ''})
    const dispatch = useDispatch();

    let errorText ='';
    const handleChange = (e) => {
        const field = e.currentTarget;
        const type = field.id;
        type === 'E-Mail' ? 
        setInfo({...info, eMail: field.value}) 
        : (type === "Password" ? 
        setInfo({...info, password: field.value})
        : (type === "FirstName" ? setInfo({...info, firstName: field.value}) 
        : setInfo({...info, lastName: field.value})))
    }
   
    const signUpDisp = e => {
        if(info.eMail!==""&&info.password!==""&&info.lastName!==""&&info.firstName!==""){
            console.log("диспатчим, господа")
        dispatch({type: 'SIGN_UP', state: info})
        }else{
            console.log("не диспатчим, господа")
            setInfo({...info, errorText: "Введите-ка, сударь, все данные"})
        }
        const textFields = e.currentTarget.parentNode.querySelectorAll('input');
        for(let t of textFields){
            t.value=''
        }
    }
    return(
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", margin: "20px"}}>
                <TextField
                    id="E-Mail"
                    placeholder="E-Mail"
                    onChange={handleChange}
                    style={{margin: "10px 0"}}
                />
                <TextField
                    id="Password"
                    placeholder="Password"
                    style={{margin: "10px 0"}}
                    onChange={handleChange}
                    type='password'
                />
                <TextField
                    id="FirstName"
                    placeholder="FirstName"
                    onChange={handleChange}
                    style={{margin: "10px 0"}}
                />
                <TextField
                    id="LastName"
                    placeholder="LastName"
                    onChange={handleChange}
                    style={{margin: "10px 0"}}
                />
                <Button onClick={signUpDisp}>
                    Sign Up
                </Button>
                <span>{info.errorText}</span>
        </div>
    )
}
export default SignUpPage;