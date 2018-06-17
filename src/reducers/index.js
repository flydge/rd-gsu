import { combineReducers } from 'redux';
import { routerReducer } from "react-router-redux";
import list from "./listReducer";
import page from "./page";
import { reducer as formReducer } from 'redux-form'

const rootReducers = combineReducers({
  // add reducer files references here
  router: routerReducer,
  form: formReducer,
  list,
  page,


});

export default rootReducers;