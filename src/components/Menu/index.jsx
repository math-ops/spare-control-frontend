import './style.css'
import { Title, Subtitle, OptionBox, OptionTitle, Button, Icon } from './style'
import arrow from '../../styles/assets/arrow.png'
import { Link } from 'react-router-dom'
// import Footer from '../Common/Footer'

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
              <Icon src={arrow}/> 
            </Button>
            </Link>
        </OptionBox>
      
        {/* Opção 02 */}
        <OptionBox className="second">          
            <OptionTitle>Cadastrar Modelo</OptionTitle>
            <Link to="/modelo">   
            <Button href="#">
              <Icon src={arrow}/>  
            </Button>
            </Link>
        </OptionBox>
        
        {/* Opção 03 */}
        <OptionBox className="rd">          
            <OptionTitle>Cadastrar Serial</OptionTitle>
            <Link to="/item">
            <Button href="#">
              <Icon src={arrow}/>  
            </Button>
            </Link>
        </OptionBox>

        {/* Opção 04 */}
        <OptionBox className="view-local">          
            <OptionTitle>Visualizar Modelos</OptionTitle>
            <Link to="/viewmod">
            <Button href="#">
              <Icon src={arrow}/>  
            </Button>
            </Link>
        </OptionBox>

        {/* Opção 05 */}
        <OptionBox className="view-inserir-equip">
          <OptionTitle>Visualizar Fabricantes</OptionTitle>
          <Link to="/viewfab">
            <Button href="#">
              <Icon src={arrow}/>
            </Button>
          </Link>
        </OptionBox>

        {/* Opção 06 */}
        <OptionBox className="menu-local">
          <OptionTitle>Cadastrar Local</OptionTitle>
          <Link to="/local">
            <Button href="#">
              <Icon src={arrow}/>
            </Button>
          </Link>
        </OptionBox>

      {/* Opção 07 */}
      <OptionBox className="fourth">
        <OptionTitle>Cadastrar Prédio</OptionTitle>
        <Link to="/area">
          <Button href="#">
            <Icon src={arrow}/>
          </Button>
        </Link>
      </OptionBox>

      {/* Opção 08 */}
      <OptionBox className="view-equip">
        <OptionTitle>Vizualizar Equipamentos</OptionTitle>
        <Link to="/viewitem">
          <Button href="#">
            <Icon src={arrow}/>
          </Button>
        </Link>
      </OptionBox>

      {/* Opção 09 */}
      <OptionBox className="view-model">
        <OptionTitle>Inserir Equipamentos</OptionTitle>
        <Link to="/insereequip">
          <Button href="#">
            <Icon src={arrow}/>
          </Button>
        </Link>
      </OptionBox>

      </div>
    </>
  )
}


