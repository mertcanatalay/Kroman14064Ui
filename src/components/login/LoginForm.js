import React, { useState } from 'react';
import { Button, FormControl, Grid, IconButton, InputAdornment, InputLabel, OutlinedInput } from "@mui/material";
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import '../../Custom.css';
import { useNavigate } from 'react-router-dom';

export default function LoginForm() {

    const { t, i18n } = useTranslation();
    const navigate = useNavigate();

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [enterClick, setEnterClick] = useState(false);
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            setEnterClick(true)
        }
        else {
            setEnterClick(false);
        }
    };

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <>
            <Grid container spacing={1}>
                <Grid item sm={12} xs={12}>
                    <FormControl fullWidth size="medium" id='DincerForm'>
                        <InputLabel htmlFor="outlined-adornment-password">E-Posta</InputLabel>
                        <OutlinedInput
                            style={{ borderRadius: 8 }}
                            onKeyDown={handleKeyDown}
                            id='Email'
                            size="medium"
                            autoComplete="false"
                            label="E-Posta"
                            fullWidth
                            value={email} onChange={(e) => { setEmail(e.target.value) }} />
                    </FormControl>
                </Grid>
                <Grid item sm={12} xs={12}>
                    <FormControl fullWidth size="medium" id='DincerForm'>
                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                        <OutlinedInput
                            style={{ borderRadius: 8 }}
                            size="medium"
                            id="outlined-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Password"
                            value={password} onChange={(e) => { setPassword(e.target.value) }}
                        />
                    </FormControl>
                </Grid>

                <Grid item sm={8} xs={12}>
                    <FormControl fullWidth id='DincerForm'>
                        <Button className="Login_btn" style={{ borderRadius: 8 }} size='large' variant="contained" onClick={() => { navigate("/") }}>Login</Button>
                    </FormControl>
                </Grid>
                <Grid item sm={4} xs={12}>
                    <FormControl fullWidth id='DincerForm'>
                        <Button className="Login_btn" style={{ borderRadius: 8 }} size='large' variant="contained" onClick={() => { navigate("/auth/register") }}>Register</Button>
                    </FormControl>
                </Grid>

            </Grid>
        </>
    );
}