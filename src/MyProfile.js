import './App.css';
import Button from '@material-ui/core/Button';
import { AppBar, Container, IconButton, Toolbar, Box, Paper, Grid, Typography } from '@material-ui/core';
import { mergeClasses } from '@material-ui/styles';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import PersonIcon from '@mui/icons-material/Person';
import {makeStyles} from '@material-ui/core/styles';
import React from 'react';
import ButtonBase from '@mui/material/ButtonBase';
import { styled } from '@mui/material/styles';

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  });

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
    padding: theme.spacing(23)
  },
  mainFeaturesPostContent:{
    position: "relative",
    padding: theme.spacing(34)
  }
}))


function MyProfile(){
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
            <Button color="inherit" variant='outlined' style={{marginLeft:"10px", marginRight:"10px", color: "black"}}>Каталог</Button>
            <Button color="inherit" variant='outlined' style={{marginLeft:"10px", marginRight:"10px",color: "black"}}>Мои заявки</Button>
            <Button color="inherit" variant='outlined' style={{marginLeft:"10px", marginRight:"10px", color: "black"}}>Биржа заявок</Button>
            <Button color="inherit" variant='outlined' style={{marginLeft:"10px", marginRight:"10px", color: "black"}}>Выполняемые заявки</Button>      
            <IconButton edge="start" color="inherit" aria-label='menu' style={{color: "black", marginLeft:"375px"}}>
              <PersonIcon fontSize='large'/>
            </IconButton>
        </Toolbar>
      </Container>
      </AppBar>
      
      <main>
        <Paper className={classes.mainFeaturesPost} style={{backgroundImage: "url(https://tradeforexblog.com/images/iqcent/1624320455263/original/how-to-contact-iqcent-support.jpg)"}}>
        <Container maxWidth="md" style={{position: "relative", backgroundColor:"rgba(164, 200, 236, 0.75)", width:"880px"}}>
        <Grid container spacing={2}>
            <Grid item xs={5}>
            <Typography style={{color: "black", fontSize:"xx-large"}}>Личный кабинет</Typography>
                    <div>
                    <ButtonBase sx={{ width: 200, height: 200 }}>
                        <Img alt="complex" src="https://pro-kotikov.ru/wp-content/uploads/2019/02/kotohleb-photo-6.jpg" />
                    </ButtonBase>
                    </div>
                    <Button color="4c7bd9" variant='contained' style={{marginLeft:"40px"}}>Изменить</Button>
            </Grid>
            <Grid item xs={5}>
              <br></br>
              <br></br>
              <br></br>
              <div><Typography style={{color: "black", fontSize:"25px"}}>ФИО</Typography></div>
              <div><Typography style={{color: "black", fontSize:"25px"}}>Должность</Typography></div>
              <div><Typography style={{color: "black", fontSize:"25px"}}>Номер телефона</Typography></div>
              <div><Typography style={{color: "black", fontSize:"25px"}}>Отдел</Typography></div>           
            </Grid>
        </Grid> 
        </Container>   
        </Paper>
      </main>
      </>
      );
  }

export default MyProfile;