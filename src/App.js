import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from './components/LoginScreen'
import Menu from './components/Menu'
import LogoutModal from './components/Common/Alerts/LogoutModal'
import Equipamento from './components/Serial'
import GlobalStyle from './styles/global'
import Fabricante from './components/Fabricante'
import Modelo from './components/Modelo'
import Local from './components/Local'
import ViewFabricante from './components/View/Fabricante'
import Item from './components/InsereEquipamento'
import ViewModelo from './components/View/Modelo'
import ViewItem from './components/View/Equipamentos'
import CadastroPrefixo from './components/Prefixo'
import Predio from './components/Predio'
import Inventory from './components/Inventario'
import ScanSerial from './components/Inventario/ScanSerial'

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
            {/* ROTAS COMUNS */}
            <Route path="/" exact component={Login}/>
            <Route path="/menu" exact component={Menu} />
            <Route path="/logout" exact component={LogoutModal} />
            {/* ROTAS DE CADASTRO */}
            <Route path="/csrl" exact component={Equipamento} />
            <Route path="/cfab" exact component={Fabricante} />
            <Route path="/cmod" exact component={Modelo} />
            <Route path="/cloc" exact component={Local} />
            <Route path="/cprd" exact component={Predio} />
            <Route path="/ceqp" exact component={Item} />
            <Route path="/cpfx" exact component={CadastroPrefixo} />
              {/* ROTAS DE VISUALIZAÇÃO */}
            <Route path="/vfab" exact component={ViewFabricante} />
            <Route path="/vmod" exact component={ViewModelo} />
            <Route path="/veqp" exact component={ViewItem} />
            {/* ROTA DO INVENTÁRIO */}
            <Route path='/invent' exact component={Inventory} />
            <Route path='/go' exact component={ScanSerial} />
            
        </Switch>    
      </BrowserRouter>
    <GlobalStyle />
  </>
    )
}

export default App;
