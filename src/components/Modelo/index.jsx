import { Title, Box, Label, Input, Button, Footer } from './style'
import './style.css'
import Topbar from '../Common/Header';
import axios from 'axios'
import * as React from 'react'
import { useState } from 'react'
import Snackbar from '@mui/material/Snackbar'
import MuiAlert from '@mui/material/Alert'

const baseURL = 'http://localhost:3333/modelo'

export default function Modelo(){

  const [setTableData] = useState([]);
  const [modelo, setModelo] = useState({
    id: '',
    nm_modelo: '',
  })

  const inserir = async() => {
    await axios.post(baseURL, modelo).then(res => {
      setTableData((res.data))
    })
  }

  const handleChange = e => {
    const {name, value} = e.target;
    setModelo(prevState => ({
      ...prevState,
      [name]: value
    }))
    console.log(modelo)
  }

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props}/>;
  })

  const [open, setOpen] = React.useState(false);
  
  const handleClick = () => {
    setOpen(true)
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  }

  return(
    <>
      <Topbar />
      <Title>Adicionar Modelo</Title>
      <Box>
        
        <Label className="model">Nome do Modelo</Label>
        <Input className="model-input" name="nm_modelo" placeholder="Modelo" onChange={handleChange}/>

        <Button className="cad-button" onClick={() => inserir() && handleClick()}>Adicionar</Button>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
         Cadastrado com Sucesso!
        </Alert>
      </Snackbar>
      </Box>
      <Footer>Flex&copy; - All Rights Reserved</Footer>
      
    </>
  )
}

