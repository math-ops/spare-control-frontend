import React from 'react'
import { Link } from 'react-router-dom'
import { Modal, MessageLogout, Button, Cancelar, AlertBox } from './style'
import './style.css'

const name = 'Matheus Pereira'

export default function LogoutModal(){
  return(
    <>
      <Modal>
        <AlertBox>
          <MessageLogout>Logado como {name}. Deseja Sair?</MessageLogout>
            <Link to="/menu">
              <Cancelar className="logout-modal-cancel">voltar ao menu</Cancelar>
            </Link>
          <Link to="/">
            <Button>SAIR</Button>
          </Link>
        </AlertBox>
      </Modal>
    </>
  )
}
