import Button from '@material-ui/core/Button';
import { Container, IconButton,  Typography, MenuItem } from '@material-ui/core';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import Select from '@material-ui/core/Select';
import React from 'react';
import TextField from '@material-ui/core/TextField';
import MenuBar from "../components/MenuBar"

function CreateApplications(){
  const [group, setGroup] = React.useState('');

  const Groups = (event) => {
    setGroup(event.target.value);
  };

  const [specifically, setSpecifically] = React.useState('');

  const Specificallys = (event) => {
    setSpecifically(event.target.value);
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
      <Container maxWidth="md" style={{position: "relative", top: "70px", backgroundColor:"rgba(164, 200, 236, 0.75)", width:"880px"}}>
        <Typography style={{color: "black", fontSize:"xx-large"}}>Создать заявку</Typography>
        <label>Группа проблем: </label>
        <Select labelId="demo-simple-select-label" id="demo-simple-select" value={group} label="Статус" onChange={Groups} style={{width:"700px"}}>
          <MenuItem value={10}>Группа1</MenuItem>
          <MenuItem value={20}>Группа2</MenuItem>
          <MenuItem value={30}>Группа3</MenuItem>
        </Select>
        <div>
        <label>Конкретная проблема: </label>
        <Select labelId="demo-simple-select-label" id="demo-simple-select" value={specifically} label="Статус" onChange={Specificallys} style={{width:"659px"}}>
          <MenuItem value={10}>Проблема1</MenuItem>
          <MenuItem value={20}>Проблема2</MenuItem>
        </Select>
        </div>
        <div>
            <TextField id="filled-multiline-static" label="Опишите вашу проблему..." multiline rows={19} variant="filled" style={{width:"830px", marginTop:"10px"}}/>
        </div>
        <div>
        <IconButton>
                <AttachFileIcon fontSize='large'/>
            </IconButton>
        <Button color="4c7bd9" variant='contained' style={{marginTop:"10px", marginBottom:"10px", position: "relative", left: "672px"}}>Создать</Button>
        </div>
      </Container>
      </div>
    </main>
    </>
    );
}

export default CreateApplications;