import './login.css'
import { Subtitle, Form, Input, Label, Button, Alert, Checkbox, Remember, Background } from './style'
import bg from '../../styles/assets/bg2.jpg'

export default function Sigin(){
  return(
    <>
    <Subtitle>Spare Control - Login</Subtitle>
    <Background src={bg} />
      <Form>
        <Label>Username</Label>
        <Input type="text" placeholder="Username" />

        <Label>Password</Label>
        <Input type="password" placeholder="Password" />

        <Checkbox type="checkbox" />
        <Remember>Remember me</Remember>

        <Button>Login</Button>
        <Alert>Error Message</Alert>
      </Form>
      
      
    </>
  )
}
