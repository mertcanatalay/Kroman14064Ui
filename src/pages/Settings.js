import React, { useEffect, useState } from 'react'
import Sidenav from '../Sidenav'
import { Backdrop, Box, Button, Card, CardContent, CardMedia, CircularProgress, Divider, FormControl, Grid, InputLabel, MenuItem, Paper, Select, TextField, Typography } from '@mui/material'
import { useLocation, useParams, useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Api from '../api/Api';


function Settings() {
  const { t, i18n } = useTranslation();
  const { pathname } = useLocation();

  const [loading, setLoading] = useState(false)
  const [emissionType, setEmissionType] = useState("");
  const [emissionTypeList, setEmissionTypeList] = useState([]);

  const [directEmissionType, setDirectEmissionType] = useState("");
  const [directEmissionTypeList, setDirectEmissionTypeList] = useState([]);

  const loadEmissionList = async () => {
    setLoading(true);
    var response = await Api.post('emission/list', {

    }).then(r => r.data).catch(console.error)
    if (response && response.success) {
      setEmissionTypeList(response.data);
    }
    else (
      console.log("başarısız")
    )
    setLoading(false)
  }

  const loadDirectEmissionList = async () => {
    
    setLoading(true);
    var response = await Api.post('emission/direct/list', {

    }).then(r => r.data).catch(console.error)
    if (response && response.success) {
      setDirectEmissionTypeList(response.data);
    }
    else (
      console.log("başarısız")
    )
    setLoading(false)
  }
  //useEffect(() => { loadEmissionList(); }, []);
  useEffect(() => { if (emissionType == "2854D141-57C4-470F-8A9C-DFA2F71B367B") loadDirectEmissionList(); }, [emissionType]);


  return (
    <>
      <Box component="main" sx={{ flexGrow: 1, p: 3, display: "flex", mt: 10 }}>


        <Backdrop sx={{ zIndex: theme => theme.zIndex.drawer + 1, backdropFilter: 'blur(10px)' }} open={loading}>
          <CircularProgress sx={{ color: 'white' }} />
        </Backdrop>

        <Grid container spacing={2}>

          <Grid item md={12} sm={12} xs={12}>
            <Card elevation={3} sx={{ margin: 'auto', borderRadius: 3, p: 1 }} style={{ marginTop: 2, marginBottom: 20 }}>
              <CardContent>
                <Grid container spacing={2}>

                
                  <Grid item sm={3} xs={12} hidden={pathname != "/dogrudan"}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">Doğrudan Emisyon Tipi Seçiniz</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={directEmissionType}
                        label="Doğrudan Emisyon Tipi Seçiniz"
                        onChange={(e) => setDirectEmissionType(e.target.value)}
                      >
                        {Array.isArray(directEmissionTypeList) && directEmissionTypeList.map((item) => {
                          return <MenuItem key={item.Id} value={item.Id}>{item.Name}</MenuItem>
                        })}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item sm={3} xs={12}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">Age</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        //value={age}
                        label="Age"
                      //onChange={handleChange}
                      >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item sm={2} xs={12}>
                    <FormControl fullWidth>
                      <TextField id="outlined-basic" label="Faliyet Verisi" variant="outlined" type='number' />
                    </FormControl>
                  </Grid>
                  <Grid item sm={1} xs={12} style={{ textAlign: 'center', marginTop: 5 }}>
                    <FormControl>
                      <Button variant="contained">Hesapla</Button>
                    </FormControl>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          <Grid item md={12} sm={12} xs={12}>
            <Card elevation={3} sx={{ margin: 'auto', borderRadius: 3, p: 1, minHeight: 600 }} style={{ marginTop: 2, marginBottom: 20 }}>
              <CardContent>
                <Grid container spacing={2}>
                  asd
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Settings