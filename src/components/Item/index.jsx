import styled from 'styled-components'
import './item.css'

export default function Item(){
  return(
    <>
      <Title>Spare Control Adicionar Item</Title>
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

export const Title = styled.h1`
  text-align: center;
  padding: 1.4rem 0 1.4rem;
  font-family: 'Popins', sans-serif;
  font-weight: 600;
  color: #fff;
  text-shadow: 2px 2px #000;

`;

export const Items = styled.div`
  position: absolute;
  width: 335px;
  height: 500px;
  background: #eee;
  border-radius: 3px;
  margin-left: 14.5px;
  box-shadow: 4px 4px 0.25 rgba(0, 0, 0, 0.24);
  
`;

export const Label = styled.label`
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  position: absolute;
`;

export const Input = styled.input`
  position: absolute;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  height: 40px;
  width: 300px;
  margin-left: 20px;
  border: none;
`;

export const Button = styled.a`
  position: absolute;
  width: 100px;
  height: 50px;
  border: none;
  border-radius: 25px;
  background: #00c95d; 
  margin-top: 445px;
  margin-left: 120px;
`;

export const Strong = styled.strong`
  text-align: center;
  font-family: 'Roboto', sans-serif;
  font-weight: 600;
  position: absolute;
  margin-top: 15px;
  margin-left:15px;
  color: #eee;

`;