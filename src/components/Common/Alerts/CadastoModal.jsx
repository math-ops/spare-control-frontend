import React from 'react'
import {Link} from 'react-router-dom'
import { Modal, AlertBox, MessageCadastro, Button, Cancelar, Vector } from './style'
import success from '../../../styles/assets/success.svg'

export default function CadastroModal(){  

  

  return(
    <>
      <Modal>
        <AlertBox>
          <Vector src={success} alt="sucesso"/>
          <MessageCadastro>Cadastrado com Sucesso!</MessageCadastro>
          <Link to="/menu">
          <Cancelar className="sucesso-modal-cancel">retornar ao menu</Cancelar>
          </Link>
          <Link to>
          <Button>Novo Cadastro</Button>
          </Link>
        </AlertBox>
      </Modal>
    </>
  )
}