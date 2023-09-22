import React, { useEffect, useState } from 'react'
import Sidenav from '../Sidenav'
import { Backdrop, Box, Button, Card, CardContent, CardMedia, CircularProgress, Divider, FormControl, Grid, InputLabel, MenuItem, Paper, Select, TextField, Typography } from '@mui/material'
import { useLocation, useParams, useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Api from '../api/Api';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';



function Settings() {
  const { t, i18n } = useTranslation();
  const { pathname } = useLocation();

  const [loading, setLoading] = useState(false)
  const [emissionType, setEmissionType] = useState("");
  const [emissionTypeList, setEmissionTypeList] = useState([]);

  const [directEmission, setDirectEmission] = useState("");
  const [directEmissionList, setDirectEmissionList] = useState([]);

  const [directEmissionType, setDirectEmissionType] = useState("");
  const [directEmissionTypeList, setDirectEmissionTypeList] = useState([]);

  const [d, sD] = useState(null);

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
      setDirectEmissionList(response.data);
    }
    else (
      console.log("başarısız")
    )
    setLoading(false)
  }
  //useEffect(() => { loadEmissionList(); }, []);
  useEffect(() => { if (pathname == "/dogrudan") loadDirectEmissionList(); loadDirectEmissionTypeList(); }, [emissionType]);

  const loadDirectEmissionTypeList = async () => {
    setLoading(true);
    var response = await Api.post('emission/oil/list', {
    }).then(r => r.data).catch(console.error)
    if (response && response.success) {
      setDirectEmissionTypeList(response.data);
    }
    else (
      console.log("başarısız")
    )
    setLoading(false)
  }

  const deneme = async () => {
    directEmissionTypeList.map(item => {
      if (directEmissionType == item.Id) {
        return <>
          {
            sD(item.CalorificValue)
          }
        </>

      }

    })
  }


  // function createData(name, calories, fat, carbs, protein) {
  //   return { name, calories, fat, carbs, protein };
  // }

  // const rows = [
  //   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  //   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  //   createData('Eclair', 262, 16.0, 24, 6.0),
  //   createData('Cupcake', 305, 3.7, 67, 4.3),
  //   createData('Gingerbread', 356, 16.0, 49, 3.9),
  // ];

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
                        value={directEmission}
                        label="Doğrudan Emisyon Tipi Seçiniz"
                        onChange={(e) => setDirectEmission(e.target.value)}
                      >
                        {Array.isArray(directEmissionList) && directEmissionList.map((item) => {
                          return <MenuItem key={item.Id} value={item.Id}>{item.Name}</MenuItem>
                        })}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item sm={3} xs={12}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">Tip Seçiniz</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={directEmissionType}
                        label="Tip Seçiniz"
                        onChange={(e) => { setDirectEmissionType(e.target.value) }}
                      >
                        {Array.isArray(directEmissionTypeList) && directEmissionTypeList.map((item) => {
                          return <MenuItem key={item.Id} value={item.Id}>{item.Name}</MenuItem>
                        })}
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
                      <Button variant="contained" onClick={deneme}>Hesapla</Button>
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

                  <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell>Sağdaki değerler</TableCell>
                          <TableCell align="right">CO2</TableCell>
                          <TableCell align="right">Ch4</TableCell>
                          <TableCell align="right">N20</TableCell>
                          <TableCell align="right">Toplam tCO2e</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {/* {rows.map((row) => (
                          <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                          >
                            <TableCell component="th" scope="row">
                              {row.name}
                            </TableCell>
                            <TableCell align="right">{row.calories}</TableCell>
                            <TableCell align="right">{row.fat}</TableCell>
                            <TableCell align="right">{row.carbs}</TableCell>
                            <TableCell align="right">{row.protein}</TableCell>
                          </TableRow>
                        ))} */}
                        <TableRow
                          // key={row.name}
                          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                          <TableCell component="th" scope="row">
                            {/* {row.name} */}
                          </TableCell>
                          <TableCell align="right">{d}</TableCell>
                          <TableCell align="right">{d}</TableCell>
                          <TableCell align="right">{d}</TableCell>
                          <TableCell align="right">{d}</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>

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