import { Mail } from '@mui/icons-material';
import { Button, TextField } from '@mui/material';
import React, { useState } from 'react'

const SignUpPage = () => {
    const [info, setInfo] = useState({ eMail: '', login: '', password: ''})

    
    const handleChange = (e) => {
        const field = e.currentTarget;
        const type = field.id;
        type === 'E-Mail' ? 
        setInfo({...info, eMail: field.value}) 
        : (type === "Login" ? 
        setInfo({...info, login: field.value})
        : setInfo({...info, password: field.value}))
        }
    
    return(
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", margin: "20px"}}>
                <TextField
                    id="E-Mail"
                    label="E-Mail"
                    onChange={handleChange}
                    style={{margin: "10px 0"}}
                />
                <TextField
                    id="Login"
                    label="Login"
                    onChange={handleChange}
                    style={{margin: "10px 0"}}
                />
                <TextField
                    id="Password"
                    label="Password"
                    style={{margin: "10px 0"}}
                    onChange={handleChange}
                    type='password'
                />
                <Button>
                    Sign Up
                </Button>
        </div>
    )
}
export default SignUpPage;