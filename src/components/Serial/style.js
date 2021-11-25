import styled from "styled-components";

export const Title = styled.h1`
  text-align: center;
  padding: 1.4rem 0 1.4rem;
  font-family: "Popins", sans-serif;
  font-weight: 600;
  color: #fff;
  text-shadow: 2px 2px #000;
`;

export const Items = styled.div`
  position: absolute;
  width: 335px;
  height: 390px;
  background: #eee;
  border-radius: 3px;
  margin-left: 14.5px;
  box-shadow: 0 0 15px #001b94;
`;

export const Label = styled.label`
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  position: absolute;
`;

export const Input = styled.input`
  position: absolute;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  height: 40px;
  width: 300px;
  margin-left: 20px;
  border: none;
  border-radius: 5px;
`;

export const Button = styled.a`
  position: absolute;
  width: 130px;
  height: 50px;
  border: none;
  border-radius: 15px;
  background: #00c95d;
  top: 330px;
  margin-left: 100px;
  cursor: pointer;
  &:hover {
    transition: 0.4s ease-out;
    background: #009a00;
    color: #fff;
  }
`;

export const Strong = styled.strong`
  text-align: center;
  font-family: "Roboto", sans-serif;
  font-weight: 600;
  position: absolute;
  margin-top: 15px;
  margin-left: 30px;
  color: #eee;
`;

export const Back = styled.img`
  position: absolute;
  width: 50px;
  height: 50px;
  margin-top: -80px;
  margin-left: 5px;
`;

export const Footer = styled.h2`
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  color: #fff;
  position: absolute;
  top: 95%;
  left: 10%;
`;