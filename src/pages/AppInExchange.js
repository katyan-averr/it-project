import Button from '@material-ui/core/Button';
import {Container} from '@material-ui/core';
import React from 'react';
import TextField from '@material-ui/core/TextField';
import MenuBar from "../components/MenuBar"

// страница заявки

function AppInExchange(){
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
      <Container maxWidth="md" style={{position: "relative", backgroundColor:"rgba(164, 200, 236, 0.75)", width:"880px"}}>
        <div>     
            <TextField disabled id="filled-basic" variant="filled" style={{marginTop:"10px", width:"830px"}} />
        </div>
        <div>    
            <TextField disabled id="filled-multiline-static" multiline rows={19} variant="filled" style={{width:"830px", marginTop:"10px"}}/>
        </div>     
        <div>
            <Button color="4c7bd9" variant='contained' style={{marginTop:"10px", marginBottom:"10px", marginLeft:"10px", marginRight:"10px", position: "relative", left: "420px"}}>Переадресовать</Button>
            <Button color="4c7bd9" variant='contained' style={{marginTop:"10px", marginBottom:"10px", marginLeft:"10px", marginRight:"10px", position: "relative", left: "420px"}}>Назначить</Button>
            <Button color="4c7bd9" variant='contained' style={{marginTop:"10px", marginBottom:"10px", marginLeft:"10px", marginRight:"10px", position: "relative", left: "420px"}}>Взять</Button>
        </div>     
      </Container>
      </div>
    </main>
    </>
    );
}

export default AppInExchange;