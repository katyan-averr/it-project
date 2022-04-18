import './App.css';
import Button from '@material-ui/core/Button';
import { AppBar, Container, IconButton, Toolbar, Box, Paper, Typography, MenuItem } from '@material-ui/core';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import PersonIcon from '@mui/icons-material/Person';
import {makeStyles} from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import { Link } from "react-router-dom";
import React from 'react';
import TextField from '@material-ui/core/TextField';
import AttachFileIcon from '@mui/icons-material/AttachFile';

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
          <IconButton edge="start" color="inherit" aria-label='menu' style={{color: "black", marginLeft:"375px"}}>
            <PersonIcon fontSize='large'/>
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
    
    <main>

      <Paper className={classes.mainFeaturesPost} style={{backgroundImage: "url(https://tradeforexblog.com/images/iqcent/1624320455263/original/how-to-contact-iqcent-support.jpg)"}}>
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
      </Paper>
    </main>
    </>
    );
}

export default AppInExchange;