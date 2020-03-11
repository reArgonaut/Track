import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import  'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Login from './components/Login'
import Register from './components/Register'
import Profile from './components/Profile'
import Mapa from './components/Mapa'
import Tabla from './components/Tabla'
import Footer from './components/Footer'
import StickyFooter from 'react-sticky-footer';


window.menss="";
class App extends Component {
  render() {
    
    return (
      <Router>
        <div className="App"> 
          <Navbar />
          <Route exact path="/" component={Landing} />
            <Route exact path="/register" component={Register} />
             <Route exact path="/login" component={Login} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/Mapa" component={Mapa} />
            <Route exact path="/Tabla" component={Tabla} />
            <div className="push"></div>
            <StickyFooter
                bottomThreshold={50}
                normalStyles={{
                backgroundColor: "#999999"
                }}
                stickyStyles={{
                backgroundColor: "rgba(255,255,255,.8)",
                padding: "2rem"
                }}
            > <Footer />
            </StickyFooter>
        </div>
     </Router>
    )
  }
}
export default App
