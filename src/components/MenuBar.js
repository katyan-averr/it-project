import Button from '@material-ui/core/Button';
import { AppBar, Container, IconButton, Toolbar, Box, Paper, Grid, Typography } from '@material-ui/core';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import PersonIcon from '@mui/icons-material/Person';
import React from 'react';
import { Link } from "react-router-dom";
import { ClickAwayListener, Grow, Popper, MenuList, MenuItem} from '@material-ui/core';


function MenuBar(){

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
      </>
      );
  }

export default MenuBar;