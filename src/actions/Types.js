const actions = [
  "ADD_HISTORICO_ALBUMS",
  "ADD_HISTORICO_CANCIONES",
  "ADD_USUARIO",
  "ADD_PERFIL"
];

const acctionTypes = {};
actions.forEach(action => {
  acctionTypes[action] = action;
});

export default acctionTypes;
