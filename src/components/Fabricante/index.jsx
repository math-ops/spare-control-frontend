import * as React from 'react'
import { useState } from 'react'
import { Title, Box, Label, Input, Button, Footer } from './fabricante'
import Topbar from '../Common/Header'
import axios from 'axios'
import Snackbar from '@mui/material/Snackbar'
import MuiAlert from '@mui/material/Alert'
import './style.css'
const baseURL = 'http://localhost:3333/fabricante'

export default function Fabricante() {
  const [isSucess, setIsSucess] = useState(true);
  const [fabricante, setFabricante] = useState({
    id: '',
    nm_fabricante: '',
  })

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const res = await axios.post(baseURL, fabricante);
      if (!!res.data) {
        setIsSucess(true);
      } else {
        setIsSucess(false);
      }
    } catch {
        setIsSucess(false);
          console.log('error catch');
    } finally {
        handleClick();
    }
  }

  const handleChange = e => {
    const { name, value } = e.target;
      setFabricante(prevState => ({
        ...prevState,
          [name]: value
      }))
    console.log(fabricante)
  }

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
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

  return (
    <>
      <Topbar />
      <Title>Cadastrar Fabricante</Title>
        <Box>
          <Label className="fab">Nome do Fabricante</Label>
          <Input className="fab-input" name="nm_fabricante" placeholder="Fabricante" onChange={handleChange} />
           <Button className="fab-button" onClick={handleSubmit}>Adicionar</Button>
              {isSucess ?
                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                  <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    Cadastrado com Sucesso!
                  </Alert>
                </Snackbar>
                :
                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                  <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                    Fabricante Invalido ou Já Existe!
                  </Alert>
                </Snackbar>
              }
        </Box>
      <Footer>Flex&copy; - All Rights Reserved</Footer>
    </>
  )
}

