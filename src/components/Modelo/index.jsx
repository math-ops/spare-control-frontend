import { Title, Box, Label, Input, Button, Alert, Back } from './style'
import { Link } from 'react-router-dom';
import './style.css'
import arrow from '../../styles/assets/return.svg'

export default function Modelo(){

  return(
    <>
      <Title>Adicionar Modelo</Title>

      <Link to="/menu">
        <Back src={arrow} alt="return" />
      </Link>
      <Box>
        <Label className="fab">Nome do Modelo</Label>
        <Input className="fab-input" placeholder="Modelo"/>
        <Button className="fab-button">Adicionar</Button>
        <Alert className="alerta">ALERT MESSAGE</Alert>
      </Box>
      
      
    </>
  )
}

