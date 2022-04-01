import './App.css';
import Button from '@material-ui/core/Button';
import { AppBar, Container, IconButton, Toolbar, Box } from '@material-ui/core';
import { mergeClasses } from '@material-ui/styles';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import PersonIcon from '@mui/icons-material/Person';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) =>({
  root:{
    flexGrow: 1
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
    <AppBar position="fixed">
      <Container fixed>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label='menu' className={classes.menuButton}>
            <MiscellaneousServicesIcon fontSize='large'/>
          </IconButton>
          <Box mr={3}>
            <Button color="4c7bd9" variant='contained'>Каталог</Button>
          </Box>
          <Button color="inherit" variant='outlined'>Мои заявки</Button>
          <IconButton edge="start" color="inherit" aria-label='menu' className={classes.menuButton} >
            <PersonIcon fontSize='large' />
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
    );
}

export default App;
