import React, {useState} from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import "../styles/index.css";
import { useAuth } from "../components/AuthContext.tsx";
import LoginAPI from "../components/API/LoginAPI.tsx";
import Animations from "../components/Animations.tsx";

function Login() {
    const { login } = useAuth();
    const navigate = useNavigate();
    const [showAnimation, setShowAnimation] = useState(false);

    const [formValues, setFormValues] = useState({
        username: "",
        password: "",
      });

    const [errors, setErrors] = useState({
        username: false,
        password: false,
      });
    
      const validateForm = () => {
        let isValid = true;
        const newErrors = {};

        if (!formValues.username.trim()) {
          newErrors.username = true;
          isValid = false;
        }
        if (!formValues.password.trim()) {
          newErrors.password = true;
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
          LoginAPI(formValues.username.trim(),
                     formValues.password.trim(),
                    )
                    .then(data => {
                        // calls the Authentication, with the data and a token to "persist" the login
                        login(data.user, data.token);
                        setShowAnimation(true);
                  
                          setTimeout(() => {
                            navigate("/todo");
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
        }
      };


    return (
        <div className="login">
            <h1>Login</h1>
            <Box
                component="form"
                sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
                noValidate
                autoComplete="off">
                <br/>
                <div className="login-fields">
                    <TextField id="input-username" placeholder="Username" label="Username" error={!!errors.username}
                    value={formValues.username}
                    onChange={handleInputChange("username")}
                    helperText={errors.username || ""}/>
                </div>
                {showAnimation && (
                    <div className="popup-animation">
                        <Animations animationName="Successful" />
                    </div>
                )}
                <div className="login-fields">
                    <TextField id="input-password" label="Password" placeholder="Password" type="password" defaultValue=""
                    error={!!errors.password}
                    value={formValues.password}
                    onChange={handleInputChange("password")}
                    helperText={errors.password || ""}/>
                </div>
            </Box>
                <Button onClick={handleSubmit} style={{marginTop: '2%'}} variant="contained">Login</Button>
        </div>
    )
}

export default Login;