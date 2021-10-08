import { Modal, AlertBox, MessageCadastro, Button, Cancelar, Vector } from './style'
import success from '../../../styles/assets/success.svg'

export default function CadastroModal(){
  return(
    <>
      <Modal>
        <AlertBox>
          <Vector src={success} alt="sucesso"/>
          <MessageCadastro>Cadastrado com Sucesso!</MessageCadastro>
        </AlertBox>
      </Modal>
    </>
  )
}