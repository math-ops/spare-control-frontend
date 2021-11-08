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

import img from '../../styles/img/white.png'

import styled from "styled-components";

export const Logo = styled.img`
  position: absolute;
  height: 150px;
  width: 190px;
  top: 10px;
  left: 25%;
`;


export const Card = styled.div`
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
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
    <Logo src={img}/>
    <Card>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '310px' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Username" variant="outlined" />
    </Box>
      
      <FormControl sx={{ m: 1, width: '310px' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
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

        <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '310px' },
      }}
      noValidate
      autoComplete="off"
    >
      
      <Button sx={{m: 1, widht: '300px'}} variant="contained">Login</Button>
    </Box>
    
    </Card>
        </>
  );
}