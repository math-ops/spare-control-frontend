import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import back from '../../styles/assets/returnblk.svg'
import logout from '../../styles/assets/logout.svg'


export default function Topbar(){
  return(
    <>
      <Header>
        <Link to="/menu">
          <Return>         
            <Svg src={back}/>          
          </Return>
        </Link>

        <Link to="/">
          <Logout>
            <Svg src={logout}/>
          </Logout>
        </Link>

      </Header>  
    
    </>
  )
}

export const Header = styled.header`
  padding: 0;
  background: #eee;
  height: 50px;
`;

export const Return = styled.button`
  position: absolute;
  border: none;
  padding: 0;
  width: 30px;
  height: 30px;
  margin-left: 2%;
  margin-top: 10px;
`;

export const Logout = styled.button`
  position: absolute;
  border: none;
  padding: 0;
  width: 30px;
  height: 30px;
  margin-left: 90%;
  margin-top: 10px;
`;

export const Svg = styled.img`
  
`;
