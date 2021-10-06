import React from 'react';
import Topbar from '../Common/Header'

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
  { id: 'name', label: 'Nome Fabricante', minWidth: 170 },
  { id: 'dt_cadastro', label: 'Data Cadastro', minWidth: 170 },
  
];

function createData(id, name, dt_cadastro) {
  return { id, name, dt_cadastro };
}

const rows = [
  createData( 1, 'Teste 001', '01-01-2021 10:10:00'),
  createData( 2, 'Teste 002', '01-01-2021 10:10:00'),
  createData( 3, 'Teste 003', '01-01-2021 10:10:00'),
  createData( 4, 'Teste 004', '01-01-2021 10:10:00'),
  createData( 5, 'Teste 005', '01-01-2021 10:10:00'),
  createData( 6, 'Teste 006', '01-01-2021 10:10:00'),
  createData( 7, 'Teste 007', '01-01-2021 10:10:00'),
  createData( 8, 'Teste 008', '01-01-2021 10:10:00'),
  createData( 9, 'Teste 009', '01-01-2021 10:10:00'),
  createData( 10, 'Teste 010', '01-01-2021 10:10:00'),
  createData( 11, 'Teste 011', '01-01-2021 10:10:00'),
  createData( 12, 'Teste 012', '01-01-2021 10:10:00'),
  createData( 13, 'Teste 013', '01-01-2021 10:10:00'),
  createData( 14, 'Teste 014', '01-01-2021 10:10:00'),
  createData( 15, 'Teste 015', '01-01-2021 10:10:00'),
  createData( 16, 'Teste 016', '01-01-2021 10:10:00'),
  createData( 17, 'Teste 017', '01-01-2021 10:10:00'),
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
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <StyledTableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </StyledTableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

export default function ViewFabricante(){
  return(
    <>
      <Topbar />
      <Title>Lista de Fabricantes Cadastrados</Title>
      <StickyHeadTable />
    </>
  )
}