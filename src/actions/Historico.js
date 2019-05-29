import types from "./../actions/Types";

export const addHistoricoAlbums = text => {
  return { type: types.ADD_HISTORICO_ALBUMS, text };
};

export const addHistoricoCanciones = text => {
  return { type: types.ADD_HISTORICO_CANCIONES, text };
};
