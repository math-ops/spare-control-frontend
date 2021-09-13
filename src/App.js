import Sigin from './components/Login'
import Menu from './components/Menu'
import Item from './components/Item'
import GlobalStyle from './styles/global'
import Footer from './components/Common/Footer'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Sigin}/>
        <Route path="/menu" exact component={Menu} />
        <Route path="/item" exact component={Item} />
      </Switch>
      
      
      </BrowserRouter>
     
      <Footer />

      <GlobalStyle />
    </>
    )
}

export default App;
