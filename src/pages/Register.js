import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import "../styles/index.css";

function Register() {
    return (
        <div className="register">
            <h1>Registration Form</h1>
            <Box
                component="form"
                sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
                noValidate
                autoComplete="off">
                <br/>
                <div className="registration-fields">
                    <TextField required id="input-username" placeholder="Username" label="Username"/>
                    <TextField required id="input-emails" placeholder="Email" label="Email"/>
                </div>
                <div className="registration-fields">
                <TextField required id="input-password" label="Password" placeholder="Password" type="password" defaultValue=""/>
                <TextField required id="input-repeatedpassword" label="Repeat Password" placeholder="Repeat Password" type="password" defaultValue=""/>
                </div>
                <div className="registration-fields">
                <TextField id="input-company" placeholder="Company" label="Company (optional)"/>
                </div>
                <div className="registration-fields">
                <TextField required id="input-firstname" placeholder="First Name" label="First Name"/>
                <TextField required id="input-lastname" placeholder="Last Name" label="Last Name"/>
                </div>

            </Box>
        </div>
    )
}

export default Register;