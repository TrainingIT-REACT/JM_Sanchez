import { createStore, combineReducers } from "redux";
import historico from "../reducers/Historico";
import usuario from "../reducers/Usuario";

const store = (
  combineReducers({
    historico,
    usuario
  })
);

export default createStore(store, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
