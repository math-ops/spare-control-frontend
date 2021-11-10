import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios'
import img from '../../styles/img/blue.png'
import styled from "styled-components";
import Snackbar from '@mui/material/Snackbar'
import MuiAlert from '@mui/material/Alert'

const baseURL = 'http://localhost:3333/'

export const Background = styled.div`
  background: #eee;
  height: 100vh;
`;

export const Logo = styled.img`
  position: absolute;
  height: 150px;
  width: 190px;
  top: 10px;
  left: 25%;
`;

export const Card = styled.form`
  position: absolute;
  height: 200px;
  width: 325px;
  top: 200px;
  left: 25px;
  background: #eee;
`;

export const Title = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  color: #000;
  text-align: center;
`;

export function InputWithIcon() {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [sucess, setSucess] = useState(false);
  const history = useHistory();
  
  const handleUser = e => {
    const usuario = e.target.value;
    setUser(usuario);
    console.log('handleusuario');
  }

  const handlePassword = e => {
    const senha = e.target.value;
    setPassword(senha);
    console.log('handlesenha');
  }

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props}/>;
  })   

  const handleSubmit = e=> {
    e.preventDefault();
    try{
      console.log(user,password);
      axios.post(`${baseURL}authenticate`, {
      userText:user,
      passwordText:password,

    }).then((response) => {
      console.log('passou aqui 2')
      history.push('/menu');
      
    })
    console.log('passou aqui 3')
    
    }
    catch(error){
      console.log(error);
      
    }  

    console.log('passou aqui 1')
    
  }

  


  const [values, setValues] = React.useState({
    password: '',
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  //ALERTA////////////////////////////////////

  function FlashMessage(){
    const [open, setOpen] = useState(true);
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }

      setOpen(false);
    }

    return (
      <>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
            Usuário/Senha inválidos!
          </Alert>
        </Snackbar>
      </>
    );
  }

  // function FlashSucess(){
  //   const [open, setOpen] = useState(true);
  //   const handleClose = (event, reason) => {
  //     if (reason === 'clickaway') {
  //       return;
  //     }

  //     setOpen(false);
  //   }

  //   return (
  //     <>
  //       <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
  //         <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
  //           Bem-Vindo!
  //         </Alert>
  //       </Snackbar>
  //     </>
  //   );
  // }

  return (
    <>
    <Background>
    <Logo src={img}/>
    <Card onSubmit={handleSubmit}>
    <Box component="form" sx={{'& > :not(style)': { m: 1, width: '310px' },}} noValidate autoComplete="off">
      <TextField id="outlined-basic" label="Username" variant="outlined" value={user} onChange={handleUser} />
    </Box>      
      <FormControl sx={{ m: 1, width: '310px' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password" >Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={password}
            onChange={handlePassword}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        <Box component="form" sx={{'& > :not(style)': { m: 1, width: '310px' },}} noValidate autoComplete="off">    
           <Button sx={{m: 1, widht: '300px'}} variant="contained" type="submit" onClick={handleSubmit}>Login</Button>
        </Box>
    </Card>
            {
              !sucess ? '' : <FlashMessage />
            }
            
    </Background>
        </>
  );
}