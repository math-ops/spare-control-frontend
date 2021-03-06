import * as React from 'react'
import { Title, Box, Label, Input, Button, Footer } from './style'
import { useState } from 'react'
import axios from 'axios'
import Topbar from '../Common/Header';
import Snackbar from '@mui/material/Snackbar'
import MuiAlert from '@mui/material/Alert'
import './style.css'

const baseURL = 'http://localhost:3333/modelo'

export default function Modelo(){
  const [isSucess, setIsSucess] = useState(true);
  const [modelo, setModelo] = useState({
    id: '',
    nm_modelo: '',
  })

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const res = await axios.post(baseURL, modelo);
    if(!!res.data){
      setIsSucess(true);
    }else{
      setIsSucess(false);
    }
  } catch{
    setIsSucess(false);
    console.log('error catch');
  } finally {
    handleClick();
  }
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
        <Title>Cadastrar Modelo</Title>
          <Box>
            <Label className="model">Nome do Modelo</Label>
            <Input className="model-input" name="nm_modelo" placeholder="Modelo" onChange={handleChange}/>
              <Button className="cad-button" onClick={handleSubmit}>Adicionar</Button>
              { isSucess ?
              <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                  Cadastrado com Sucesso!
                </Alert>
              </Snackbar>
              :
              <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                Modelo Invalido ou J?? Existe!
                </Alert>
              </Snackbar>
              }
        </Box>
      <Footer>Flex&copy; - All Rights Reserved</Footer>
    </>
  )
}