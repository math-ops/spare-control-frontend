import { Title, Subtitle, OptionBox, OptionTitle, Button, Icon, Footer } from './style'
import fab from '../../styles/img/fab.png'
import mod from '../../styles/img/mod.png'
import serial from '../../styles/img/serial.png'
import local from '../../styles/img/local.png'
import pred from '../../styles/img/predio.png'
import pfx from '../../styles/img/prefix.png'
import eqp from '../../styles/img/equip.png'
import view from '../../styles/img/view.png'
import { Link } from 'react-router-dom'
import './style.css'

export default function Menu(){
  return(
    <>
    <Title>Spare Control</Title>
    <Subtitle>Please, select an option bellow</Subtitle>
      <div className="menu">

        {/* Opção 01 */}
        <OptionBox className="op1">          
            <OptionTitle>Cadastrar Fabricante</OptionTitle>
            <Link to="/cfab">
            <Button href="#">
              <Icon src={fab}/> 
            </Button>
            </Link>
        </OptionBox>
      
        {/* Opção 02 */}
        <OptionBox className="op2">          
            <OptionTitle>Cadastrar Modelo</OptionTitle>
            <Link to="/cmod">   
            <Button href="#">
              <Icon src={mod}/>  
            </Button>
            </Link>
        </OptionBox>
        
        {/* Opção 03 */}
        <OptionBox className="op3">          
            <OptionTitle>Cadastrar Serial</OptionTitle>
            <Link to="/csrl">
            <Button href="#">
              <Icon src={serial}/>  
            </Button>
            </Link>
        </OptionBox>

        {/* Opção 04 */}
        <OptionBox className="op4">
          <OptionTitle>Cadastrar Local</OptionTitle>
          <Link to="/cloc">
            <Button href="#">
              <Icon src={local}/>
            </Button>
          </Link>
        </OptionBox>

        {/* Opção 05 */}
      <OptionBox className="op5">
        <OptionTitle>Cadastrar Prédio</OptionTitle>
        <Link to="/cprd">
          <Button href="#">
            <Icon src={pred}/>
          </Button>
        </Link>
      </OptionBox>

      {/* Opção 06 */}
      <OptionBox className="op6">
        <OptionTitle>Cadastrar Prefixos</OptionTitle>
        <Link to="/cpfx">
          <Button href="#">
            <Icon src={pfx}/>
          </Button>
        </Link>
      </OptionBox>

      {/* Opção 07 */}
      <OptionBox className="op7">
        <OptionTitle>Cadastrar Equipamentos</OptionTitle>
        <Link to="/ceqp">
          <Button href="#">
            <Icon src={eqp}/>
          </Button>
        </Link>
      </OptionBox>

      {/* Opção 08 */}
      <OptionBox className="op8">
          <OptionTitle>Visualizar Fabricantes</OptionTitle>
          <Link to="/vfab">
            <Button href="#">
              <Icon src={view}/>
            </Button>
          </Link>
        </OptionBox>

        {/* Opção 09 */}
        <OptionBox className="op9">          
            <OptionTitle>Visualizar Modelos</OptionTitle>
            <Link to="/vmod">
            <Button href="#">
              <Icon src={view}/>  
            </Button>
            </Link>
        </OptionBox>    

      {/* Opção 10 */}
      <OptionBox className="op10">
        <OptionTitle>Vizualizar Equipamentos</OptionTitle>
        <Link to="/veqp">
          <Button href="#">
            <Icon src={view}/>
          </Button>
        </Link>
      </OptionBox>  

      <Footer>Flex&copy; - All Rights Reserved</Footer>

      </div>
    </>
  )
}


