import { Title, Box, Label, Input, Button, Alert } from './style'
import './style.css'
import Topbar from '../Common/Header';

export default function Modelo(){

  return(
    <>
      <Topbar />
      <Title>Adicionar Modelo</Title>
      <Box>
        <Label className="fab">Nome do Fabricante</Label>
        <Input className="fab-input" placeholder="Fabricante"/>

        <Label className="model">Nome do Modelo</Label>
        <Input className="model-input" placeholder="Modelo"/>

        <Button className="cad-button">Adicionar</Button>
        <Alert className="alerta-model">ALERT MESSAGE</Alert>
      </Box>
      
      
    </>
  )
}

