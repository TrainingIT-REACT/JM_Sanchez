import types from "./../actions/Types";

export const addHistorico = (albumActual) => ({
  type: types.ADD_HISTORICO,
  albumActual
});
