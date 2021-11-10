import { Button, FormControl, TextField } from '@mui/material';
import React from 'react'

const SignUpPage = () => {
    return(
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", margin: "20px"}}>
            <FormControl 
                style={{display: "flex", flexDirection: "column"}}
            >
                <TextField
                    id="outlined-name"
                    label="Login"
                    // onChange={handleChange}
                    style={{margin: "10px 0"}}
                />
                <TextField
                    id="outlined-name"
                    label="Password"
                    style={{margin: "10px 0"}}
                    // onChange={handleChange}
                />
                <Button>
                    Войти
                </Button>
            </FormControl>
        </div>
    )
}
export default SignUpPage;