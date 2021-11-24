// import Autocomplete from '@material-ui/lab/Autocomplete'
import Topbar from '../Common/Header'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { Link } from 'react-router-dom'
import { Items, Strong, Title, Subtitle, Button, Footer } from './style'
import './style.css'

export default function Inventory(){
  return(
    <>
      <Topbar />
      <Title>Inventário</Title>
      <Subtitle>Preencha os campos abaixo!</Subtitle>
      <Items>
        <Autocomplete className="item-id"
        style={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Equipamento..." variant="standard"/>}
        /> 
        <Autocomplete className="item-id"
        style={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Local..." variant="standard"/>}
        />
        <Link to="/go">
        <Button>          
          <Strong>Prosseguir</Strong>
        </Button>
        </Link>
      </Items>
      <Footer>Flex&copy; - All Rights Reserved</Footer>
    </>
  )
}