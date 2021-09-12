import React from 'react'
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"
import Footer from './components/Footer/Footer';

import Nav from './components/Nav/Nav'
import About from './pages/About';
import Home from './pages/Home';
import Projects from './pages/Projects';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/home" component={Home}/>
          <Route path="/projects" component={Projects}/>
          <Route path="/about" component={About}/>
        </Switch>
        <Footer />
      </Router>
    </div>
  )
}

export default App;

