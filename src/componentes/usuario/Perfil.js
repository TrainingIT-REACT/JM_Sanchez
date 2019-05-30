import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { addPerfil } from "../../actions/Usuario";
import { getDatosUsuario } from "../../reducers/Usuario";

class Perfil extends Component {
  constructor(props) {
    super(props);

    this.nombre = React.createRef();
    this.edad = React.createRef();
    this.email = React.createRef();
  }

  getUsuario = () => {
    return {
      nombre: this.nombre.current.value,
      edad: this.edad.current.value,
      email: this.email.current.value
    };
  };

  onSubmit(e) {
    e.preventDefault();
    this.props.addPerfil(this.getUsuario());
  }

  render() {
    if (this.props.usuario.login) {
      return (
        <form onSubmit={evento => this.onSubmit(evento)}>
          <div>
            <h3>Tu perfil, {this.props.usuario.username}</h3>
            <p>
              Si quieres actualizar algun dato, modifica los datos a
              continuacion
            </p>
            <div>
              <label>Nombre: </label>
              <input
                id="nombre"
                type="text"
                ref={this.nombre}
                placeholder={this.props.usuario.nombre}
              />
            </div>
            <div>
              <label>Edad: </label>
              <input
                id="edad"
                type="text"
                ref={this.edad}
                placeholder={this.props.usuario.edad}
              />
            </div>
            <div>
              <label>Email: </label>
              <input
                id="email"
                type="text"
                ref={this.email}
                placeholder={this.props.usuario.email}
              />
            </div>
          </div>
          <button type="submit">
            Modificar Perfil
          </button>
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
