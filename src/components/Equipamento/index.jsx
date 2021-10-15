import React, { useEffect, useState } from  'react'
import './style.css'
import { Title, Items, Label, Input, Button, Strong } from './style'
import Topbar from '../Common/Header'
import Footer from '../Common/Footer'
import axios from 'axios'

const baseURL = 'http://localhost:3333/'

export default function Item(){

  const [setTableData] = useState([]);
  const [equipamento, setEquipamento] = useState('');
  const [nm_fabricante, setFabricante] = useState('');
  const [nm_modelo, setModelo] = useState('');
  const [cd_equipamento, setEquip] = useState('');
  const [cd_prefixo, setPrefixo] = useState('');
  // const [nm_local, setLocal] = useState('');
  // const [nm_predio, setPredio] = useState('');
  // const [quantidade, setQuantidade] = useState(0);

  useEffect(() => {
    axios.get((baseURL)+"equipamento/byid" + (!!equipamento ? equipamento : 0)).then((response) =>{
      const nm_fabricante = response.data[0].nm_fabricante;
      const nm_modelo = response.data[0].nm_modelo;
      const cd_equipamento = response.data[0].cd_equipamento;
      const cd_prefixo= response.data[0].cd_prefixo;
      console.log(response.data[0].nm_fabricante);
      setFabricante(nm_fabricante);
      setModelo(nm_modelo);
      setEquip(cd_equipamento);
      setPrefixo(cd_prefixo);
    })
    .catch((error) =>{
      setFabricante('');
      setModelo('');
      setEquip('');
      setPrefixo('');
    });
  }, [equipamento])

  const inserir = async() => {
    await axios.post(baseURL, equipamento).then(res => {
      setTableData((res.data))
    })
  }

  const handleChange = e => {
    const {name, value} = e.target;
    setFabricante(prevState => ({
      ...prevState,
      [name]: value
    }))
    console.log(equipamento)
  }

  // async function handleClick(event) {
  //   event.preventDefault();


  //   for (let index = 0; index < quantidade; index++) {

  //     axios.post("serial", {
  //       id_equipamento: equipamento,
  //     }).then((response) => {

  //       const serial = response.data[0].id;
  //       const label = zpl(serial);

  //       axios.post("printer", {
  //         zpl: label,
  //         host: "10.113.137.218",
  //         port: 9100
  //       }).then((response) => console.log(response.data));
  //     });
  //   }
  // };

  return(
    <>
    <Topbar />
      <Title>Cadastrar Equipamento</Title>
      <Items>
        <Label className="item-id">ID</Label>
        <Input  className="item-id-input" onBlur={(e) => setEquipamento(e.target.value)} type="text" name="id" id="id" onChange={handleChange} placeholder="ID" required/>

        <Label className="item-manf">FABRICANTE</Label>
        <Input  className="item-manf-input" name="nm_fabricante" value={nm_fabricante} disabled onChange={handleChange} />

        <Label className="item-mod">MODELO</Label>
        <Input className="item-mod-input" name="nm_modelo" value={nm_modelo} disabled onChange={handleChange}/>

        <Label className="item-loc">LOCAL(CD_EQUIPAMENTO)</Label>
        <Input className="item-loc-input" name="nm_local" value={cd_equipamento} disabled onChange={handleChange}/>

        <Label className="item-area">AREA(CD_PREFIXO)</Label>
        <Input className="item-area-input" name="nm_predio" value={cd_prefixo} disabled onChange={handleChange}/>

        <Label className="item-qtd">QUANTIDADE</Label>
        <Input className="item-qtd-input" onChange={handleChange} type="number" placeholder="Quantidade"/>

        <Button onClick={() => inserir()}>
          <Strong>Adicionar</Strong>
        </Button>
      </Items>
      <Footer />
    </>
  )
}

