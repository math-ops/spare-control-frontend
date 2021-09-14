import styled from "styled-components";
import './menu.css'

export default function Menu(){
  return(
    <>
    <Title>Spare Control</Title>
    <Subtitle>Please, select an option bellow</Subtitle>
      <div className="menu">

        {/* Opção 01 */}
        <OptionBox className="first">          
            <OptionTitle>name.option</OptionTitle>
            <Button href="#">
            <Strong>SELECT</Strong>  
            </Button>
        </OptionBox>
      
        {/* Opção 02 */}
        <OptionBox className="second">          
            <OptionTitle>name.option</OptionTitle>
            <Button href="#">
            <Strong>SELECT</Strong>  
            </Button>
        </OptionBox>

        {/* Opção 03 */}
        <OptionBox className="rd">          
            <OptionTitle>name.option</OptionTitle>
            <Button href="#">
            <Strong>SELECT</Strong>  
            </Button>
        </OptionBox>

      </div>
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
  margin-left: 0px;

`;

export const Subtitle = styled.h2`
  text-align: center;
  font-family: 'Poppins', sans-serif;
  font-weight: 300;
  font-size: 15px;
  color: #fff;
  text-shadow: 2px 2px #000;
  margin-left: 0px;
  margin-top: -10px;
  margin-bottom: 10px;
`;

export const Strong = styled.strong`
  text-align: center;
    font-family: 'Roboto', sans-serif;
    font-weight: 600;
    position: absolute;
    margin-top: 25px;
    margin-left: 21px;  
    color: #eee;
`;

export const OptionTitle = styled.h3`
  font-family: 'Roboto', sans-serif;
    font-weight: 600;
    text-align: center;
    margin-top: 10px;
`;

export const OptionBox = styled.div`
  position: absolute;
    width: 250px;
    height: 150px;
    border: none;
    border-radius: 5px;
    background: #eee;
    transition: transform 0.4s;

  &:hover {
    transform: translateX(10px);
  }
`;

export const Button = styled.a`
  position: absolute;
    width: 100px;
    height: 70px;
    border: none;
    border-radius: 25px;
    margin-top: 20px;
    margin-left: 70px;
    background: #00c95d;

`;