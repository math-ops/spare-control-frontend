// import React, { useState, useEffect } from 'react'
// import { Title, Box, Label, Input, Button, Alert, Back } from './style'
// import { Link } from 'react-router-dom';
// import './style.css'
// import arrow from '../../styles/assets/return.svg'
// import axios from 'axios';

// const baseURL='http://localhost:3333/modelo'

// export default function Modelo(){

//   const [setTableData] = useState([]);
//   const [modelo, SetModelo]=useState({
//     id:'',
//     nm_modelo: '',

//   })

//   const inserir=async() => {
//     await axios.post(baseURL, modelo)
//     .then(res=>{
//       setTableData((res.data))
//     })
//   }

//   const handleChange=e=>{
//     const {name, value}=e.target;
//     SetModelo(prevState=>({
//       ...prevState,
//       [name]: value
//     }))
//     console.log(modelo)
//   }

//   return(
//     <>
//       <Title>Adicionar Modelo</Title>

//       <Link to="/menu">
//         <Back src={arrow} alt="return" />
//       </Link>
//       <Box>
//         <Label className="fab">Nome do Modelo</Label>
//         <Input className="fab-input" name="nm_modelo" placeholder="Modelo" onChange={handleChange}/>
//         <Button className="fab-button" onClick={()=>inserir()}>Adicionar</Button>
//         <Alert className="alerta">ALERT MESSAGE</Alert>
//       </Box>
      
      
//     </>
//   )
// }

