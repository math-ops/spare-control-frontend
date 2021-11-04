import { useState } from 'react';
import './login.css'
import { Subtitle, Form, Input, Label, Button, Alert, Checkbox, Remember, Background } from './style'
import bg from '../../styles/assets/bg2.jpg'
import { useHistory } from 'react-router-dom';
import axios from 'axios'

const baseURL = 'http://localhost:3333/'


export default function Sigin(){
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleUser = e => {
    const usuario = e.target.value;
    setUser(usuario);
  }

  const handlePassword = e => {
    const senha = e.target.value;
    setPassword(senha);
  }


  const handleSubmit = e => {
    e.preventDefault();

    try{
      console.log(user,password);
    axios.post(`${baseURL}authenticate`, {
      userText:user,
      passwordText:password,
    }).then((response) => {
      console.log('passou aqui')
      history.push('/menu');
    })
    }
    catch(error){

    }

    
  }



  return(
    <>
    <Subtitle>Spare Control - Login</Subtitle>
    <Background src={bg} />
      <Form onSubmit={handleSubmit}>
        <Label>Username</Label>
        <Input type="text" placeholder="Username" value={user} onChange={handleUser} />

        <Label>Password</Label>
        <Input type="password" placeholder="Password"  value={password} onChange={handlePassword}/>

        <Checkbox type="checkbox" />
        <Remember>Remember me</Remember>

        <Button>Login</Button>
        
      </Form>
      
      <Alert></Alert>
      
      
    </>
  )
}
