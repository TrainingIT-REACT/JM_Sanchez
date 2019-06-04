import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import { addPerfil } from "../../actions/Usuario";
import { getDatosUsuario } from "../../reducers/Usuario";
import "./Login.css";

class Perfil extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nombre: props.usuario.nombre,
      edad: props.usuario.edad,
      email: props.usuario.email
    };
  }

  getUsuario = () => {
    return {
      nombre: this.state.nombre,
      edad: this.state.edad,
      email: this.state.email
    };
  };

  onSubmit(e) {
    e.preventDefault();
    this.props.addPerfil(this.getUsuario());
  }

  handleNombre = event => {
    this.setState({ nombre: event.target.value });
  };

  handleEmail = event => {
    this.setState({ email: event.target.value });
  };

  handleEdad = event => {
    this.setState({ edad: event.target.value });
  };

  render() {
    if (this.props.usuario.login) {
      return (
        <form onSubmit={evento => this.onSubmit(evento)}>
          <div class="centrado">
            <h3>Tu perfil, {this.props.usuario.username}</h3>
            <p>
              Si quieres actualizar algun dato, modifica los datos a
              continuacion
            </p>
            <div>
              <TextField
                required
                id="outlined-nombre"
                label="Nombre"
                value={this.state.nombre}
                onChange={this.handleNombre}
                margin="normal"
                variant="outlined"
              />
            </div>
            <div>
              <TextField
                required
                id="outlined-edad"
                label="Edad"
                value={this.state.edad}
                onChange={this.handleEdad}
                margin="normal"
                variant="outlined"
              />
            </div>
            <div>
              <TextField
                required
                id="outlined-email"
                label="Email"
                value={this.state.email}
                onChange={this.handleEmail}
                margin="normal"
                variant="outlined"
              />
            </div>
            <Button variant="contained" type="submit">
              Guardar
            </Button>
          </div>
        </form>
      );
    } else {
      return (
        <h3>
          No estas autorizado a ver esta pagina.
          <NavLink exact to="/login">
            Logueate primero.
          </NavLink>
        </h3>
      );
    }
  }
}

const mapStateToProps = state => ({
  usuario: getDatosUsuario(state)
});

const mapDispatchToProps = dispatch => ({
  addPerfil: usuario => dispatch(addPerfil(usuario))
});

const storeConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default storeConnect(Perfil);
