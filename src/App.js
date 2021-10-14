import Sigin from './components/Login'
import Menu from './components/Menu'
import Equipamento from './components/Equipamento'
import GlobalStyle from './styles/global'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Fabricante from './components/Fabricante'
import Modelo from './components/Modelo'
import Local from './components/Local'
import ViewFabricante from './components/View/Fabricante'
import ViewModelo from './components/View/Modelo'
import ViewItem from './components/View/Equipamentos'
import LogoutModal from './components/Common/Alerts/LogoutModal'
import CadastroModal from './components/Common/Alerts/CadastoModal'
import Area from './components/Predio'

function App() {
  return (
    <>
      <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Sigin}/>
        <Route path="/menu" exact component={Menu} />
        <Route path="/item" exact component={Equipamento} />
        <Route path="/fabricante" exact component={Fabricante} />
        <Route path="/modelo" exact component={Modelo} />
        <Route path="/local" exact component={Local} />
        <Route path="/area" exact component={Area} />
        <Route path="/viewfab" exact component={ViewFabricante} />
        <Route path="/viewmod" exact component={ViewModelo} />
        <Route path="/viewitem" exact component={ViewItem} />
        <Route path="/logout" exact component={LogoutModal} />
        <Route path="/sucesso" exact component={CadastroModal} />

        
      </Switch>
      
      
      </BrowserRouter>

      <GlobalStyle />
    </>
    )
}

export default App;
