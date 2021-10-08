import styled from 'styled-components'

export const Modal = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0, .7);
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 1;
  visibility: visible;
  z-index: 1;
`;

export const Button = styled.button`
  width: 30%;
  height: 10%;
  position: fixed;
  margin-right: auto;
  margin-left: 30%;
  margin-top: 5%;
  border: none;
  background-color: #009add;

`;

export const Cancelar = styled.a`
  font-family: 'Popins', sans-serif;
  font-weight: 300;
  color: #949494;
  text-decoration: underline;
  cursor: pointer;
  position: absolute;
  text-align: center;
  margin-right: auto;
  margin-left: 30%;
  margin-top: 30%;
`;

export const MessageLogout = styled.h2`
  text-align: center;
  font-family: 'Popins', sans-serif;
  font-weight: 300;
  color: #333;
  font-size: 25px;
  margin-top: 20%;

`;

export const MessageCadastro = styled.h2`
  text-align: center;
  font-family: 'Popins', sans-serif;
  font-weight: 300;
  color: #333;
  font-size: 25px;
  margin-top: 45%;

`;

export const AlertBox = styled.div`
  width: 95%;
  height: 50%;
  background: rgba(255,255,255, 1);
  border: 1px solid #000;
`;

export const Vector = styled.img`
  width: 30%;
  height: 30%;
  position: fixed;
  margin-left: 33%;
  margin-top: -5%;
`;

