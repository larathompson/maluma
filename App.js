import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
// import AliceCarousel from 'react-alice-carousel'
// import 'react-alice-carousel/lib/alice-carousel.css'
import Home from './components/Home'
import Footer from './components/Footer'
import Nav from './components/Nav'
import About from './components/About'
import Process from './components/Process'
import Projects from './components/Projects'
import Questions from './components/Questions'
// import FAQ from './components/FAQ'
import './style.scss'



const App = () => {
  return <HashRouter>
    <Nav />
    <Switch>
      <Route exact path='/home/' component={Home}/>
      <Route exact path='/about' component={About}/>
      <Route exact path ='/process' component={Process}/>
      <Route exact path ='/projects' component={Projects}/>
      <Route exact path = '/faqs' component={Questions} />
    </Switch>
    <Footer />
  </HashRouter>

}
export default App