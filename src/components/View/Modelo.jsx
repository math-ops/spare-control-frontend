import React, { useEffect, useState } from 'react';
import Topbar from '../Common/Header'
import styled from 'styled-components'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import { Title } from '../Menu/style'
import moment from 'moment'
import 'moment/locale/pt-br'

import axios from 'axios'

const baseURL = 'http://localhost:3333/modelo'

export const Footer = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  color: #fff;
  position: absolute;
  top: 105%;
  left: 10%;
`;

//Estilização das Células
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: '#001b94',
    color: theme.palette.common.white,
    fontSize: 20,
      fontWeight: 'bold',
  },
  body: {
    fontSize: 16,
    background: '#fff',
  },
}))(TableCell);

const columns = [
  { id: 'id', label: 'ID', minWidth: 100 },
  { id: 'nm_modelo', label: 'Modelo', minWidth: 170 },
  { id: 'dt_cadastro', label: 'Data Cadastro', minWidth: 170},
  
];

const useStyles = makeStyles({
  root: {
    width: '95%',
    marginTop: '20px',
    marginLeft: '10px',
    marginRight: '10px',
  },
  container: {
    maxHeight: 440,
  },
});

export function StickyHeadTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [data, setTableData] = useState([]);

  useEffect(() => {
    axios.get(baseURL).then((res) => {
      console.log(res.data);
      setTableData(res.data);
    })
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <StyledTableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  <StyledTableCell algin="left">{row.id}</StyledTableCell>
                  <StyledTableCell algin="left">{row.nm_modelo}</StyledTableCell>
                  <StyledTableCell algin="left">{moment(row.dt_cadastro).format('L - h:mm A')}</StyledTableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

export default function ViewModelo(){
  return(
    <>
      <Topbar />
      <Title>Modelos Cadastrados</Title>
      <StickyHeadTable />
      <Footer>Flex&copy; - All Rights Reserved</Footer>
    </>
  )
}