import { Box, Card, CardContent, Grid } from "@mui/material";
import Theme from "../../utils/theme";
import RegisterForm from './RegisterForm';

export default function Register() {

    return (<>
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
                        <Card elevation={20} sx={{ margin: 'auto', borderRadius: 3, p: 3 }} style={{ marginTop: "9rem", background: 'rgba(255, 255, 255, 0.9)' }}>
                            <CardContent>

                                <h2 style={{ textAlign: "center" }}>Register</h2>

                                <RegisterForm />
                            </CardContent>

                        </Card>
                    </Grid>
                    <Grid item sm={4} xs={4}>
                        <div id='GonderiTakipAdi' style={{ color: "#0a295f" }} >
                            <h1>UI Design</h1>
                            <Theme />
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
    </>)

};