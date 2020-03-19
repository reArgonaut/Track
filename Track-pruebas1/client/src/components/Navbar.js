import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import Logo from './images/tracklogo.png'


class Landing extends Component {
  logOut(e) {
    e.preventDefault()
    localStorage.removeItem('usertoken')
    this.props.history.push(`/`)
  }

  render() {
    const loginRegLink = (
      <ul className="navbar-nav">
         <li className="nav-item">
          <Link to="/login" className="nav-link">
          Inicio Sesion
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/register" className="nav-link">
            Registrarse
          </Link>
        </li>
        
      </ul>
    )

    const userLink = (
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/profile" className="nav-link">
            Usuario
          </Link>
        </li>
        <li className="nav-item">
          <a href="" onClick={this.logOut.bind(this)} className="nav-link">
            Salir
          </a>
        </li>
      </ul>
    )

    return (

      <nav className="navbar navbar-expand-lg ">
        <link rel="icon" type="image/png" href="images/tracklogo.png"></link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExample10"
          aria-controls="navbarsExample10"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div
          className="collapse navbar-collapse justify-content-md-center"
          id="navbarsExample10"
        >
          <ul className="logo" alt="IMG-LOGO-top">
            <li>
            <Link to="/">
            <img src={Logo} height="50" width="50">
            </img>
              </Link>
              </li>
              </ul>
              <ul className="navbar-nav">
              <li className="nav-item">
              <Link to="/" className="nav-link">
                Inicio
              </Link>
            </li>
            <li className="nav-item">
          <Link to="./Mapa" className="nav-link">
            mapa
          </Link>
        </li>
        <li className="nav-item">
          <Link to="./Tabla" className="nav-link">
          Tabla
          </Link>
        </li>
        
          </ul>
          <ul className="logo2"><li>
							<a href="https://www.facebook.com/Tracka-BUS-108528197388726/" className="facebook"><i className="facebook m-l-18"></i></a>
							<a href="https://twitter.com/Trackabus1" className="twitter"><i className="twitter m-l-18"></i></a>
						
        </li></ul>
          {localStorage.usertoken ? userLink : loginRegLink}
        </div>
      </nav>
    )
  }
}

export default withRouter(Landing)
