
import './style.css'
import { Title, Items, Label, Input, Button, Strong } from './style'
import Topbar from '../Common/Header'
import Footer from '../Common/Footer'
export default function Item(){
  return(
    <>
    <Topbar />
      <Title>Spare Control Adicionar Item</Title>
      <Items>
        <Label className="id">ID</Label>
        <Input  className="id-input" placeholder="ID" />

        <Label className="manf">FABRICANTE</Label>
        <Input  className="manf-input" placeholder="Fabricante" />

        <Label className="mod">MODELO</Label>
        <Input className="mod-input" placeholder="Modelo"/>

        <Label className="loc">LOCAL</Label>
        <Input className="loc-input" placeholder="Local"/>

        <Label className="area">AREA</Label>
        <Input className="area-input" placeholder="Area"/>

        <Label className="qtd">QUANTIDADE</Label>
        <Input className="qtd-input" type="number" placeholder="Quantidade"/>

        <Button>
          <Strong>Adicionar</Strong>
        </Button>
      </Items>
      <Footer />
    </>
  )
}

