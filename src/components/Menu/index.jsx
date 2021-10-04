import './style.css'
import { Title, Subtitle, OptionBox, OptionTitle, Button, Strong } from './style'
import { Link } from 'react-router-dom'

export default function Menu(){
  return(
    <>
    <Title>Spare Control</Title>
    <Subtitle>Please, select an option bellow</Subtitle>
      <div className="menu">;

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
            <OptionTitle>Cadastrar Modelo</OptionTitle>
            <Link to="/modelo">   
            <Button href="#">
            <Strong>SELECT</Strong>  
            </Button>
            </Link>
        </OptionBox>

        {/* Opção 04 */}
        <OptionBox className="fourth">          
            <OptionTitle>Visualizar Inseridos</OptionTitle>
            <Link to="/tab_modelo">
            <Button href="#">
            <Strong>SELECT</Strong>  
            </Button>
            </Link>
        </OptionBox>

      </div>
    </>
  )
}


