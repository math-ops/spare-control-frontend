import { Title, Items, Label, Input, Button, Strong, Footer } from './style'
import TextField from '@material-ui/core/TextField';
import Topbar from '../Common/Header'
import axios from 'axios'
import * as React from 'react'
import Autocomplete from '@material-ui/lab/Autocomplete';
import Snackbar from '@mui/material/Snackbar'
import MuiAlert from '@mui/material/Alert'
import { useState, useEffect } from 'react';
import './style.css'
const baseURL = 'http://localhost:3333/'

export default function Item(){
  const [data, setTableData] = useState([]);
  // eslint-disable-next-line
  const [id_equipamento, setIdEquipamento] = useState(0);
  const [nm_fabricante, setFabricante] = useState('');
  // eslint-disable-next-line
  const [id_fabricante, setIdfabricante] = useState(0);
  const [nm_modelo, setModelo] = useState('');
  // eslint-disable-next-line
  const [id_modelo, setIdmodelo] = useState(0);
  // eslint-disable-next-line
  const [cd_equipamento, setEquip] = useState('');
  // eslint-disable-next-line
  const [cd_prefixo, setPrefixo] = useState('');
  const [quantidade, setQuantidade] = useState(0);
  // eslint-disable-next-line
  const [nm_local, setLocal] = useState('');
  // eslint-disable-next-line
  const [nm_predio, setPredio] = useState('');
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
      
      axios.post(`${baseURL}serial`, {
        id_equipamento: id_equipamento
      }).then((response) => {

        const serial = `${cd_prefixo}${response.data[0].id}`;
        const label = zpl(serial);
        console.log('log',label);

        axios.post(`${baseURL}printer`, {
          zpl: label,
          host: "10.113.137.218",
          port: 9100
        }).then((response) => console.log(response.data));
      });
    }
    //para da reload na pagina ao inserir
    window.location.reload();
  };

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props}/>;
  })

  const [open, setOpen] = React.useState(false);
  
  const handleOpen = () => {
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
          <Strong onClick={(event) => handleClick(event.preventDefault()) && handleOpen()}>Adicionar</Strong>
        </Button>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
         Cadastrado com Sucesso!
        </Alert>
      </Snackbar>
      </Items>
      <Footer>Flex&copy; - All Rights Reserved</Footer>
    </>
  )
}