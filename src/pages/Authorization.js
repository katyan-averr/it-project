import Button from '@material-ui/core/Button';
import { AppBar, Container,  Toolbar, Typography} from '@material-ui/core';
import React from 'react';
import TextField from '@material-ui/core/TextField';

function Authorization(){
  return(
    <>
    <AppBar position="static" style={{backgroundColor:"#A4C8EC", background:"rgba(164, 200, 236, 0.75)" }}>
      <Container fixed>
        <Toolbar>
        </Toolbar>
      </Container>
    </AppBar>
    
    <main>
    <div style={{marginTop:"40px",backgroundImage: "url(https://tradeforexblog.com/images/iqcent/1624320455263/original/how-to-contact-iqcent-support.jpg)", backgroundSize: 'cover', width: '100%', height: '90vh'}}>
            <Container maxWidth="md" style={{position: "relative", backgroundColor:"rgba(164, 200, 236, 0.75)", width:"440px", height:"220px"}}>
            <Typography style={{color: "black", fontSize:"xx-large", marginLeft:"90px"}}>Авторизация</Typography>
                <div>
                <TextField id="filled-basic" label="Логин" variant="filled" style={{width:"400px"}}/>
                </div>
                <div>
                <TextField id="filled-basic" label="Пароль" variant="filled" style={{width:"400px"}}/>
                </div>
                <Button color="4c7bd9" variant='contained' style={{marginLeft:"150px", marginTop:"10px"}}>Войти</Button>  
            </Container>
        </div>
    </main>
    </>
    );
}

export default Authorization;