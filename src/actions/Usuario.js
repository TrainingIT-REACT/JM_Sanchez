import types from "./Types";

export const addUsuario = username => {
  return { type: types.ADD_USUARIO, username };
};

export const addPerfil = usuario => {
  return { type: types.ADD_PERFIL, usuario };
};
