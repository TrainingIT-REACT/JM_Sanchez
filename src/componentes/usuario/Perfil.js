import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";

import { addPerfil } from "../../actions/Usuario";
import { getDatosUsuario } from "../../reducers/Usuario";
import "./Login.css";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

class Perfil extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nombre: props.usuario.nombre,
      edad: props.usuario.edad,
      email: props.usuario.email,
      open: false
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
    this.setState({ open: true });
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

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    if (this.props.usuario.login) {
      return (
        <div>
          <form onSubmit={evento => this.onSubmit(evento)}>
            <div className="centrado">
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

          {/* Popup de confirmacion de guardado */}
          <Dialog
            open={this.state.open}
            TransitionComponent={Transition}
            keepMounted
            onClose={this.handleClose}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
          >
            <DialogTitle id="alert-dialog-slide-title">
              {"Guardado"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-slide-description">
                Se ha guardado correctamente
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} color="primary">
                OK
              </Button>
            </DialogActions>
          </Dialog>
        </div>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Perfil);
