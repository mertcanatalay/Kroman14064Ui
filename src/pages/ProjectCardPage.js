import { Backdrop, Box, Button, Card, CardContent, CardMedia, CircularProgress, Divider, Grid, Paper, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import Api from '../api/Api';
import '../Custom.css';


function ProjectCardPage() {

    const { t, i18n } = useTranslation();
    const { pathname } = useLocation();

    const [loading, setLoading] = useState(false)
    const [visionText, setVisionText] = useState("");
    const [companyTargetsText, setCompanyTargetsText] = useState("");
    const [targetGroupText, setTargetGroupText] = useState("");
    const [productText, setProductText] = useState("");
    const [needsText, setNeedsText] = useState("");
    const [applicationUrl, setApplicationUrl] = useState("");
    const [imagePath, setImagePath] = useState("");



    const [file, setFile] = useState(null)
    const [licanseImageName, setLicanseImageName] = useState("");
    function handleFile(e) {
        var file = e.target.files && e.target.files[0];
        console.log(e.target)
        //if (file && file.type === 'application/pdf') {
        console.log(e.target.files[0])
        setLicanseImageName(e.target.files[0].name);
        setFile(file)
        // }
        // else {
        //hata mesajı
        //      setFile(null)
        // }
    };

    const handleLink = async () => {
        window.open(applicationUrl, '_blank', 'noreferrer')
    }

    //const lang = i18n.language == 'tr-TR' ? 'tr' : (i18n.language == 'en-EN' ? 'en' : i18n.language)
    const lang = i18n.language.split("-")[0]
    const loadData = async () => {
        setLoading(true);
        var response = await Api.post('productCard', {
            Path: pathname.substr(1),
            LangCode: lang
        }).then(r => r.data).catch(console.error)
        if (response && response.success) {
            setVisionText(response.data.data[0].Vision)
            setCompanyTargetsText(response.data.data[0].Goal)
            setTargetGroupText(response.data.data[0].TargetGroup)
            setProductText(response.data.data[0].Product)
            setNeedsText(response.data.data[0].ProvidedBenefit)
            setApplicationUrl(response.data.data[0].AppLink)
            setImagePath(response.data.data[0].ImagePath)
        }
        else (
            console.log("başarısız")
        )
        setLoading(false)
    }
    useEffect(() => { loadData() }, [pathname, lang]);




    return (
        <>
            <Box component="main" sx={{ flexGrow: 1, p: 3, display: "flex", mt: 10 }}>


                <Backdrop sx={{ zIndex: theme => theme.zIndex.drawer + 1, backdropFilter: 'blur(10px)' }} open={loading}>
                    <CircularProgress sx={{ color: 'white' }} />
                </Backdrop>

                <Grid container spacing={2}>
                    <Grid item md={12} sm={12} xs={12}>
                        <Card elevation={3} sx={{ margin: 'auto', borderRadius: 3, p: 1, minHeight: 250 }} style={{ marginTop: 2, marginBottom: 20}}>
                            <CardContent>
                                <Grid container>
                                    <Grid item sm={3} xs={12}>
                                        <Typography sx={{ mb: 1.5, mt: 1.5 }} variant="h4" component="div" >
                                            {t('VISION')}
                                        </Typography>
                                        <Divider sx={{ mr: 3 }} />
                                        <Typography sx={{ mb: 1.5, mt: 1.5 }} color="text.secondary">
                                            {t('WHAT_IS_THE_INTENDED_USE')}
                                            <br />
                                            {t('WHAT_POSSITIVE_CHANGES')}
                                        </Typography>

                                        <Paper elevation={0} sx={{ mt: 3, cursor: 'pointer' }}>
                                            <Button id='GoLink' variant="contained" size='small' component="label" onClick={handleLink} >
                                                {t('GO_LINK')}
                                                {/* <input
                                                    type="file" name="file" onChange={(e) => handleFile(e)} accept="image/png, image/jpeg"
                                                    hidden
                                                /> */}
                                            </Button>

                                        </Paper>

                                    </Grid>
                                    <Divider orientation="vertical" flexItem sx={{mr:2}} />
                                    <Grid item sm={6} xs={12}>
                                        <Typography sx={{ mb: 1.5, mt: 1.5 }} variant="body2">
                                            {<div dangerouslySetInnerHTML={{ __html: visionText }} />}
                                        </Typography>
                                    </Grid>
                                    <Grid item sm={2} xs={12}>
                                        <CardMedia
                                            id='CardMedia'
                                            component="img"
                                            //sx={{ width: 380 }}
                                            image={imagePath}
                                            alt="media"
                                        />
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item md={3} sm={6} xs={12}>
                        <Card elevation={3} sx={{ margin: 'auto', borderRadius: 3, p: 1, minHeight: 500 }}style={{ borderLeftStyle: "solid", borderLeftWidth: "15px", borderLeftColor: "#E97777", borderRadius: 15 }}>
                            <CardContent>
                                <Typography sx={{ mb: 1.5, mt: 1.5 }} variant="h4" component="div" >
                                    {t('COMPANY_TARGETS')}
                                </Typography>
                                <Divider />
                                <Typography sx={{ mb: 1.5, mt: 1.5 }} color="text.secondary">
                                    {t('WHAT_ARE_THE_COMPANY_GOALS')}
                                    <br />
                                    {t('HOW_WILL_IT_BENEFIT_THE_COMPANY')}
                                </Typography>
                                <Divider />
                                <Typography sx={{ mb: 1.5, mt: 1.5 }} variant="body2">
                                    {<div dangerouslySetInnerHTML={{ __html: companyTargetsText }} />}
                                </Typography>
                            </CardContent>
                            {/* <CardActions>
                                    <Button size="small">Learn More</Button>
                                </CardActions> */}
                        </Card>
                    </Grid>

                    <Grid md={3} item sm={6} xs={12}>
                        <Card elevation={3} sx={{ margin: 'auto', borderRadius: 3, p: 1, minHeight: 500 }} style={{ borderLeftStyle: "solid", borderLeftWidth: "15px", borderLeftColor: "#7F669D", borderRadius: 15 }}>
                            <CardContent>
                                <Typography sx={{ mb: 1.5, mt: 1.5 }} variant="h4" component="div" >
                                    {t('TARGET_GROUP')}
                                </Typography>
                                <Divider />
                                <Typography sx={{ mb: 1.5, mt: 1.5 }} color="text.secondary">
                                    {t('WHICH_MARKET_SEGMENTS_DOES_IT_APPEAL_TO')}
                                    <br />
                                    {t('WHO_ARE_THE_TARGET_CUSTOMERS_AND_USERS')}
                                </Typography>
                                <Divider />
                                <Typography sx={{ mb: 1.5, mt: 1.5 }} variant="body2">
                                    {<div dangerouslySetInnerHTML={{ __html: targetGroupText }} />}
                                </Typography>
                            </CardContent>
                            {/* <CardActions>
                                    <Button size="small">Learn More</Button>
                                </CardActions> */}
                        </Card>
                    </Grid>

                    <Grid md={3} item sm={6} xs={12}>
                        <Card elevation={3} sx={{ margin: 'auto', borderRadius: 3, p: 1, minHeight: 500 }} style={{ borderLeftStyle: "solid", borderLeftWidth: "15px", borderLeftColor: "#6096B4", borderRadius: 15 }}>
                            <CardContent>
                                <Typography sx={{ mb: 1.5, mt: 1.5 }} variant="h4" component="div" >
                                    {t('PRODUCT')}
                                </Typography>
                                <Divider />
                                <Typography sx={{ mb: 1.5, mt: 1.5 }} color="text.secondary">
                                    {t('WHY_QUESTION')}
                                    <br />
                                    {t('WHAT_ATE_THE_FACTORS_THAT_STAND_OUT')}
                                </Typography>
                                <Divider />
                                <Typography sx={{ mb: 1.5, mt: 1.5 }} variant="body2">
                                    {<div dangerouslySetInnerHTML={{ __html: productText }} />}
                                </Typography>
                            </CardContent>
                            {/* <CardActions>
                                    <Button size="small">Learn More</Button>
                                </CardActions> */}
                        </Card>
                    </Grid>

                    <Grid md={3} item sm={6} xs={12}>
                        <Card elevation={3} sx={{ margin: 'auto', borderRadius: 3, p: 1, minHeight: 500 }} style={{ borderLeftStyle: "solid", borderLeftWidth: "15px", borderLeftColor: "#A7727D", borderRadius: 15 }}>
                            <CardContent>
                                <Typography sx={{ mb: 1.5, mt: 1.5 }} variant="h4" component="div" >
                                    {t('NEEDS')}
                                </Typography>
                                <Divider />
                                <Typography sx={{ mb: 1.5, mt: 1.5 }} color="text.secondary">
                                    {t('WHAT_PROBLEMS_DOES_IT_SOLVE')}
                                    <br />
                                    {t('WHAT_BENEFITS_DOES_IT_PROVIDE')}
                                </Typography>
                                <Divider />
                                <Typography sx={{ mb: 1.5, mt: 1.5 }} variant="body2">
                                    {<div dangerouslySetInnerHTML={{ __html: needsText }} />}
                                </Typography>
                            </CardContent>
                            {/* <CardActions>
                                    <Button size="small">Learn More</Button>
                                </CardActions> */}
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default ProjectCardPage