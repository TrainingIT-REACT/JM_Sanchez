import { createStore, combineReducers } from "redux";
import historico from "../reducers/Historico";

const store = (
  combineReducers({
    historico,
  })
);

export default createStore(store, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
