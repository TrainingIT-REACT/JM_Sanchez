import React, { Component } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

// Css
import "./App.css";

// Componentes
import MusicaRecomendada from "../componentes/canciones/MusicaRecomendada";
import Albums from "../componentes/albums/Albums";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      albums: []
    };
  }

  render() {
    return (
      <div className="App">
        <h1>Bienvenido a la aplicacion Reactify</h1>
        <Router>
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
                <li>
                  <NavLink exact activeClassName="active" to="/login">
                    Login
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
          <Route path="/" exact component={MusicaRecomendada} />
          <Route path="/albums" exact component={Albums} />
          <Route path="/login" exact component={MusicaRecomendada} />
        </Router>
      </div>
    );
  }
}

export default App;
