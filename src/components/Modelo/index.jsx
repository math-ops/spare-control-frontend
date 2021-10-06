import { Title, Box, Label, Input, Button, Alert } from './style'
import './style.css'
import Topbar from '../Common/Header';

export default function Modelo(){

  return(
    <>
      <Topbar />
      <Title>Adicionar Modelo</Title>
      <Box>
        <Label className="fab">Nome do Modelo</Label>
        <Input className="fab-input" placeholder="Modelo"/>
        <Button className="fab-button">Adicionar</Button>
        <Alert className="alerta">ALERT MESSAGE</Alert>
      </Box>
      
      
    </>
  )
}

