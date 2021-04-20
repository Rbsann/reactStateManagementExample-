import { combineReducers } from "redux";
import todoReducer from './components/Todo/redux/reducer'

// import all reducers in here
// importe todos reducers aqui

const createReducer = () =>
  combineReducers({
    todoReducer
  });

export default createReducer;