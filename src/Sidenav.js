import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import DashboardIcon from '@mui/icons-material/Dashboard';
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, Card, Menu, MenuItem, Paper, Tooltip } from '@mui/material';
import MuiAppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import MuiDrawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { styled, useTheme } from '@mui/material/styles';
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Api from './api/Api';
import Theme from './utils/theme';
import './Custom.css';

const drawerWidth = 280;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    marginTop: "5px",
    height: "80px"
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

export default function Sidenav() {
    const theme = useTheme();
    const [open, setOpen] = useState(true);
    const [headerName, setHeaderName] = useState("");
    const [sideData, setSideData] = useState([]);

    const navigate = useNavigate();

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const [anchorEl, setAnchorEl] = useState(null);
    const openLanguage = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    const { t, i18n } = useTranslation();

    const handleLanguageClick = async (lang) => {
        i18n.changeLanguage(lang)
        handleClose()
    }

    //const lang = i18n.language == 'tr-TR' ? 'tr' : (i18n.language == 'en-EN' ? 'en' : i18n.language)
    const lang = i18n.language.split("-")[0]

    const loadData = async () => {
        //setLoading(true);
        var response = await Api.post('emission/list', {

        }).then(r => r.data).catch(console.error)
        if (response && response.success) {
            console.log("başarılı")
            setSideData(response.data)
        }
        else (

            setSideData([])
        )
        //setLoading(false)
    }
    useEffect(() => { loadData() }, [lang]);

    const { pathname } = useLocation();
    //i18n.language == "tr-TR" ? "TR" : (i18n.language == "en-EN" ? "EN" : i18n.language.toUpperCase())
    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />

                <AppBar className='AppBar' position="fixed" open={open} sx={{ height: "85px" }} >
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            sx={{
                                marginRight: 5,
                                ...(open && { display: 'none' }),
                            }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography className="AppBarTitle" variant="h5" noWrap component="div" style={{ width: "100%", marginTop: 15 }}>
                            {t('Kroman Çelik')} - {pathname == "/" ? t("HOME_PAGE") : headerName}
                        </Typography>

                        <Box sx={{ alignItems: 'center', textAlign: 'center', width: "100%", marginTop: 2 }}>
                            <div style={{ float: "right", marginLeft: 2 }}>
                                <Theme />
                            </div>

                            <Tooltip title={t('LANGUAGE')}>
                                <IconButton
                                    onClick={handleClick}
                                    size="small"
                                    sx={{ ml: 2 }}
                                    aria-controls={open ? 'account-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                    style={{ float: "right" }}
                                >
                                    <Avatar sx={{ width: 42, height: 42, backgroundColor: "#0a295f" }}>{i18n.language.split("-")[0].toUpperCase()}</Avatar>
                                </IconButton>
                            </Tooltip>
                        </Box>
                        <Menu
                            anchorEl={anchorEl}
                            id="account-menu"
                            open={openLanguage}
                            onClose={handleClose}
                            onClick={handleClose}
                            PaperProps={{
                                elevation: 0,
                                sx: {
                                    overflow: 'visible',
                                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                    mt: 1.5,
                                    '& .MuiAvatar-root': {
                                        width: 32,
                                        height: 32,
                                        ml: -0.5,
                                        mr: 1,
                                    },
                                    '&:before': {
                                        content: '""',
                                        display: 'block',
                                        position: 'absolute',
                                        top: 0,
                                        right: 14,
                                        width: 10,
                                        height: 10,
                                        bgcolor: 'background.paper',
                                        transform: 'translateY(-50%) rotate(45deg)',
                                        zIndex: 0,
                                    },
                                },
                            }}
                            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                        >
                            <MenuItem onClick={() => { handleLanguageClick('tr') }}>
                                {t('TURKISH')}
                            </MenuItem>
                            <MenuItem onClick={() => { handleLanguageClick('en') }}>
                                {t('ENGLISH')}
                            </MenuItem>

                        </Menu>

                    </Toolbar>
                </AppBar>

                <Drawer variant="permanent" open={open}  >
                    <DrawerHeader>
                        <img style={{ maxHeight: "40px", padding: "1px" }}
                            alt='Logo'
                            className='h-35px logo'
                            src={"https://www.kromancelik.com.tr/medya/Kroman%C3%87elik_Logo.png"}
                        />
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'rtl' ? <ChevronRightIcon style={{ color: "white" }} /> : <ChevronLeftIcon style={{ color: "white" }} />}
                        </IconButton>
                    </DrawerHeader>
                    <Divider />
                    <List >
                        {/* <ListItem disablePadding sx={{ display: 'block' }} onClick={() => { navigate("/") }}>
                            <ListItemButton sx={{ '&:hover': { backgroundColor: "#01afeb", }, borderRadius: 4, minHeight: 55, justifyContent: open ? 'initial' : 'center', px: 2.5, }}>
                                <ListItemIcon sx={{ minWidth: 0, mr: open ? 5 : 'auto', justifyContent: 'center', }} >
                                    {open ? "" : <DashboardIcon style={{ color: "white", width: 38, height: 38 }} />}
                                </ListItemIcon>
                                <ListItemText primary={t('HOME_PAGE')} sx={{ opacity: open ? 1 : 0 }} />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding sx={{ display: 'block' }} onClick={() => { navigate("/about") }}>
                            <ListItemButton sx={{ '&:hover': { backgroundColor: "#01afeb", }, borderRadius: 4, minHeight: 55, justifyContent: open ? 'initial' : 'center', px: 2.5, }}>
                                <ListItemIcon sx={{ minWidth: 0, mr: open ? 5 : 'auto', justifyContent: 'center', }} >
                                    {open ? "" : <DashboardIcon style={{ color: "white", width: 38, height: 38 }} />}
                                </ListItemIcon>
                                <ListItemText primary={t('DESIGN_PAGE')} sx={{ opacity: open ? 1 : 0 }} />
                            </ListItemButton>
                        </ListItem> */}
                        {sideData.map(item => {
                            return <>
                                <ListItem disablePadding sx={{ display: 'block' }} onClick={() => { navigate(item.Path); setHeaderName(item.Name) }}>
                                    <ListItemButton sx={{ '&:hover': { backgroundColor: "#01afeb", }, borderRadius: 4, minHeight: 55, justifyContent: open ? 'initial' : 'center', px: 2.5, }}>
                                        <ListItemIcon sx={{ minWidth: 0, mr: open ? 5 : 'auto', justifyContent: 'center', }} >
                                            {open ? "" : <Avatar sx={{ width: 38, height: 38 }}>{item.Name.slice(0, 1)}</Avatar>}
                                        </ListItemIcon>
                                        <ListItemText primary={item.Name} sx={{ opacity: open ? 1 : 0 }} />
                                    </ListItemButton>
                                </ListItem>
                            </>
                        })}
                    </List>
                    {/* <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List> */}
                    <Card
                        elevation={3}
                        sx={{
                            alignSelf: "center",
                            margin: "auto",
                            marginBottom: "30px",
                            width: 250,
                            height: 60,
                            backgroundColor: "#01afeb",
                            '&:hover': {
                                backgroundColor: 'primary.main',
                                opacity: [0.9, 0.8, 0.7],
                            },
                        }}
                    >
                        <h3 style={{ textAlign: "center", color: "white" }}>14064 Hesaplama Aracı</h3>
                    </Card>
                </Drawer>
                <Outlet />
            </Box>

        </>

    );
}