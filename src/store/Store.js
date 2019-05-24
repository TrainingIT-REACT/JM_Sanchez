import { createStore, combineReducers } from "redux";
import historico from "../reducers/Historico";

const store = createStore(
  combineReducers({
    historico
  })
);

export default store;
