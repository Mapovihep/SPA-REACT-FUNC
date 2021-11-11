import { Mail } from '@mui/icons-material';
import { Button, FormControl, TextField } from '@mui/material';
import React, { useState } from 'react'

const SignUpPage = () => {
    const [info, setInfo] = useState([{eMail: '', login: '', password: ''}])
    const handleChange = (e) => {
        const field = e.currentTarget;
        const type = field.id;
        setInfo({...info.eMail, ...info.Login, eMail: field.value})
            // const [eMail, setEMailToState] = useState(field.id)   
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
                />
                <Button>
                    Sign Up
                </Button>
        </div>
    )
}
export default SignUpPage;