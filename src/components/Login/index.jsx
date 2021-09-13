import styled from 'styled-components'
import './login.css'

export default function Sigin(){
  return(
    <>
    <Subtitle>Spare Control - Login</Subtitle>
      <div className="sigin-form">
        <form action="">
          <label className="sigin-label" htmlFor="">Login</label>
          <input className="sigin-input" type="text" placeholder="Login"/>

          <div>
          <label className="sigin-label" htmlFor="">Password</label>
          <input className="sigin-input" type="password" placeholder="Password"/>
          </div>

          <div>
          <input className="sigin-check" type="checkbox" value="true" />
          <label className="sigin-box" htmlFor=""> Remember me</label>
          </div>

          <button className="sigin-button">Login</button>
          <h4 className="errormsg">Error Message</h4>
        </form>
      </div>
    </>
  )
}

export const Subtitle = styled.h1`
  text-align: center;
  padding: 1.4rem 0 1.4rem;
  font-family: 'Popins', sans-serif;
  font-weight: 600;
  color: #fff;
  text-shadow: 2px 2px #000;
  margin-left: 30px;
`;