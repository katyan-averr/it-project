import './App.css';
import Button from '@material-ui/core/Button';
import { AppBar, Container, IconButton, Toolbar, Box, Paper, Typography, MenuItem } from '@material-ui/core';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import PersonIcon from '@mui/icons-material/Person';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import {makeStyles} from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import React from 'react';
import TextField from '@material-ui/core/TextField';

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
    padding: theme.spacing(5)
  },
  mainFeaturesPostContent:{
    position: "relative",
    padding: theme.spacing(34)
  }
}))


function CreateApplications(){
  const classes = useStyles();

  const [group, setGroup] = React.useState('');

  const Groups = (event) => {
    setGroup(event.target.value);
  };

  const [specifically, setSpecifically] = React.useState('');

  const Specificallys = (event) => {
    setSpecifically(event.target.value);
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
          <Button color="inherit" variant='outlined' style={{color: "black"}}>Мои заявки</Button>
          <IconButton edge="start" color="inherit" aria-label='menu' className='App'>
            <PersonIcon fontSize='large' style={{color: "black"}}/>
          </IconButton>

        </Toolbar>
      </Container>
    </AppBar>
    
    <main>
      <Paper className={classes.mainFeaturesPost} style={{backgroundImage: "url(https://tradeforexblog.com/images/iqcent/1624320455263/original/how-to-contact-iqcent-support.jpg)"}}>
      <Container maxWidth="md" style={{position: "relative", backgroundColor:"rgba(164, 200, 236, 0.75)", width:"880px"}}>
        <Typography style={{color: "black", fontSize:"xx-large"}}>Создать заявку</Typography>
        <label>Группа проблем: </label>
        <Select labelId="demo-simple-select-label" id="demo-simple-select" value={group} label="Статус" onChange={Groups} style={{width:"700px"}}>
          <MenuItem value={10}>Группа1</MenuItem>
          <MenuItem value={20}>Группа2</MenuItem>
          <MenuItem value={30}>Группа3</MenuItem>
        </Select>
        <div>
        <label>Конкретная проблема: </label>
        <Select labelId="demo-simple-select-label" id="demo-simple-select" value={specifically} label="Статус" onChange={Specificallys} style={{width:"659px"}}>
          <MenuItem value={10}>Проблема1</MenuItem>
          <MenuItem value={20}>Проблема2</MenuItem>
        </Select>
        </div>
        <div>
            <TextField id="filled-multiline-static" label="Опишите вашу проблему..." multiline rows={19} variant="filled" style={{width:"830px", marginTop:"10px"}}/>
        </div>
        <div>
        <IconButton>
                <AttachFileIcon fontSize='large'/>
            </IconButton>
        <Button color="4c7bd9" variant='contained' style={{marginTop:"10px", marginBottom:"10px", position: "relative", left: "672px"}}>Создать</Button>
        </div>
      </Container>
      </Paper>
    </main>
    </>
    );
}

export default CreateApplications;