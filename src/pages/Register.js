import React, {useState} from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "../styles/index.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../components/AuthContext.tsx";
import LoginAPI from "../components/API/LoginAPI.tsx";
import CreateUser from "../components/API/CreateUserAPI.tsx";
import Animations from "../components/Animations.tsx";

function Register() {
    const [showAnimation, setShowAnimation] = useState(false);
    const { login } = useAuth();
    const navigate = useNavigate();

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
          newErrors.email = "Invalid email format";
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
          CreateUser(formValues.username.trim(),
                     formValues.password.trim(),
                     formValues.email.trim(),
                     formValues.company.trim(),
                     formValues.firstName.trim(),
                     formValues.lastName.trim()
                    )
                    .then(() => {
                        LoginAPI(formValues.username.trim(),
                        formValues.password.trim(),
                       )
                       .then(data => {
                           // calls the Authentication, with the data and a token to "persist" the login
                           login(data.user, data.token);
                           setShowAnimation(true);
                  
                           setTimeout(() => {
                                navigate("/evaluation");
                           }, 2000);
                       })
                       .catch(error => {
                           console.error("Error: ", error.message);
   
                           if (error.message.includes("Incorrect"))
                           {
                               setErrors(prevErrors => ({ ...prevErrors, username: "Username or password is incorrect" }));
                               setErrors(prevErrors => ({ ...prevErrors, password: "Username or password is incorrect" }));
                           }
                       });
                    })
                    .catch(error => {
                        console.error("Error: ", error.message);

                        if (error.message.includes("username"))
                        {
                            setErrors(prevErrors => ({ ...prevErrors, username: "Username already exists" }));
                        }
                        if (error.message.includes("email"))
                        {
                            setErrors(prevErrors => ({ ...prevErrors, email: "Email already exists" }));
                        }
                    });
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
                    <TextField required id="input-username" placeholder="Username" label="Username" error={!!errors.username}
                    value={formValues.username}
                    onChange={handleInputChange("username")}
                    helperText={errors.username || ""}/>
                    <TextField required id="input-emails" placeholder="Email" label="Email" error={!!errors.email}
                    value={formValues.email}
                    onChange={handleInputChange("email")}
                    helperText={errors.email || ""}/>
                </div>
                {showAnimation && (
                    <div className="popup-animation">
                        <Animations animationName="Successful" />
                    </div>
                )}
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