import './App.css';
import Button from '@material-ui/core/Button';
import { AppBar, Container, IconButton, Toolbar, Box, Paper, Grid, Typography } from '@material-ui/core';
import { mergeClasses } from '@material-ui/styles';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import PersonIcon from '@mui/icons-material/Person';
import {makeStyles} from '@material-ui/core/styles';
import { style } from '@mui/system';

const useStyles = makeStyles((theme) =>({
  root:{
    flexGrow:1
  },
  menuButton:{
    marginRight: theme.spacing(1)
  },
  title:{
    flexGrow:1
  }
}))

function App(){
  const classes = useStyles();

  return(
    <>
    <AppBar position="fixed">
      <Container fixed>
        <Toolbar>
            <MiscellaneousServicesIcon fontSize='large'/>
          <Box mr={3}>
            <Button color="4c7bd9" variant='contained'>Каталог</Button>
          </Box>
          <Button color="inherit" variant='outlined'>Мои заявки</Button>
          <IconButton edge="start" color="inherit" aria-label='menu' className='App'>
            <PersonIcon fontSize='large' />
          </IconButton>

        </Toolbar>
      </Container>
    </AppBar>
    
    <main>
      <Paper className={classes.mainFeaturesPost} style={{backgroundImage: 'url(https://miro.medium.com/max/1200/0*rF85nhzEmjrtjoqX.png)'}}>
        <Container fixed>
          <Grid Container>
            <Grid item md={6}>
              <div className={classes.mainFeaturesPostContent}>
                <Button variant='contained' color="4c7bd9">
                  opa
                </Button>
              </div>
            </Grid>
          </Grid>
        </Container>
      </Paper>
    </main>

    </>
    );
}

export default App;