import './App.css';
import Button from '@material-ui/core/Button';
import { AppBar, Container, IconButton, Toolbar, Box, Paper, Typography, MenuItem } from '@material-ui/core';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import PersonIcon from '@mui/icons-material/Person';
import {makeStyles} from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import React from 'react';

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
    padding: theme.spacing(31)
  },
  mainFeaturesPostContent:{
    position: "relative",
    padding: theme.spacing(34)
  }
}))


function MyApplications(){
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
          <Box mr={3}>
            <Button color="inherit" variant='outlined' style={{color: "black"}}>Каталог</Button>
          </Box>
          <Button color="4c7bd9" variant='contained'>Мои заявки</Button>
          <IconButton edge="start" color="inherit" aria-label='menu' className='App'>
            <PersonIcon fontSize='large' style={{color: "black"}}/>
          </IconButton>

        </Toolbar>
      </Container>
    </AppBar>
    
    <main>

      <Paper className={classes.mainFeaturesPost} style={{backgroundImage: "url(https://tradeforexblog.com/images/iqcent/1624320455263/original/how-to-contact-iqcent-support.jpg)"}}>
      <Container maxWidth="md" style={{position: "relative", top: "-230px", backgroundColor:"rgba(164, 200, 236, 0.75)"}}>
        <Typography style={{color: "black", fontSize:"xx-large"}}>Мои заявки</Typography>
        <label>Статус: </label>
        <Select labelId="demo-simple-select-label" id="demo-simple-select" value={status} label="Статус" onChange={Statuses} style={{width:"100px"}}>
          <MenuItem value={10}>Статус1</MenuItem>
          <MenuItem value={20}>Статус2</MenuItem>
          <MenuItem value={30}>Статус3</MenuItem>
        </Select>
        <label>Дата: </label>
        <Select labelId="demo-simple-select-label" id="demo-simple-select" value={date} label="Статус" onChange={Dates} style={{width:"150px"}}>
          <MenuItem value={10}>Сначала старые</MenuItem>
          <MenuItem value={20}>Сначала новые</MenuItem>
        </Select>
      </Container>
      </Paper>
    </main>
    </>
    );
}

export default MyApplications;