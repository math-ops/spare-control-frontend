
import './style.css'
import { Title, Items, Label, Input, Button, Strong } from './style'
import Topbar from '../Common/Header'
import Footer from '../Common/Footer'
export default function Item(){
  return(
    <>
    <Topbar />
      <Title>Cadastrar Equipamento</Title>
      <Items>
        <Label className="item-id">ID</Label>
        <Input  className="item-id-input" placeholder="ID" />

        <Label className="item-manf">FABRICANTE</Label>
        <Input  className="item-manf-input" placeholder="Fabricante" />

        <Label className="item-mod">MODELO</Label>
        <Input className="item-mod-input" placeholder="Modelo"/>

        <Label className="item-loc">LOCAL</Label>
        <Input className="item-loc-input" placeholder="Local"/>

        <Label className="item-area">AREA</Label>
        <Input className="item-area-input" placeholder="Area"/>

        <Label className="item-qtd">QUANTIDADE</Label>
        <Input className="item-qtd-input" type="number" placeholder="Quantidade"/>

        <Button>
          <Strong>Adicionar</Strong>
        </Button>
      </Items>
      <Footer />
    </>
  )
}

