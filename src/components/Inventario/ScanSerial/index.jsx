import Topbar from '../../Common/Header'
import { Title, Items, Input, Label } from '../style'
import '../style.css'

export default function ScanSerial(){
  return(
    <>
    <Topbar />
    <Title>Scan Serial</Title>
      <Items>
        <Label className="fab">Serial</Label>
        <Input className="fab-input" placeholder="Serial" />
      </Items>
    </>
  )
}