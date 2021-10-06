import Sigin from './components/Login'
import Menu from './components/Menu'
import Item from './components/Item'
import GlobalStyle from './styles/global'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Fabricante from './components/Fabricante'
import Modelo from './components/Modelo'
import ViewFabricante from './components/View/Fabricante'
import ViewModelo from './components/View/Modelo'

function App() {
  return (
    <>
      <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Sigin}/>
        <Route path="/menu" exact component={Menu} />
        <Route path="/item" exact component={Item} />
        <Route path="/fabricante" exact component={Fabricante} />
        <Route path="/modelo" exact component={Modelo} />
        <Route path="/viewfab" exact component={ViewFabricante} />
        <Route path="/viewmod" exact component={ViewModelo} />

        
      </Switch>
      
      
      </BrowserRouter>

      <GlobalStyle />
    </>
    )
}

export default App;
