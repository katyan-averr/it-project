import Button from '@material-ui/core/Button';
import {Container, Grid, Typography } from '@material-ui/core';
import React from 'react';
import ButtonBase from '@mui/material/ButtonBase';
import { styled } from '@mui/material/styles';
import MenuBar from "../components/MenuBar"

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  });



function MyProfile(){
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
      if (prevOpen.current === true && open === false) {
        anchorRef.current.focus();
      }

    prevOpen.current = open;
  }, [open]);

  
    return(
      <>
      <MenuBar/>
      
      <main>
      <div style={{backgroundImage: "url(https://tradeforexblog.com/images/iqcent/1624320455263/original/how-to-contact-iqcent-support.jpg)", backgroundSize: 'cover', width: '100%', height: '90vh'}}>
        <Container maxWidth="md" style={{marginTop:"70px", backgroundColor:"rgba(164, 200, 236, 0.75)", width:"880px"}}>
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
        </div>
      </main>
      </>
      );
  }

export default MyProfile;