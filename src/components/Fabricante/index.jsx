import { Title, Box, Label, Input, Button, Alert} from './fabricante'
import './style.css'
import Topbar from '../Common/Header'
import Footer from '../Common/Footer'
import axios from 'axios'
import React, { useState } from 'react'

const baseURL = 'http://localhost:3333/fabricante'

export default function Fabricante(){
  const [setTableData] = useState([]);
  const [fabricante, setFabricante] = useState({
    id:'',
    nm_fabricante: '',

  })

  const inserir = async() => {
    await axios.post(baseURL, fabricante)
    .then(res => {
      setTableData((res.data))
    })
  }

  const handleChange = e => {
    const {name, value} = e.target;
    setFabricante(prevState => ({
      ...prevState,
      [name]: value
    }))
    console.log(fabricante)
  }

  return(
    <>
    <Topbar />
      <Title>Adicionar Fabricante</Title>
      <Box>
        <Label className="fab">Nome do Fabricante</Label>
        <Input className="fab-input" placeholder="Fabricante" onChange={handleChange}/>
        <Button className="fab-button" onClick={() => inserir()}>Adicionar</Button>
        <Alert className="alerta">ALERT MESSAGE</Alert>
      </Box>

      <Footer />
      
    </>
  )
}

