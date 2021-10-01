import './style.css'
import { Title, Subtitle, OptionBox, OptionTitle, Button, Strong } from './style'
import { Link } from 'react-router-dom'

export default function Menu(){
  return(
    <>
    <Title>Spare Control</Title>
    <Subtitle>Please, select an option bellow</Subtitle>
      <div className="menu">

        {/* Opção 01 */}
        <OptionBox className="first">          
            <OptionTitle>Cadastrar Fabricante</OptionTitle>
            <Link to="/fabricante">
            <Button href="#">
            <Strong>SELECT</Strong>  
            </Button>
            </Link>
        </OptionBox>
      
        {/* Opção 02 */}
        <OptionBox className="second">          
            <OptionTitle>Adicionar Item</OptionTitle>
            <Link to="/item">
            <Button href="#">
            <Strong>SELECT</Strong>  
            </Button>
            </Link>
        </OptionBox>

        {/* Opção 03 */}
        <OptionBox className="rd">          
            <OptionTitle>Imprimir Labels</OptionTitle>
            <Button href="#">
            <Strong>SELECT</Strong>  
            </Button>
        </OptionBox>

      </div>
    </>
  )
}


