import * as React from 'react'
import Topbar from '../../Common/Header'
import { Title, Subtitle, Items, Input, Label, HiddenButton, GreenFlag, RedFlag } from '../style'
import '../style.css'

export default function ScanSerial(){
  // eslint-disable-next-line
  const [serial, setSerial] = React.useState('');
  // eslint-disable-next-line
  const [isSucess, setIsSucess] = React.useState(true);

  function handleSubmit(e) {
    e.preventDefault()
    try {
      const res = 'aaa';
      if (!!res === '1234'){
        setIsSucess(true)
        openSucess();
      } else {
        setIsSucess(false);
        openAlert();
      }
    } catch {
      setIsSucess(false);
      console.log('error catch')
    } 
  }

  const openSucess = ()  =>{
    console.log('chegou no sucesso');
  }

  const openAlert = ()  =>{
    console.log('chegou no alert');
  }

  // const openError = ()  =>{
  //   console.log('chegou no erro');
  // }

  const handleChange = e => {
    const { serial, value } = e.target;
    setSerial(prevState => ({
      ...prevState,
      [serial]: value
    }))
    console.log(serial)
  }

  return(
    <>
    <Topbar />
    <Title>Scan Serial</Title>
      <Subtitle>Informe o serial no campo abaixo:</Subtitle>
      <Items>
        <Label className="fab">Serial</Label>
        <Input className="fab-input" placeholder="Serial" onChange={handleChange}/>
        <HiddenButton onClick={handleSubmit}></HiddenButton>
        {
          isSucess ?
          <GreenFlag></GreenFlag>
          :
          <RedFlag></RedFlag>
        }
      </Items>
    </>
  )
}