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
        <OptionBox className="op1">          
            <OptionTitle>Cadastrar Fabricante</OptionTitle>
            <Link to="/fabricante">
            <Button href="#">
              <Icon src={arrow}/> 
            </Button>
            </Link>
        </OptionBox>
      
        {/* Opção 02 */}
        <OptionBox className="op2">          
            <OptionTitle>Cadastrar Modelo</OptionTitle>
            <Link to="/modelo">   
            <Button href="#">
              <Icon src={arrow}/>  
            </Button>
            </Link>
        </OptionBox>
        
        {/* Opção 03 */}
        <OptionBox className="op3">          
            <OptionTitle>Cadastrar Serial</OptionTitle>
            <Link to="/item">
            <Button href="#">
              <Icon src={arrow}/>  
            </Button>
            </Link>
        </OptionBox>

        {/* Opção 04 */}
        <OptionBox className="op9">          
            <OptionTitle>Visualizar Modelos</OptionTitle>
            <Link to="/viewmod">
            <Button href="#">
              <Icon src={arrow}/>  
            </Button>
            </Link>
        </OptionBox>

        {/* Opção 05 */}
        <OptionBox className="op8">
          <OptionTitle>Visualizar Fabricantes</OptionTitle>
          <Link to="/viewfab">
            <Button href="#">
              <Icon src={arrow}/>
            </Button>
          </Link>
        </OptionBox>

        {/* Opção 06 */}
        <OptionBox className="op4">
          <OptionTitle>Cadastrar Local</OptionTitle>
          <Link to="/local">
            <Button href="#">
              <Icon src={arrow}/>
            </Button>
          </Link>
        </OptionBox>

      {/* Opção 07 */}
      <OptionBox className="op5">
        <OptionTitle>Cadastrar Prédio</OptionTitle>
        <Link to="/area">
          <Button href="#">
            <Icon src={arrow}/>
          </Button>
        </Link>
      </OptionBox>

      {/* Opção 08 */}
      <OptionBox className="op10">
        <OptionTitle>Vizualizar Equipamentos</OptionTitle>
        <Link to="/viewitem">
          <Button href="#">
            <Icon src={arrow}/>
          </Button>
        </Link>
      </OptionBox>

      {/* Opção 09 */}
      <OptionBox className="op7">
        <OptionTitle>Cadastrar Equipamentos</OptionTitle>
        <Link to="/insereequip">
          <Button href="#">
            <Icon src={arrow}/>
          </Button>
        </Link>
      </OptionBox>

      {/* Opção 10 */}
      <OptionBox className="op6">
        <OptionTitle>Cadastrar Prefixos</OptionTitle>
        <Link to="/cadprefixo">
          <Button href="#">
            <Icon src={arrow}/>
          </Button>
        </Link>
      </OptionBox>

      </div>
    </>
  )
}


