// import { Title, Box, Label, Input, Button, Alert } from './fabricante'
// import './style.css'

// import React, { useState, useEffect } from 'react'
// import { makeStyles, withStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TablePagination from '@material-ui/core/TablePagination';
// import TableRow from '@material-ui/core/TableRow';
// import axios from 'axios';

// const baseURL='http://localhost:3333/fabricante'

// //Estilização das Células
// const StyledTableCell = withStyles((theme) => ({
//   head: {
//     backgroundColor: '#001b94',
//     color: theme.palette.common.white,
//     fontSize: 20,
//       fontWeight: 'bold',
//   },
//   body: {
//     fontSize: 16,
//     background: '#fff',
//   },
// }))(TableCell);

// const columns = [
//   { id: 'id', label: 'ID', minWidth: 170 },
//   { id: 'nm_fabricante', label: 'FABRICANTE', minWidth: 100 },
  
// ];

// const useStyles = makeStyles({
//   root: {
//     width: '95%',
//     marginTop: '320px',
//     marginLeft: '10px',
//     marginRight: '10px',
//   },
//   container: {
//     maxHeight: 440,
//   },
// });

// export function StickyHeadTable() {
//   const classes = useStyles();
//   const [page, setPage] = React.useState(0);
//   const [rowsPerPage, setRowsPerPage] = React.useState(10);
//   const [data, setTableData] = useState([]);

  

//   useEffect(() => {
//     axios.get(baseURL)
//       .then((res) => {
//         console.log(res.data);
//         setTableData(res.data);
//       })
//   }, []);

  


//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(+event.target.value);
//     setPage(0);
//   };

//   return (
//     <Paper className={classes.root}>
//       <TableContainer className={classes.container}>
//         <Table stickyHeader aria-label="sticky table">
//           <TableHead>
//             <TableRow>
//               {columns.map((column) => (
//                 <StyledTableCell
//                   key={column.id}
//                   align={column.align}
//                   style={{ minWidth: column.minWidth }}
//                 >
//                   {column.label}
//                 </StyledTableCell>
//               ))}
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
//               return (
//                 <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
//                   {columns.map((column) => {
//                     const value = row[column.id];
//                     return (
//                       <StyledTableCell key={column.id} align={column.align}>
//                         {column.format && typeof value === 'number' ? column.format(value) : value}
//                       </StyledTableCell>
//                     );
//                   })}
//                 </TableRow>
//               );
//             })}
//           </TableBody>
//         </Table>
//       </TableContainer>
//       <TablePagination
//         rowsPerPageOptions={[5, 10, 25, 100]}
//         component="div"
//         count={data.length}
//         rowsPerPage={rowsPerPage}
//         page={page}
//         onPageChange={handleChangePage}
//         onRowsPerPageChange={handleChangeRowsPerPage}
//       />
//     </Paper>
//   );
// }


// export default function Fabricante(){
//   const [setTableData] = useState([]);
//   const [fabricante, SetFabricante]=useState({
//     id:'',
//     nm_fabricante: '',

//   })

//   const inserir=async() => {
//     await axios.post(baseURL, fabricante)
//     .then(res=>{
//       setTableData((res.data))
//     })
//   }

//   const handleChange=e=>{
//     const {name, value}=e.target;
//     SetFabricante(prevState=>({
//       ...prevState,
//       [name]: value
//     }))
//     console.log(fabricante)
//   }

//   return(
//     <>
//       <Title>Adicionar Fabricante</Title>
//       <Box>
//         <Label className="fab">Nome do Fabricante</Label>
//         <Input className="fab-input" name="nm_fabricante" placeholder="Fabricante" onChange={handleChange}/>
//         <Button className="fab-button" onClick={()=>inserir()}>Adicionar</Button>
//         <Alert className="alerta">ALERT MESSAGE</Alert>
//       </Box>
      
//       <StickyHeadTable />
      
//     </>
//   )
// }

