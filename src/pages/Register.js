import React, {useState} from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import "../styles/index.css";

function Register() {
    const [formValues, setFormValues] = useState({
        username: "",
        email: "",
        password: "",
        repeatedPassword: "",
        firstName: "",
        lastName: "",
        company: "",
      });

    const [errors, setErrors] = useState({
        username: false,
        email: false,
        password: false,
        repeatedPassword: false,
        firstName: false,
        lastName: false,
      });
    
      const validateForm = () => {
        let isValid = true;
        const newErrors = {};
        const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
        const namePattern = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/

        if (!formValues.username.trim()) {
          newErrors.username = true;
          isValid = false;
        }
        if (!formValues.email.trim() || !emailPattern.test(formValues.email.trim())) {
          newErrors.email = true;
          isValid = false;
        }
        if (!formValues.password.trim()) {
          newErrors.password = true;
          isValid = false;
        }
        if (formValues.password !== formValues.repeatedPassword) {
          newErrors.repeatedPassword = true;
          isValid = false;
        }
        if (!formValues.firstName.trim() || !namePattern.test(formValues.firstName.trim())) {
          newErrors.firstName = true;
          isValid = false;
        }
        if (!formValues.lastName.trim() || !namePattern.test(formValues.lastName.trim())){
          newErrors.lastName = true;
          isValid = false;
        }
    
        setErrors(newErrors);
        return isValid;
      };

      const handleInputChange = (field) => (event) => {
        setFormValues({
          ...formValues,
          [field]: event.target.value,
        });
        setErrors({
          ...errors,
          [field]: false,
        });
      };

      const handleSubmit = () => {
        if (validateForm()) {
          //alert("Form submitted successfully!");
        } else {
          //alert("Please fix the errors in the form.");
        }
      };


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
                    <TextField required id="input-username" placeholder="Username" label="Username"            error={errors.username}
                    value={formValues.username}
                    onChange={handleInputChange("username")}
                    helperText={errors.username ? "Username is required" : ""}/>
                    <TextField required id="input-emails" placeholder="Email" label="Email"            error={errors.email}
                    value={formValues.email}
                    onChange={handleInputChange("email")}
                    helperText={errors.email ? "Email is required" : ""}/>
                </div>
                <div className="registration-fields">
                    <TextField required id="input-password" label="Password" placeholder="Password" type="password" defaultValue=""
                    error={errors.password}
                    value={formValues.password}
                    onChange={handleInputChange("password")}
                    helperText={errors.password ? "Password is required" : ""}/>
                    <TextField required id="input-repeatedpassword" label="Repeat Password" placeholder="Repeat Password" type="password" defaultValue=""            error={errors.repeatedPassword}
                    value={formValues.repeatedPassword}
                    onChange={handleInputChange("repeatedPassword")}
                    helperText={
                     errors.repeatedPassword
                        ? "Passwords do not match"
                        : ""
                    }/>
                </div>
                <div className="registration-fields">
                    <TextField required id="input-firstname" placeholder="First Name" label="First Name"            error={errors.firstName}
                    value={formValues.firstName}
                    onChange={handleInputChange("firstName")}
                    helperText={errors.firstName ? "First Name is required" : ""}/>
                    <TextField required id="input-lastname" placeholder="Last Name" label="Last Name"            error={errors.lastName}
                    value={formValues.lastName}
                    onChange={handleInputChange("lastName")}
                    helperText={errors.lastName ? "Last Name is required" : ""}/>
                </div>
                <div className="registration-fields">
                    <TextField id="input-company" placeholder="Company" label="Company (optional)"             value={formValues.company}
                    onChange={handleInputChange("company")}/>
                </div>
            </Box>
                <Button onClick={handleSubmit} style={{marginTop: '2%'}} variant="contained">Register</Button>
        </div>
    )
}

export default Register;