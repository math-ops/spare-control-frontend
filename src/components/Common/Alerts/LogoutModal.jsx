import React from 'react'
import { Link } from 'react-router-dom'
import { Modal, Message, Button, Cancelar, AlertBox } from './style'
import './style.css'

const name = 'Matheus Pereira'

export default function LogoutModal(){
  return(
    <>
      <Modal>
        <AlertBox>
        <Message>Logado como {name}. Deseja Sair?</Message>
        <Link to="/menu">
        <Cancelar>voltar</Cancelar>
        </Link>
        <Link to="/">
        <Button>SAIR</Button>
        </Link>
        </AlertBox>
      </Modal>
    </>
  )
}

