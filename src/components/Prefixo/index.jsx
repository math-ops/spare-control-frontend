
import './style.css'
import { Title, Items, Label, Input, Button, Strong, Footer } from './style'
// import TextField from '@material-ui/core/TextField';
import Topbar from '../Common/Header'
import axios from 'axios'
import { useState } from 'react';
const baseURL = 'http://localhost:3333/equipamento'


export default function Prefixo(){
  // eslint-disable-next-line
  const [data, setTableData] = useState([]);
  const [equipamento, setEquipamento]= useState({
    cd_prefixo: '',
    qtd_inicial: '',
    qtd_final: ''
  });
  
  
  const inserir = async() => {
    await axios.post(baseURL, equipamento)
    .then(res => {
      setTableData((res.data))
      console.log(res.error)
    })
  }

  const handleChange = e => {
    const {name, value} = e.target;
    setEquipamento(prevState => ({
      ...prevState,
      [name]: value
    }))
    console.log(equipamento)
  }

  
  return(
    <>
    <Topbar />
      <Title>Cadastrar Prefixo</Title>
      <Items>
        <Label className="item-manf">CD_PREFIXO</Label>
        <Input  className="item-manf-input" type="text" placeholder="Fabricante" name="cd_prefixo" onChange={handleChange}/>

        <Label className="item-mod">QTD_INICIAL</Label>
        <Input className="item-mod-input"  type="number" placeholder="Modelo" name="qtd_inicial" onChange={handleChange}/>

        <Label className="item-loc">QTD_FINAL</Label>
        <Input className="item-loc-input" type="number" placeholder="Codigo do Prefixo" name="qtd_final" onChange={handleChange}/>

        <Button >
          <Strong className="fab-button" onClick={() => inserir()}>Adicionar</Strong>
        </Button>
        </Items>
        <Footer>Flex&copy; - All Rights Reserved</Footer>
    </>
  )
}