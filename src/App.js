import './App.css';
import Button from '@material-ui/core/Button';
import { AppBar, Container, IconButton, Toolbar, Box, Paper, Grid } from '@material-ui/core';
import { mergeClasses } from '@material-ui/styles';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import PersonIcon from '@mui/icons-material/Person';
import {makeStyles} from '@material-ui/core/styles';

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
    padding: theme.spacing(20)
  },
  mainFeaturesPostContent:{
    position: "relative",
    padding: theme.spacing(34)
  }
}))


function App(){
  const classes = useStyles();

  return(
    <>

    <AppBar position="static" style={{backgroundColor:"#A4C8EC", background:"rgba(164, 200, 236, 0.75)" }}>
      <Container fixed>
        <Toolbar>
            <MiscellaneousServicesIcon fontSize='large' style={{color: "black"}}/>
          <Box mr={3}>
            <Button color="4c7bd9" variant='contained'>Каталог</Button>
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
      <Container maxWidth="md">
        <Grid container spacing={10}>
          <Grid item xs={12} sm={6} md={4}>
              <Button variant='contained' style={{ width: "230px", height: "90px", backgroundColor:"#A4C8EC", background:"rgba(164, 200, 236, 0.75)" }}>
                  Проблема с рабочим местом
                </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
              <Button variant='contained' style={{ width: "230px", height: "90px", backgroundColor:"#A4C8EC", background:"rgba(164, 200, 236, 0.75)" }}>
                  Проблема с настроением
                </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
              <Button variant='contained' style={{ width: "230px", height: "90px", backgroundColor:"#A4C8EC", background:"rgba(164, 200, 236, 0.75)" }}>
                  Проблема с принтером
                </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
              <Button variant='contained' style={{ width: "230px", height: "90px", backgroundColor:"#A4C8EC", background:"rgba(164, 200, 236, 0.75)" }}>
                  Настройка удаленного доступа
                </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
              <Button variant='contained' style={{ width: "230px", height: "90px", backgroundColor:"#A4C8EC", background:"rgba(164, 200, 236, 0.75)" }}>
                  Проблема с программой
                </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
              <Button variant='contained' style={{ width: "230px", height: "90px", backgroundColor:"#A4C8EC", background:"rgba(164, 200, 236, 0.75)" }}>
                  Другое
                </Button>
          </Grid>
        </Grid>
      </Container>
      </Paper>
    </main>
    </>
    );
}

export default App;