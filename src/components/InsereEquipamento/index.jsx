
import './style.css'
import { Title, Items, Strong, Button, Footer } from './style'
import TextField from '@material-ui/core/TextField';
import Topbar from '../Common/Header'
import axios from '../../services/api'
import Autocomplete from '@material-ui/lab/Autocomplete';
import * as React from 'react'
import Snackbar from '@mui/material/Snackbar'
import MuiAlert from '@mui/material/Alert'
import { useState, useEffect } from 'react';
// const baseURL = 'http://localhost:3333/equipamento'


export default function Item() {
  // const [data, setTableData] = useState([]);
  const [fabricante, setFabricante] = useState([]);
  const [id_fabricante, setIdfabricante] = useState(0);
  const [modelo, setModelo] = useState([]);
  const [id_modelo, setIdmodelo] = useState(0);
  const [prefixo, setPrefixo] = useState([]);
  const [cd_prefixo, setCdprefixo] = useState(0);
// eslint-disable-next-line
  const [msgSucess, setMsgSucess] = useState('');
  // eslint-disable-next-line
  const [msgFail, setMsgFail] = useState('');
  const [isSucess, setIsSucess] = useState(true);

  useEffect(() => {

    const ress = async () => {

      const [
        req_fabricante,
        req_modelo,
        req_prefixo
      ] = await Promise.all([
        axios.get("fabricante"),
        axios.get("modelo"),
        axios.get("prefixo"),

      ]);
      setFabricante(req_fabricante.data);
      setModelo(req_modelo.data);
      setPrefixo(req_prefixo.data);
      console.log(req_fabricante.data);
      console.log(req_modelo.data);
      console.log(req_prefixo.data);
    }
    ress();
  }, []);

  async function handleSubmit() {

    // console.log();

    try {
      const res = await axios.post('equipamento', {
        id_fabricante: id_fabricante,
        id_modelo: id_modelo,
        cd_prefixo: cd_prefixo
      });
      console.log('aqui e o erro' + res.data.error)
      if(!res.data){
        setIsSucess(false);
        setMsgFail({
          type: 'error',
          message: "Não inserido"
        })
      }else{
        setIsSucess(true);

        setMsgSucess({
          type: 'success', 
          message: 'Adicionado com sucesso'
        })
      }
    } catch{
      setIsSucess(false);

      console.log('error catch');
      setMsgFail({
        type: 'error',
        message: "Não inserido"
      })
    }
    
    //para da reload na pagina ao inserir
    //  setTimeout(() => {  window.location.reload(); }, 6000); 

  }

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
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

  return (
    <>
      <Topbar />
      <Title>Cadastrar Equipamento</Title>

      <Items onSubmit={(e) => handleSubmit(e.preventDefault())}>
        <Autocomplete className="item-id"
          id="Item"
          options={fabricante}
          getOptionLabel={(option) => option.id + " - " + option.nm_fabricante}
          onChange={(event, newValue) => {
            setIdfabricante(newValue?.id);
          }}
          onSelect={() => {
          }
          }
          style={{ width: 275 }}
          renderInput={(params) => <TextField {...params} label="FABRICANTE..." variant="standard"/>}
        />

        <Autocomplete className="item-id"
          id="Item"
          options={modelo}
          getOptionLabel={(option) => option.id + " - " + option.nm_modelo}
          onChange={(event, newValue) => {
            setIdmodelo(newValue?.id);
          }}
          onSelect={() => {
          }
          }
          style={{ width: 275 }}
          renderInput={(params) => <TextField {...params} label="MODELO..." variant="standard"  />}
        />

        <Autocomplete className="item-id"
          id="Item"
          options={prefixo}
          getOptionLabel={(option) => option.id + " - " + option.cd_prefixo}
          onChange={(event, newValue) => {
            setCdprefixo(newValue?.cd_prefixo);
          }}
          onSelect={() => {
          }
          }
          style={{ width: 275 }}
          renderInput={(params) => <TextField {...params} label="PREFIXO..." variant="standard" />}
        />

        <Button>
          <Strong className="fab-button" onClick={handleOpen} >Adicionar</Strong>
        </Button>
        { isSucess ?
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

