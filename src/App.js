import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import {Home, Projects, Initiatives} from './Pages'
import {Navbar, SideLinks, Footer} from './Components'
import './App.css'

function App() {
  return (
    <BrowserRouter basename='/Jayvardhan-Portfolio'>
      <div className="app">
        <Navbar/>
        <Switch>
          <Route path='/home' exact component={Home} />
          <Redirect from='/' to='/home' exact/>
          <Route path='/projects' exact component={Projects} />
          <Route path='/initiatives' exact component={Initiatives}/>
        </Switch>
        <Footer/>
        <SideLinks fb='#' insta='#' linkedIn='#' medium='#' twitter='#' utube='#' />
      </div>
    </BrowserRouter>
  )
}

export default App;
