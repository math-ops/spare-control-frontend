import { Title, Items, Label, Input, Button, Strong, Footer } from './style'
import TextField from '@material-ui/core/TextField';
import Topbar from '../Common/Header'
import axios from 'axios'
import Autocomplete from '@material-ui/lab/Autocomplete';
import { useState, useEffect } from 'react';
import './style.css'
const baseURL = 'http://localhost:3333/'

export default function Item(){
  const [data, setTableData] = useState([]);
  const [nm_fabricante, setFabricante] = useState('');
  const [id_fabricante, setIdfabricante] = useState(0);
  const [nm_modelo, setModelo] = useState('');
  const [id_modelo, setIdmodelo] = useState(0);
  // const [cd_equipamento, setEquip] = useState('');
  // const [cd_prefixo, setPrefixo] = useState('');
  const [quantidade, setQuantidade] = useState(0);
  // const [nm_local, setLocal] = useState('');
  // const [nm_predio, setPredio] = useState('');
  // const [quantidade, setQuantidade] = useState(0);

  useEffect(() => {
    axios.get(`${baseURL}equipamento`)
      .then((response) => {
        setTableData(response.data);
      });
  }, [])


  const handleChange = e => {
    const {name, value} = e.target;
    setFabricante(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  function zpl(serial) {

    const label = `^XA
    ^MMT
    ^PW900
    ^LL0600
    ^LS0
    ^BY8,3,99^FT739,285^BCI,,Y,N
    ^FD>:${serial}^FS
    ^PQ1,0,1,Y^XZ`;
    return label;

  }

  async function handleClick() {

    console.log('clicou aqui');


    for (let index = 0; index < quantidade; index++) {
      
      axios.post(`${baseURL}equipamento`, {
        id_fabricante:id_fabricante,
        id_modelo:id_modelo,
        // cd_prefixo:cd_prefixo
      }).then((response) => {

        const serial = response.data[0].id;
        const label = zpl(serial);
        console.log(id_fabricante, id_modelo)
        console.log('log',label);

        axios.post(`${baseURL}printer`, {
          zpl: label,
          host: "10.113.137.218",
          port: 9100
        }).then((response) => console.log(response.data));
      });
    }
  };
  

  return(
    <>
    <Topbar />
      <Title>Cadastrar Serial</Title>
      <Items>
      <Autocomplete className="item-id" 
            id="Item"
            options={data}
            getOptionLabel={(option) => option.id + " - "+ option.nm_fabricante + " - " + option.nm_modelo}
            onChange={(event, newValue) => {
              setFabricante(newValue?.nm_fabricante);
              setModelo(newValue?.nm_modelo);
              // setEquip(newValue?.cd_equipamento);
              // setPrefixo(newValue?.cd_prefixo);
              setIdfabricante(newValue?.id_fabricante);
              setIdmodelo(newValue?.id_modelo);
            }}
            onSelect={() => {
            }
            }
            style={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Equipamento..." variant="standard"
            />}
          />
        {/* <Label className="item-id">ID</Label>
        <Input  className="item-id-input" onBlur={(e) => setEquipamento(e.target.value)} type="text" name="id" id="id" placeholder="ID" onChange={handleChange} required /> */}

        <Label className="item-manf">FABRICANTE</Label>
        <Input  className="item-manf-input" type="text" name="nm_fabricante" value={nm_fabricante} disabled onChange={handleChange}/>

        <Label className="item-mod">MODELO</Label>
        <Input className="item-mod-input"  type="text" name="nm_modelo" value={nm_modelo} disabled onChange={handleChange}/>

        <Label className="item-qtd">QUANTIDADE</Label>
        <Input className="item-qtd-input" type="number" onChange={(e) => setQuantidade(Number(e.target.value))} name="id_quantidade" id="id_quantidade" placeholder="Quantidade" />

        <Button >
          <Strong onClick={(event) => handleClick(event.preventDefault())}>Adicionar</Strong>
        </Button>
      </Items>
      <Footer>Flex&copy; - All Rights Reserved</Footer>
    </>
  )
}

