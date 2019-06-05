import React, { Component } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

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
import { obtenerAlbumsYCanciones } from "../actions/AlbumsYCanciones";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      albums: [],
      classes: props
    };
  }

  componentDidMount() {
    if (
      this.props.albumsYCanciones.albums.length === 0 ||
      this.props.albumsYCanciones.songs.length === 0
    ) {
      this.props.obtenerAlbumsYCanciones();
    }
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
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="h3" color="inherit">
              Bienvenido a la aplicacion Reactify
            </Typography>
          </Toolbar>
        </AppBar>
        <Router>
          <div>
            <div className="barraNavegacion">
              <Grid container spacing={3} className="centrado">
                <Grid item xs={4}>
                  <Paper>
                    <NavLink exact activeClassName="active" to="/">
                      Inicio
                    </NavLink>
                  </Paper>
                </Grid>
                <Grid item xs={4}>
                  <Paper>
                    <NavLink exact activeClassName="active" to="/albums">
                      Albums
                    </NavLink>
                  </Paper>
                </Grid>
                <Grid item xs={4}>
                  <Paper>{this.getLoginOPerfil(this.props)}</Paper>
                </Grid>
              </Grid>
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
  ...state,
  usuario: getDatosUsuario(state)
});

const mapDispatchToProps = dispatch => ({
  obtenerAlbumsYCanciones: () => dispatch(obtenerAlbumsYCanciones())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
