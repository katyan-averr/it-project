import './App.css';
import Button from '@material-ui/core/Button';
import { AppBar, Container, IconButton, Toolbar, Paper, Typography, MenuItem } from '@material-ui/core';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import PersonIcon from '@mui/icons-material/Person';
import {makeStyles} from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import { Link } from "react-router-dom";
import React from 'react';
import TextField from '@material-ui/core/TextField';
import { useState } from "react";
import { ClickAwayListener, Grow, Popper, MenuList} from '@material-ui/core';

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
        marginBottom: theme.spacing(4),
        backgroundSize:"cover",
        backgroundRepeat:"no-repeat",
        backgroundPosition: "center",
        padding: theme.spacing(7)
      },
      mainFeaturesPostContent:{
        position: "relative",
        padding: theme.spacing(34)
      }
}))


function AppInExchange(){
  const classes = useStyles();

  const [status, setStatus] = React.useState('');

  const Statuses = (event) => {
    setStatus(event.target.value);
  };

  const [date, setDate] = React.useState('');

  const Dates = (event) => {
    setDate(event.target.value);
  };

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
            <Link to="/">
                <Button color="inherit" variant='outlined' style={{marginLeft:"10px", marginRight:"10px", color: "black"}}>Каталог</Button>
              </Link>
            <Link to="/myApplications">
                <Button color="inherit" variant='outlined' style={{marginLeft:"10px", marginRight:"10px",color: "black"}} >Мои заявки</Button>
              </Link>
              <Link to="/appExchange">
                <Button color="inherit" variant='contained' style={{marginLeft:"10px", marginRight:"10px", color: "black"}}>Биржа заявок</Button>
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
    
    <main>

    <div style={{backgroundImage: "url(https://tradeforexblog.com/images/iqcent/1624320455263/original/how-to-contact-iqcent-support.jpg)", backgroundSize: 'cover', width: '100%', height: '90vh'}}>
      <Container maxWidth="md" style={{position: "relative", backgroundColor:"rgba(164, 200, 236, 0.75)", width:"880px"}}>
        <div>     
            <TextField disabled id="filled-basic" variant="filled" style={{marginTop:"10px", width:"830px"}} />
        </div>
        <div>    
            <TextField disabled id="filled-multiline-static" multiline rows={19} variant="filled" style={{width:"830px", marginTop:"10px"}}/>
        </div>     
        <div>
            <Button color="4c7bd9" variant='contained' style={{marginTop:"10px", marginBottom:"10px", marginLeft:"10px", marginRight:"10px", position: "relative", left: "420px"}}>Переадресовать</Button>
            <Button color="4c7bd9" variant='contained' style={{marginTop:"10px", marginBottom:"10px", marginLeft:"10px", marginRight:"10px", position: "relative", left: "420px"}}>Назначить</Button>
            <Button color="4c7bd9" variant='contained' style={{marginTop:"10px", marginBottom:"10px", marginLeft:"10px", marginRight:"10px", position: "relative", left: "420px"}}>Взять</Button>
        </div>     
      </Container>
      </div>
    </main>
    </>
    );
}

export default AppInExchange;