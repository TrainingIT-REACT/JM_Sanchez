import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import promise from "redux-promise-middleware";
import historico from "../reducers/Historico";
import usuario from "../reducers/Usuario";
import albumsYCanciones from "../reducers/AlbumsYCanciones";

const store = combineReducers({
  historico,
  usuario,
  albumsYCanciones
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(store, composeEnhancers(applyMiddleware(promise)));
