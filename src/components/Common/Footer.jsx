import styled from 'styled-components'

export default function Footer(){
  return(
    <Foot>
      <small>Flex&copy; - All Rights Reserved</small>
    </Foot>
  )
}

export const Foot = styled.footer`
  text-align: center;
  padding: 1.4rem 0 1.4rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 300;
  font-size: 15px;
  color: #fff;
  opacity: 0.8;
  margin-top: 565px;
  margin-left: 30px;
`;