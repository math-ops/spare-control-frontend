import Topbar from '../Common/Header'
import { Title, Box, Label, Input, Button } from './style'
import './style.css'


export default function Local(){
  return(
    <>
    <Topbar />
    <Title>Cadastro de Local/Área</Title>
    <CadLocal />
    <CadArea />
    </>
  )
}


export function CadLocal(){
  return(
    <>
      <Box className="local-box">
        <Label className="local">Local</Label>
        <Input className="local-input" placeholder="Local" />
        <Button className="local-button">Adicionar</Button>
      </Box>
    </>
  )
}

export function CadArea(){
  return(
    <>
      <Box className="area-box">
        <Label className="area">Área</Label>
        <Input className="area-input" placeholder="Área"/>
        <Button className="area-button">Adicionar</Button>
      </Box>
    </>
  )
}