import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import {Container, Grid, Menu} from '@material-ui/core';
import { Link } from "react-router-dom";
import MenuBar from "../components/MenuBar"

function HomePage(){

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
    <main >
    <div style={{backgroundImage: "url(https://tradeforexblog.com/images/iqcent/1624320455263/original/how-to-contact-iqcent-support.jpg)", backgroundSize: 'cover', width: '100%', height: '90vh'}}>
      <Container maxWidth="md" style={{marginTop:"40px"}}>
        <Grid container spacing={10}>
          <Grid item xs={12} sm={6} md={4}>
              <Button variant='contained' style={{marginTop:"130px", width: "230px", height: "90px", backgroundColor:"#A4C8EC", background:"rgba(164, 200, 236, 0.75)" }}>
                  Проблема с рабочим местом
                </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
              <Button variant='contained' style={{marginTop:"130px", width: "230px", height: "90px", backgroundColor:"#A4C8EC", background:"rgba(164, 200, 236, 0.75)" }}>
                  Проблема с настроением
                </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
              <Button variant='contained' style={{marginTop:"130px", width: "230px", height: "90px", backgroundColor:"#A4C8EC", background:"rgba(164, 200, 236, 0.75)" }}>
                  Проблема с принтером
                </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
              <Button variant='contained' style={{marginTop:"50px", width: "230px", height: "90px", backgroundColor:"#A4C8EC", background:"rgba(164, 200, 236, 0.75)" }}>
                  Настройка удаленного доступа
                </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
              <Button variant='contained' style={{marginTop:"50px", width: "230px", height: "90px", backgroundColor:"#A4C8EC", background:"rgba(164, 200, 236, 0.75)" }}>
                  Проблема с программой
                </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
          <Link to="/createApplications">
              <Button variant='contained' style={{marginTop:"50px", width: "230px", height: "90px", backgroundColor:"#A4C8EC", background:"rgba(164, 200, 236, 0.75)" }}>
                  Другое
                </Button>
              </Link> 
          </Grid>
        </Grid>
      </Container>
  </div>
    </main>
    </>
    );
}

export default HomePage;