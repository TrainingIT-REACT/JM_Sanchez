import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

import { addUsuario } from "../../actions/Usuario";
import { getDatosUsuario } from "../../reducers/Usuario";

class Login extends Component {
  constructor(props) {
    super(props);

    this.input = React.createRef();
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.addUsuario(this.input.current.value);
  }

  getFormulario(props) {
    if (!props.usuario.login) {
      return (
        <form onSubmit={evento => this.onSubmit(evento)}>
          <h3>Datos del login</h3>
          <p>Introduce tu usuario</p>
          <input id="nombre" type="text" ref={this.input} />
          <p>Introduce tu password</p>
          <input id="password" type="password" />
          <button type="submit">Enviar!</button>
        </form>
      );
    } else {
      return (
        <h3>
          Ya estas logeado, {props.usuario.username}. Ahora ya puedes acceder a
          tu <NavLink exact to="/perfil">perfil</NavLink>
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
