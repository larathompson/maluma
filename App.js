import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'

import Home from './components/Home'
import Footer from './components/Footer'
import Nav from './components/Nav'
import About from './components/About'
import './style.scss'


const App = () => {
  return <HashRouter>
    <Nav />
    <Switch>
      <Route exact path='/home/' component={Home}/>
      <Route exact path='/about' component={About}/>
      
    </Switch>
    <Footer />
  </HashRouter>

}
export default App