import React, { useState } from 'react';
import { Button, FormControl, Grid, IconButton, InputAdornment, InputLabel, OutlinedInput } from "@mui/material";
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import '../../Custom.css';
import { useNavigate } from 'react-router-dom';
import Api from '../../api/Api';

export default function RegisterForm() {

    const { t, i18n } = useTranslation();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [phone, setPhone] = useState("");



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

    const registerOnClick = async () => {
        var response = await Api.post('api/auth/register', {
            name: name,
            surname: surname,
            email: email,
            phone:phone,
            password: password
        }).then(r => r.data).catch(console.error)
        if (response != null) {
            navigate("/auth/login")
        }
        else {
            console.log("hata alındı")
        };
    }

    return (
        <>
            <Grid container spacing={1}>
                <Grid item sm={6} xs={12}>
                    <FormControl fullWidth size="medium" id='DincerForm'>
                        <InputLabel htmlFor="outlined-adornment-password">Name</InputLabel>
                        <OutlinedInput
                            style={{ borderRadius: 8 }}
                            onKeyDown={handleKeyDown}
                            id='Email'
                            size="medium"
                            autoComplete="false"
                            label="E-Posta"
                            fullWidth
                            value={name} onChange={(e) => { setName(e.target.value) }} />
                    </FormControl>
                </Grid>
                <Grid item sm={6} xs={12}>
                    <FormControl fullWidth size="medium" id='DincerForm'>
                        <InputLabel htmlFor="outlined-adornment-password">Surname</InputLabel>
                        <OutlinedInput
                            style={{ borderRadius: 8 }}
                            onKeyDown={handleKeyDown}
                            id='Email'
                            size="medium"
                            autoComplete="false"
                            label="E-Posta"
                            fullWidth
                            value={surname} onChange={(e) => { setSurname(e.target.value) }} />
                    </FormControl>
                </Grid>
                <Grid item sm={6} xs={12}>
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
                <Grid item sm={6} xs={12}>
                    <FormControl fullWidth size="medium" id='DincerForm'>
                        <InputLabel htmlFor="outlined-adornment-password">Phone</InputLabel>
                        <OutlinedInput
                            type={"number"}
                            style={{ borderRadius: 8 }}
                            onKeyDown={handleKeyDown}
                            id='Email'
                            size="medium"
                            autoComplete="false"
                            label="E-Posta"
                            fullWidth
                            value={phone} onChange={(e) => { setPhone(e.target.value) }} />
                    </FormControl>
                </Grid>
                <Grid item sm={6} xs={12}>
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
                <Grid item sm={6} xs={12}>
                    <FormControl fullWidth size="medium" id='DincerForm'>
                        <InputLabel htmlFor="outlined-adornment-password">Password Repeat</InputLabel>
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

                <Grid item sm={12} xs={12}>
                    <FormControl fullWidth id='DincerForm'>
                        <Button className="Login_btn" style={{ borderRadius: 8 }} size='large' variant="contained" onClick={() => { registerOnClick() }}>Approve</Button>
                    </FormControl>
                </Grid>
            </Grid>
        </>
    );
}