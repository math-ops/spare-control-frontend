import React, { useState } from 'react'
import { Title, Box, Label, Input, Button, Alert } from './style'
import './style.css'
import Topbar from '../Common/Header';
import axios from 'axios'

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

  return(
    <>
      <Topbar />
      <Title>Adicionar Modelo</Title>
      <Box>
        
        <Label className="model">Nome do Modelo</Label>
        <Input className="model-input" name="nm_modelo" placeholder="Modelo" onChange={handleChange}/>

        <Button className="cad-button" onClick={() => inserir()}>Adicionar</Button>
        <Alert className="alerta-model">ALERT MESSAGE</Alert>
      </Box>
      
      
    </>
  )
}

