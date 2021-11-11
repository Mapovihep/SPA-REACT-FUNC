import { Button, FormControl, TextField } from '@mui/material';
import { flexbox } from '@mui/system';
import React from 'react'

const LoginPage = () => {
    return(
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", margin: "20px"}}>
                
                <TextField
                    id="outlined-name"
                    label="Login"
                    style={{margin: "10px 0"}}
                    // onChange={handleChange}
                />
                <TextField
                    id="outlined-name"
                    label="Password"
                    style={{margin: "10px 0"}}
                    // onChange={handleChange}
                />
                <Button>
                    Log In
                </Button>
        </div> 
    )
}
export default LoginPage;