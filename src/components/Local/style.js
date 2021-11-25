import styled from "styled-components";

export const Title = styled.h1`
  text-align: center;
  font-family: "Roboto", sans-serif;
  font-weight: 600;
  color: #fff;
  margin-top: 20px;
  text-shadow: 2px 2px 0.25px #000;
`;

export const Box = styled.form`
  position: absolute;
  top: 17%;
  width: 90%;
  height: 47%;
  border: none;
  background: #eee;
  border-radius: 3px;
  box-shadow: 0 0 15px #001b94;
`;

export const Label = styled.label`
  text-align: start;
  font-family: "Popins", sans-serif;
  font-weight: 300;

  position: absolute;
  margin-left: 20px;
`;

export const Input = styled.input`
  font-family: "Popins", sans-serif;
  font-weight: 300;

  position: absolute;
  margin-left: 15px;
  width: 90%;
  padding: 15px;

  border: none;
  border-radius: 10px;
  outline: none;
`;

export const Button = styled.button`
  position: absolute;
  width: 130px;
  height: 50px;
  border: none;
  border-radius: 15px;
  background: #00c95d;
  top: 20px;
  margin-left: 100px;
  cursor: pointer;
  &:hover {
    transition: 0.4s ease-out;
    background: #009a00;
    color: #fff;
  }
`;

export const Alert = styled.h2`
  font-family: "Popins", sans-serif;
  font-weight: 700;
  position: absolute;
  color: green;
  text-align: center;
`;

export const Back = styled.img`
  position: absolute;
  width: 50px;
  height: 50px;
  margin-top: -10px;
  margin-left: 5px;
`;

export const Footer = styled.h2`
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  color: #fff;
  position: absolute;
  top: 150%;
  left: 13%;
`;
