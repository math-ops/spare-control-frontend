import * as React from 'react'
import { useState } from 'react'
import { Title, Items, Label, Input, Button, Strong, Footer } from './style'
import Topbar from '../Common/Header'
import Snackbar from '@mui/material/Snackbar'
import MuiAlert from '@mui/material/Alert'
import axios from 'axios'
import './style.css'

const baseURL = 'http://localhost:3333/prefixo'

export default function Prefixo(){
  const [isSucess, setIsSucess] = useState(true);
  const [prefixo, setPrefixo]= useState({   
    cd_prefixo: '',
    qtd_inicial: '',
    qtd_final: ''
  });

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const res = await axios.post(baseURL, prefixo);
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
    const {name, value} = e.target;
    setPrefixo(prevState => ({
      ...prevState,
      [name]: value
    }))
    console.log(prefixo)
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
        <Title>Cadastrar Prefixo</Title>
          <Items>
            <Label className="item-manf">CD_PREFIXO</Label>
            <Input  className="item-manf-input" type="text" placeholder="Cod Prefixo" name="cd_prefixo" onChange={handleChange}/>
              <Label className="item-mod">QTD_INICIAL</Label>
              <Input className="item-mod-input"  type="number" placeholder="Quantidade inicial" name="qtd_inicial" onChange={handleChange}/>
                <Label className="item-loc">QTD_FINAL</Label>
                <Input className="item-loc-input" type="number" placeholder="Quantidade final" name="qtd_final" onChange={handleChange}/>
              <Button >
                <Strong className="fab-button" onClick={handleSubmit}>Adicionar</Strong>
              </Button>
                {isSucess ?
                  <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                      Cadastrado com Sucesso!
                    </Alert>
                  </Snackbar>
                  :
                  <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                      Não Foi Possivel Fazer o Cadastro!
                    </Alert>
                  </Snackbar>
                }
          </Items>
        <Footer>Flex&copy; - All Rights Reserved</Footer>
    </>
  )
}