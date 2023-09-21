import { Box, Card, CardContent, Grid } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import AuthWithSocial from './AuthWithSocial';
import LoginForm from './LoginForm';
import '../../Custom.css';
import Theme from '../../utils/theme';
export default function Login() {
    const { t, i18n } = useTranslation();



    //   const [buttonCheck, setButtonCheck] = useState(false);
    //   const reRef = useRef();
    //   const ReCaptcha = async () => {
    //     const token = await reRef.current.executeAsync();
    //     reRef.current.reset();
    //     var response = await Api.post('/Recaptcha/Validate', {
    //       token: token
    //     }).then(r => r.data).catch(console.error)
    //     if (response.result.success == true) {
    //       return true;
    //     }
    //     else {
    //       setButtonCheck(!buttonCheck); toast.error("Google Recaptcha Hatası Alındı");
    //     }
    //   }




    const backgroundImage = {
        backgroundImage: 'url(/dincer.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100vw',
    };


    return (
        <>
            <div className="LoginPage" style={{ height: '100vh', width: '100vw' }}>
                <Box sx={{ flexGrow: 1 }} style={{ padding: 1 }} >
                    <Grid container spacing={1}>

                        <Grid item sm={4} xs={4}>
                            <div style={{}} >
                                <img id='DincerLogo'
                                    alt='Logo'
                                    src={""}
                                />
                            </div>
                        </Grid>
                        <Grid item sm={4} xs={12}>
                            <Card elevation={20} sx={{ maxWidth: 450, margin: 'auto', borderRadius: 3, p: 3 }} style={{ marginTop: "9rem", background: 'rgba(255, 255, 255, 0.9)' }}>
                                <CardContent>

                                    <h2 style={{ textAlign: "center" }}>Welcome</h2>

                                    <LoginForm />
                                </CardContent>
                                <AuthWithSocial />
                            </Card>
                        </Grid>
                        <Grid item sm={4} xs={4}>
                            <div id='GonderiTakipAdi' style={{ color: "#0a295f" }} >
                                <h1>UI Design</h1>
                                <Theme/>
                            </div>
                        </Grid>

                        {/* backgroundImage: "linear-gradient(to right, #0a295f , #01afeb)", */}

                    </Grid>


                </Box >
                {/* <ReCAPTCHA
        sitekey={"6LeFfC0mAAAAABJmDD7CUtquCubYoNELD6-1XpXM"}
        size="invisible"
        ref={reRef}
      /> */}
            </div>
        </>
    );
}

