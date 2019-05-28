import types from "./../actions/Types";

export const addHistorico = (text) => {
  return {type: types.ADD_HISTORICO,
  text}
};
