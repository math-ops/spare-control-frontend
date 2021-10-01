import { Link } from 'react-router-dom';
import './style.css'
import { Title, Items, Label, Input, Button, Strong, Back} from './style'
import arrow from '../../styles/assets/return.svg'
export default function Item(){
  return(
    <>
      <Title>Spare Control Adicionar Item</Title>
      <Link to="/menu">
        <Back src={arrow} alt="return" />
      </Link>
      <Items>
        <Label className="id">ID</Label>
        <Input  className="id-input" placeholder="ID" />

        <Label className="fab">FABRICANTE</Label>
        <Input  className="fab-input" placeholder="Fabricante" />

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
    </>
  )
}

