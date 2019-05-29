import React, { Component } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import { connect } from "react-redux";

// Css
import "./App.css";

// Componentes
import MusicaRecomendada from "../componentes/canciones/MusicaRecomendada";
import Albums from "../componentes/albums/Albums";
import DetallesAlbum from "../componentes/albums/DetallesAlbum";
import ReproducirCancion from "../componentes/canciones/ReproducirCancion";
import Login from "../componentes/usuario/Login";
import Perfil from "../componentes/usuario/Perfil";
import { getDatosUsuario } from "../reducers/Usuario";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      albums: []
    };
  }

  getLoginOPerfil(props) {
    if (!props.usuario.login) {
      return (
        <NavLink exact activeClassName="active" to="/login">
          Login
        </NavLink>
      );
    } else {
      return (
        <NavLink exact activeClassName="active" to="/perfil">
          Perfil
        </NavLink>
      );
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Bienvenido a la aplicacion Reactify</h1>

        <Router>
          <div>
            <div className="barraNavegacion">
              <nav>
                <ul>
                  <li>
                    <NavLink exact activeClassName="active" to="/">
                      Inicio
                    </NavLink>
                  </li>
                  <li>
                    <NavLink exact activeClassName="active" to="/albums">
                      Albums
                    </NavLink>
                  </li>
                  <li>{this.getLoginOPerfil(this.props)}</li>
                </ul>
              </nav>
            </div>
            <Route path="/" exact component={MusicaRecomendada} />
            <Route path="/albums" exact component={Albums} />
            <Route
              path="/album/:id_album([0-9]*)"
              exact
              component={DetallesAlbum}
            />
            <Route path="/login" exact component={Login} />
            <Route
              path="/reproducirCancion/:id_cancion([0-9]*)"
              exact
              component={ReproducirCancion}
            />
            <Route path="/perfil" exact component={Perfil} />
          </div>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  usuario: getDatosUsuario(state)
});

const storeConnect = connect(mapStateToProps);

export default storeConnect(App);
