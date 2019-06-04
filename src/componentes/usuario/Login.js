import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import { addUsuario } from "../../actions/Usuario";
import { getDatosUsuario } from "../../reducers/Usuario";
import "./Login.css";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      usuario: ""
    };
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.addUsuario(this.state.usuario);
  }

  handleUsuario = event => {
    this.setState({ usuario: event.target.value });
  };

  getFormulario(props) {
    if (!props.usuario.login) {
      return (
        <div class="centrado">
          <form onSubmit={evento => this.onSubmit(evento)}>
            <div>
              <p class="titulo">Datos del login</p>
              <TextField
                required
                id="outlined-required"
                label="Usuario"
                margin="normal"
                variant="outlined"
                value={this.state.usuario}
                onChange={this.handleUsuario}
              />
            </div>
            <div>
              <TextField
                required
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                margin="normal"
                variant="outlined"
              />
            </div>
            <div>
              <Button variant="contained" type="submit">
                Enviar!
              </Button>
            </div>
          </form>
        </div>
      );
    } else {
      return (
        <h3>
          Ya estas logeado, {props.usuario.username}. Ahora ya puedes acceder a
          tu{" "}
          <NavLink exact to="/perfil">
            perfil
          </NavLink>
        </h3>
      );
    }
  }

  render() {
    return <div>{this.getFormulario(this.props)}</div>;
  }
}

const mapStateToProps = state => ({
  usuario: getDatosUsuario(state)
});

const mapDispatchToProps = dispatch => ({
  addUsuario: texto => dispatch(addUsuario(texto))
});

const storeConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default storeConnect(Login);
