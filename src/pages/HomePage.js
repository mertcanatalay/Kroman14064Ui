import React, { useEffect, useState } from 'react'
import Sidenav from '../Sidenav'
import { Backdrop, Box, Card, CardContent, CircularProgress, Divider, Grid, Paper, Typography } from '@mui/material'
import '../Custom.css';
import { useTranslation } from 'react-i18next';
import Api from '../api/Api';

function HomePage() {

  const { t, i18n } = useTranslation();

  const [loading, setLoading] = useState(false)
  const [homeData, setHomeData] = useState([]);

  const [activeAppication, setActiveAppication] = useState("");
  const [activeIntegration, setActiveIntegration] = useState("");
  const [activeMobileAppication, setActiveMobileAppication] = useState("");
  const [developedAppication, setDevelopedAppication] = useState("");
  const [developedIntegration, setDevelopedIntegration] = useState("");
  const [developedMobileAppication, setDevelopedMobileAppication] = useState("");
  const [dailyIncomingData, setDailyIncomingData] = useState("");
  const [dailyProcessedData, setDailyProcessedData] = useState("");
  const [dailyQueryData, setDailyQueryData] = useState("");

  const loadData = async () => {
    setLoading(true);
    var response = await Api.post('home', {
    }).then(r => r.data).catch(console.error)
    if (response && response.success) {

      setActiveAppication(response.data[0].Application)
      setActiveIntegration(response.data[0].Integration)
      setActiveMobileAppication(response.data[0].MobilApplication)
      setDevelopedAppication(response.data[0].DevApplication)
      setDevelopedIntegration(response.data[0].DevIntegrastion)
      setDevelopedMobileAppication(response.data[0].DevMobilApplication)
      setDailyIncomingData(response.data[0].DailyIncomeData)
      setDailyProcessedData(response.data[0].DailyProcessedData)
      setDailyQueryData(response.data[0].DailyQueriedData);

    }
    else (
      console.log("başarısız")
    )
    setLoading(false)
  }
  useEffect(() => { loadData() }, []);


  return (
    <>

      <Box component="main" sx={{ flexGrow: 1, p: 3, display: "flex", mt: 10 }}>

        <Backdrop sx={{ zIndex: theme => theme.zIndex.drawer + 1, backdropFilter: 'blur(10px)' }} open={loading}>
          <CircularProgress sx={{ color: 'white' }} />
        </Backdrop>

        <Typography mt={1} >
          <Grid container spacing={2}>
            <Grid item sm={6} xs={12} md={4}>
              <Paper elevation={3} sx={{
                display: 'flex',
                '& > :not(style)': {
                  m: 1,
                  width: 350,
                  height: 170,
                },
              }} style={{ borderRadius: 10 }}>
                <img src="/4.png" alt="Logo" id='IconLogo' />
                <Grid container>
                  <Grid item sm={12} xs={12}>
                    <h2>{t('ACTIVE_APPLICATION')}</h2>
                    <Divider />
                  </Grid>
                  <Grid item sm={12} xs={12}>
                    <Typography variant="subtitle2" gutterBottom style={{ fontSize: 30, textAlign: "center" }}>
                      {activeAppication}
                    </Typography>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item sm={6} xs={12} md={4}>
              <Paper elevation={3} sx={{
                display: 'flex',
                '& > :not(style)': {
                  m: 1,
                  width: 350,
                  height: 170,
                },
              }} style={{ borderRadius: 10 }}>
                <img src="/10.png" alt="Logo" id='IconLogo' />
                <Grid container>
                  <Grid item sm={12} xs={12}>
                    <h2>{t('ACTIVE_INTEGRATION')}</h2>
                    <Divider />
                  </Grid>
                  <Grid item sm={12} xs={12}>
                    <Typography variant="subtitle2" gutterBottom style={{ fontSize: 30, textAlign: "center" }}>
                      {activeIntegration}
                    </Typography>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item sm={6} xs={12} md={4}>
              <Paper elevation={3} sx={{
                display: 'flex',
                '& > :not(style)': {
                  m: 1,
                  width: 350,
                  height: 170,
                },
              }} style={{ borderRadius: 10 }}>
                <img src="/5.png" alt="Logo" id='IconLogo' />
                <Grid container>
                  <Grid item sm={12} xs={12}>
                    <h2>{t('ACTIVE_MOBILE_APPLICATION')}</h2>
                    <Divider />
                  </Grid>
                  <Grid item sm={12} xs={12}>
                    <Typography variant="subtitle2" gutterBottom style={{ fontSize: 30, textAlign: "center" }}>
                      {activeMobileAppication}
                    </Typography>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item sm={6} xs={12} md={4}>
              <Paper elevation={3} sx={{
                display: 'flex',
                '& > :not(style)': {
                  m: 1,
                  width: 350,
                  height: 170,
                },
              }} style={{ borderRadius: 10 }}>
                <img src="/3.png" alt="Logo" id='IconLogo' />
                <Grid container>
                  <Grid item sm={12} xs={12}>
                    <h2>{t('DEVELOPED_APPLICATION')}</h2>
                    <Divider />
                  </Grid>
                  <Grid item sm={12} xs={12}>
                    <Typography variant="subtitle2" gutterBottom style={{ fontSize: 30, textAlign: "center" }}>
                      {developedAppication}
                    </Typography>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item sm={6} xs={12} md={4}>
              <Paper elevation={3} sx={{
                display: 'flex',
                '& > :not(style)': {
                  m: 1,
                  width: 350,
                  height: 170,
                },
              }} style={{ borderRadius: 10 }}>
                <img src="/11.png" alt="Logo" id='IconLogo' />
                <Grid container>
                  <Grid item sm={12} xs={12}>
                    <h2>{t('DEVELOPED_INTEGTRATION')}</h2>
                    <Divider />
                  </Grid>
                  <Grid item sm={12} xs={12}>
                    <Typography variant="subtitle2" gutterBottom style={{ fontSize: 30, textAlign: "center" }}>
                      {/* {arrivalAddress + "/" + unloadingCounty} */}
                      {developedIntegration}
                    </Typography>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item sm={6} xs={12} md={4}>
              <Paper elevation={3} sx={{
                display: 'flex',
                '& > :not(style)': {
                  m: 1,
                  width: 350,
                  height: 170,
                },
              }} style={{ borderRadius: 10 }}>
                <img src="/2.png" alt="Logo" id='IconLogo' />
                <Grid container>
                  <Grid item sm={12} xs={12}>
                    <h2>{t('DEVELOPED_MOBILE_APPLICATION')}</h2>
                    <Divider />
                  </Grid>
                  <Grid item sm={12} xs={12}>
                    <Typography variant="subtitle2" gutterBottom style={{ fontSize: 30, textAlign: "center" }}>
                      {developedMobileAppication}
                    </Typography>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item sm={6} xs={12} md={4}>
              <Paper elevation={3} sx={{
                display: 'flex',
                '& > :not(style)': {
                  m: 1,
                  width: 350,
                  height: 170,
                },
              }} style={{ borderRadius: 10 }}>
                <img src="/12.png" alt="Logo" id='IconLogo' />
                <Grid container>
                  <Grid item sm={12} xs={12}>
                    <h2>{t('DAILY_INCOMING_DATA')}</h2>
                    <Divider />
                  </Grid>
                  <Grid item sm={12} xs={12}>
                    <Typography variant="subtitle2" gutterBottom style={{ fontSize: 30, textAlign: "center" }}>
                      {dailyIncomingData.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    </Typography>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item sm={6} xs={12} md={4}>
              <Paper elevation={3} sx={{
                display: 'flex',
                '& > :not(style)': {
                  m: 1,
                  width: 350,
                  height: 170,
                },
              }} style={{ borderRadius: 10 }}>
                <img src="/8.png" alt="Logo" id='IconLogo' />
                <Grid container>
                  <Grid item sm={12} xs={12}>
                    <h2>{t('DAILY_PROCESSED_DATA')}</h2>
                    <Divider />
                  </Grid>
                  <Grid item sm={12} xs={12}>
                    <Typography variant="subtitle2" gutterBottom style={{ fontSize: 30, textAlign: "center" }}>
                      {dailyProcessedData.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    </Typography>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item sm={6} xs={12} md={4}>
              <Paper elevation={3} sx={{
                display: 'flex',
                '& > :not(style)': {
                  m: 1,
                  width: 350,
                  height: 170,
                },
              }} style={{ borderRadius: 10 }}>
                <img src="/7.png" alt="Logo" id='IconLogo' />
                <Grid container>
                  <Grid item sm={12} xs={12}>
                    <h2>{t('DAILY_QUERY_DATA')}</h2>
                    <Divider />
                  </Grid>
                  <Grid item sm={12} xs={12}>
                    <Typography variant="subtitle2" gutterBottom style={{ fontSize: 30, textAlign: "center" }}>
                      {dailyQueryData.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    </Typography>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Typography>
      </Box>

    </>
  )
}

export default HomePage