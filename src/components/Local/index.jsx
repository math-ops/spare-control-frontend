import React, { useState, useEffect } from 'react'
import { Title, Box, Label, Input, Footer, Button } from './style'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Topbar from '../Common/Header'
import axios from 'axios'
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Snackbar from '@mui/material/Snackbar'
import MuiAlert from '@mui/material/Alert'
import './style.css'
import moment from 'moment'
import 'moment/locale/pt-br'

const baseURL = 'http://localhost:3333/local'

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
  { id: 'nm_local', label: 'Local', minWidth: 170 },
  { id: 'nm_predio', label: 'Nome Predio', minWidth: 170 },
  { id: 'dt_cadastro', label: 'Data Cadastro', minWidth: 170 },
];

const useStyles = makeStyles({
  root: {
    width: '95%',
    marginTop: '360px',
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
    axios.get(baseURL)
      .then((res) => {
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
                  <StyledTableCell align="left">{row.id}</StyledTableCell>
                  <StyledTableCell align="left">{row.nm_local}</StyledTableCell>
                  <StyledTableCell align="left">{row.nm_predio}</StyledTableCell>
                  <StyledTableCell align="left">{moment(row.dt_cadastro).format('L - h:mm A')}</StyledTableCell>
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

export default function ViewLocal() {

  const [isSucess, setIsSucess] = useState(true);
  const [local, setLocal] = useState({
    id: '',
    cd_local: '',
    nm_local: '',
    id_predio: '',
  })

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const res = await axios.post(baseURL, local);
      if (!!res.data) {
        setIsSucess(true);
      } else {
        setIsSucess(false);
      }
    } catch {
      setIsSucess(false);
      console.log('error catch');
    } finally {
      handleClick();
    }
  }

  const handleChange = e => {
    const { name, value } = e.target;
    setLocal(prevState => ({
      ...prevState,
      [name]: value
    }))
    console.log(local)
  }

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  })

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true)
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  }

  return (
    <>
      <Topbar />
        <Title>Cadastrar Locais</Title>
          <Box className="local-box">
            <Label className="local-cod-label" >C??digo Local</Label>
            <Input className="local-cod-input" name="cd_local" placeholder="C??digo Local" onChange={handleChange} />
              <Label className="local-name-label" >Nome Local</Label>
              <Input className="local-name-input" name="nm_local" placeholder="Nome Local" onChange={handleChange} />
                <Label className="local-predio-label">ID Pr??dio</Label>
                <Input className="local-predio-input" name="id_predio" placeholder="ID Pr??dio" onChange={handleChange} />
                  <Button className="local-cad-button" onClick={handleSubmit}>Adicionar</Button>
                    {isSucess ?
                      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                          Cadastrado com Sucesso!
                        </Alert>
                      </Snackbar>
                      :
                      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                          N??o Foi Possivel Fazer o Cadastro!
                        </Alert>
                      </Snackbar>
                    }
          </Box>
      <StickyHeadTable />
        <Footer>Flex&copy; - All Rights Reserved</Footer>
    </>
  )
}