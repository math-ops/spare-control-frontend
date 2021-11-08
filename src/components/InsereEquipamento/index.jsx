
import './style.css'
import { Title, Items, Label, Input, Button, Strong, Footer } from './style'
// import TextField from '@material-ui/core/TextField';
import Topbar from '../Common/Header'
// import Footer from '../Common/Footer'
import axios from 'axios'
import { useState } from 'react';
const baseURL = 'http://localhost:3333/equipamento'


export default function Item(){
  // eslint-disable-next-line
  const [data, setTableData] = useState([]);
  const [equipamento, setEquipamento]= useState({
    id_fabricante: '',
    id_modelo: '',
    cd_equipamento: ''
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
      <Title>Cadastrar Equipamento</Title>
      <Items>
        <Label className="item-manf">FABRICANTE</Label>
        <Input  className="item-manf-input" type="text" placeholder="Fabricante" name="id_fabricante" onChange={handleChange}/>

        <Label className="item-mod">MODELO</Label>
        <Input className="item-mod-input"  type="text" placeholder="Modelo" name="id_modelo" onChange={handleChange}/>

        <Label className="item-loc">PREFIXO</Label>
        <Input className="item-loc-input" type="text" placeholder="Codigo do Prefixo" name="cd_prefixo" onChange={handleChange}/>

        <Button >
          <Strong className="fab-button" onClick={() => inserir()}>Adicionar</Strong>
        </Button>
        </Items>
        <Footer>Flex&copy; - All Rights Reserved</Footer>
    </>
  )
}

