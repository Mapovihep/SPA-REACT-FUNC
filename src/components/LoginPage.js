import { Button, FormControl, TextField } from '@mui/material';
import { flexbox } from '@mui/system';
import React from 'react'

const LoginPage = () => {
    return(
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", margin: "20px"}}>
            <FormControl 
                style={{display: "flex", flexDirection: "column"}}
            >
                <TextField
                    id="outlined-name"
                    label="E-Mail"
                    // onChange={handleChange}
                    style={{margin: "10px 0"}}
                />
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
                <TextField
                    id="outlined-name"
                    label="Repeat Password"
                    style={{margin: "10px 0"}}
                    // onChange={handleChange}
                />
                <Button>
                    Зарегистрироваться
                </Button>
            </FormControl>
        </div> 
    )
}
export default LoginPage;