import './style.css'
import { Title, Subtitle, OptionBox, OptionTitle, Button, Strong } from './style'
import { Link } from 'react-router-dom'
import Footer from '../Common/Footer'

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
            <OptionTitle>Cadastrar Modelo</OptionTitle>
            <Link to="/modelo">   
            <Button href="#">
            <Strong>SELECT</Strong>  
            </Button>
            </Link>
        </OptionBox>
        
        {/* Opção 03 */}
        <OptionBox className="rd">          
            <OptionTitle>Cadastrar Equipamento</OptionTitle>
            <Link to="/item">
            <Button href="#">
            <Strong>SELECT</Strong>  
            </Button>
            </Link>
        </OptionBox>

        {/* Opção 04 */}
        <OptionBox className="view-local">          
            <OptionTitle>Visualizar Modelos</OptionTitle>
            <Link to="/viewmod">
            <Button href="#">
            <Strong>SELECT</Strong>  
            </Button>
            </Link>
        </OptionBox>

        {/* Opção 05 */}
        <OptionBox className="view-model">
          <OptionTitle>Visualizar Fabricantes</OptionTitle>
          <Link to="/viewfab">
            <Button href="#">
              <Strong>SELECT</Strong>
            </Button>
          </Link>
        </OptionBox>

        {/* Opção 06 */}
        <OptionBox className="menu-local">
          <OptionTitle>Cadastrar Local</OptionTitle>
          <Link to="/local">
            <Button href="#">
              <Strong>SELECT</Strong>
            </Button>
          </Link>
        </OptionBox>

      {/* Opção 07 */}
      <OptionBox className="fourth">
        <OptionTitle>Cadastrar Áreas</OptionTitle>
        <Link to="/area">
          <Button href="#">
            <Strong>SELECT</Strong>
          </Button>
        </Link>
      </OptionBox>

      </div>

      <Footer />
    </>
  )
}


