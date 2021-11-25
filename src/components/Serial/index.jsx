import * as React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react';
import { Title, Items, Label, Input, Button, Strong, Footer } from './style'
import TextField from '@material-ui/core/TextField';
import Topbar from '../Common/Header'
import Autocomplete from '@material-ui/lab/Autocomplete';
import Snackbar from '@mui/material/Snackbar'
import MuiAlert from '@mui/material/Alert'
import './style.css'

const baseURL = 'http://localhost:3333/'

export default function Item() {
  const [data, setTableData] = useState([]);
  const [nm_fabricante, setFabricante] = useState('');
  const [nm_modelo, setModelo] = useState('');
  const [quantidade, setQuantidade] = useState(0);
  const [isSucess, setIsSucess] = useState(true);
  

  //===================== ANALISAR AS CONSTS ABAIXO ========================//
  // eslint-disable-next-line
  const [id_fabricante, setIdfabricante] = useState(0);
  // eslint-disable-next-line
  const [id_modelo, setIdmodelo] = useState(0);
  // eslint-disable-next-line
  const [cd_equipamento, setEquip] = useState('');
  // eslint-disable-next-line
  const [cd_prefixo, setPrefixo] = useState('');
  // eslint-disable-next-line
  const [nm_local, setLocal] = useState('');
  // eslint-disable-next-line
  const [id_equipamento, setIdEquipamento] = useState(0); 
  // eslint-disable-next-line
  const [nm_predio, setPredio] = useState('');

  useEffect(() => {
    axios.get(`${baseURL}equipamento`)
      .then((response) => {
        setTableData(response.data);
      });
  }, [])

  const handleChange = e => {
    const { name, value } = e.target;
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

  async function handleSubmit(e) {
    e.preventDefault();

    console.log('clicou aqui');
    
    try {
      const res = await axios.post(`${baseURL}serial`, {
        id_equipamento: id_equipamento
      });

      console.log(quantidade);

      for (let index = 0; index < quantidade; index++) {
        if (res.data) {
          const serial = `${cd_prefixo}${res.data[0].id}`;
          const label = zpl(serial);
          console.log('log', label);

          axios.post(`${baseURL}printer`, {
            zpl: label,
            host: "10.113.137.218",
            port: 9100
          }).then((response) => console.log(response.data));

          setIsSucess(true);
        } else {
          setIsSucess(false);
        }
      }
      if(quantidade <= 0){
        setIsSucess(false);
      }

    } catch {
      setIsSucess(false);
      console.log('error catch');
    } finally {
      handleClick();
    }
  };

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
        <Title>Cadastrar Serial</Title>
          <Items>
            <Autocomplete className="item-id"
              id="Item"
              options={data}
              getOptionLabel={(option) => option.id + " - " + option.nm_fabricante + " - " + option.nm_modelo}
              onChange={(event, newValue) => {
                setFabricante(newValue?.nm_fabricante);
                setModelo(newValue?.nm_modelo);
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
          <Label className="item-manf">FABRICANTE</Label>
          <Input className="item-manf-input" type="text" name="nm_fabricante" value={nm_fabricante} disabled onChange={handleChange} />
            <Label className="item-mod">MODELO</Label>
            <Input className="item-mod-input" type="text" name="nm_modelo" value={nm_modelo} disabled onChange={handleChange} />
              <Label className="item-qtd">QUANTIDADE</Label>
              <Input className="item-qtd-input" type="number" onChange={(e) => setQuantidade(Number(e.target.value))} name="id_quantidade" id="id_quantidade" min="1" max="99999" placeholder="Quantidade" />
            <Button >
              <Strong onClick={handleSubmit}>Adicionar</Strong>
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
                    Não Possivel Cadastrar!
                  </Alert>
                </Snackbar>
              }
          </Items>
      <Footer>Flex&copy; - All Rights Reserved</Footer>
    </>
  )
}