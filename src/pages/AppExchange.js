import { Container, Typography, MenuItem } from '@material-ui/core';
import MenuBar from "../components/MenuBar"
import Select from '@material-ui/core/Select';
import React from 'react';

//биржа заявок 

function AppExchange(){
  const [date, setDate] = React.useState('');

  const Dates = (event) => {
    setDate(event.target.value);
  };

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
      <Container maxWidth="md" style={{position: "relative", top: "70px", backgroundColor:"rgba(164, 200, 236, 0.75)"}}>
        <Typography style={{color: "black", fontSize:"xx-large"}}>Биржа заявок</Typography>       
        <label>Дата: </label>
        <Select labelId="demo-simple-select-label" id="demo-simple-select" value={date} label="Статус" onChange={Dates} style={{width:"150px"}}>
          <MenuItem value={10}>Сначала старые</MenuItem>
          <MenuItem value={20}>Сначала новые</MenuItem>
        </Select>
      </Container>
      {/* </Paper> */}
      </div>
    </main>
    </>
    );
}

export default AppExchange;