import styled from "styled-components";

export const Subtitle = styled.h1`
  text-align: center;
  font-family: "Popins", sans-serif;
  font-weight: 600;
  color: #fff;
  text-shadow: 2px 2px #000;
  margin-left: 30px;
  background: none;
`;

export const Form = styled.form`
  position: absolute;
  width: 100%;
  height: 500px;
  border: none;
  background: #eee;
  background-image: linear-gradient(to bottom, #009add, #001b94);
  margin-top: 30px;
  margin-bottom: 100px;
  margin-left: 5%;
  margin-right: 5%;
  border-radius: 10px;
  box-shadow: 0 0 15px #001b94;
`;

export const Label = styled.label`
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  font-size: 30px;
  position: absolute;

  margin-top: 30px;
  margin-left: 10px;
  color: #fff;
`;

export const Input = styled.input`
  margin-top: 20%;
  margin-left: 10px;
  margin-right: 20px;
  border: none;
  background: #fff;
  height: 60px;
  width: 340px;
  border-radius: 5px;
  padding: 15px;
`;

export const Button = styled.button`
  font-family: 'Roboto', sans-serif;
  font-weight: 600;
  color: #fff;
  font-size: 20px;
  border: none;
  background: #009add;
  cursor: pointer;
  position: absolute;
  justify-content: center;
  align-items: center;

  height: 70px;
  width: 150px;
  border-radius: 25px;
  margin-top: 20px;
  margin-left: 30%;
  &:hover {
    transition: 0.4s ease-out;
    background: #fff;
    color: #000;
  }
`;

export const Checkbox = styled.input`
  margin-top: 45px;
  margin-left: 10px;
  height: 20px;
  width: 20px;
`;

export const Remember = styled.h2`
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  text-align: left;
  margin-left: 10%;
  margin-top: -7%;
  color: #fff;
`;

export const Alert = styled.h2`
  position: absolute;
  color: #fff;
  font-family: "Roboto", sans-serif;
  text-align: center;
  font-weight: 300;
  font-size: 25px;

  margin-top: 110px;
  margin-left: 30%;
`;

export const Background = styled.img`
  position: absolute;
  width: 110vw;
  height: 112vh;
  margin-top: -40px;  
`;