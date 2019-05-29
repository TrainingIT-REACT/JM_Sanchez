import types from "../actions/Types";

const initialState = {
  usuario: {
    username: "",
    nombre: "",
    edad: 0,
    email: "",
    login: false
  }
};

const reducer = (state = initialState.usuario, action) => {
  switch (action.type) {
    case types.ADD_USUARIO: {
      return {
        ...state,
        username: action.username,
        login: true
      };
    }
    case types.ADD_PERFIL: {
      return {
        ...state,
        nombre: action.usuario.nombre,
        edad: action.usuario.edad,
        email: action.usuario.email
      };
    }
    default:
      return state;
  }
};

export const getDatosUsuario = state => state.usuario;

export default reducer;
