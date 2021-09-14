import { Title, Box, Label, Input, Button, Alert } from './fabricante'
import './style.css'

export default function Fabricante(){

  return(
    <>
      <Title>Adicionar Fabricante</Title>
      <Box>
        <Label className="fab">Nome do Fabricante</Label>
        <Input className="fab-input" placeholder="Fabricante"/>
        <Button className="fab-button">Adicionar</Button>
        <Alert className="alerta">ALERT MESSAGE</Alert>
      </Box>
      
      
    </>
  )
}