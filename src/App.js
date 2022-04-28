import './App.css';
import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import { AppBar, Container, IconButton, Toolbar, Box, Paper, Grid, ClickAwayListener, Grow, Popper, MenuItem, MenuList} from '@material-ui/core';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import PersonIcon from '@mui/icons-material/Person';
import {makeStyles} from '@material-ui/core/styles';
import { Link } from "react-router-dom";


const useStyles = makeStyles((theme) =>({
  root:{
    flexGrow:1
  },
  menuButton:{
    marginRight: theme.spacing(1)
  },
  title:{
    flexGrow:1
  },
  mainFeaturesPost:{
    position: "relative",
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundSize:"cover",
    backgroundRepeat:"no-repeat",
    backgroundPosition: "center",
    padding: theme.spacing(24)
  },
  mainFeaturesPostContent:{
    position: "relative",
    padding: theme.spacing(34)
  }
}))


function App(){
  const classes = useStyles();

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  }
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return(
    <>

    <AppBar position="static" style={{backgroundColor:"#A4C8EC", background:"rgba(164, 200, 236, 0.75)" }}>
    <Container fixed>
        <Toolbar>
            <MiscellaneousServicesIcon fontSize='large' style={{color: "black"}}/>
            <Button color="inherit" variant='contained' style={{marginLeft:"10px", marginRight:"10px", color: "black"}}>Каталог</Button>
              <Link to="/myApplications">
                <Button color="inherit" variant='outlined' style={{marginLeft:"10px", marginRight:"10px",color: "black"}} >Мои заявки</Button>
              </Link>
              <Link to="/appExchange">
                <Button color="inherit" variant='outlined' style={{marginLeft:"10px", marginRight:"10px", color: "black"}}>Биржа заявок</Button>
              </Link>
              <Link to="/appInProgress">
              <Button color="inherit" variant='outlined' style={{marginLeft:"10px", marginRight:"10px", color: "black"}}>Выполняемые заявки</Button> 
              </Link>     
              
        <IconButton
          ref={anchorRef}
          id="composition-button"
          aria-controls={open ? 'composition-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
          edge="start" color="inherit" aria-label='menu' style={{color: "black", marginLeft:"375px"}}
        >
          <PersonIcon fontSize='large'/>
        </IconButton>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="bottom-start"
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === 'bottom-start' ? 'left top' : 'left bottom',
              }}
            >
              <Paper style={{backgroundColor:"#A4C8EC"}}>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={handleListKeyDown}
                  >
                    <Link to="/myProfile">
                    <MenuItem onClick={handleClose}>Мой аккаунт</MenuItem>
                    </Link>
                    <MenuItem onClick={handleClose}>Выйти</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>

        </Toolbar>
      </Container>
    </AppBar>
    
    <main >
      <div style={{marginTop:"40px",backgroundImage: "url(https://tradeforexblog.com/images/iqcent/1624320455263/original/how-to-contact-iqcent-support.jpg)", backgroundSize: 'cover', width: '100%', height: '90vh'}}>
      <Container maxWidth="md" >
        <Grid container spacing={10}>
          <Grid item xs={12} sm={6} md={4}>
              <Button variant='contained' style={{marginTop:"130px", width: "230px", height: "90px", backgroundColor:"#A4C8EC", background:"rgba(164, 200, 236, 0.75)" }}>
                  Проблема с рабочим местом
                </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
              <Button variant='contained' style={{marginTop:"130px", width: "230px", height: "90px", backgroundColor:"#A4C8EC", background:"rgba(164, 200, 236, 0.75)" }}>
                  Проблема с настроением
                </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
              <Button variant='contained' style={{marginTop:"130px", width: "230px", height: "90px", backgroundColor:"#A4C8EC", background:"rgba(164, 200, 236, 0.75)" }}>
                  Проблема с принтером
                </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
              <Button variant='contained' style={{marginTop:"50px", width: "230px", height: "90px", backgroundColor:"#A4C8EC", background:"rgba(164, 200, 236, 0.75)" }}>
                  Настройка удаленного доступа
                </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
              <Button variant='contained' style={{marginTop:"50px", width: "230px", height: "90px", backgroundColor:"#A4C8EC", background:"rgba(164, 200, 236, 0.75)" }}>
                  Проблема с программой
                </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
          <Link to="/createApplications">
              <Button variant='contained' style={{marginTop:"50px", width: "230px", height: "90px", backgroundColor:"#A4C8EC", background:"rgba(164, 200, 236, 0.75)" }}>
                  Другое
                </Button>
              </Link> 
          </Grid>
        </Grid>
      </Container>
  </div>

      {/* <Paper className={classes.mainFeaturesPost} style={{backgroundImage: "url(https://tradeforexblog.com/images/iqcent/1624320455263/original/how-to-contact-iqcent-support.jpg)"}}>
      
      </Paper> */}
    </main>
    </>
    );
}

export default App;