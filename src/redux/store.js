import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import DevTools from "../containers/DevTools.jsx";
import reducer from "./reducer";

export default function configure(state) {
  return compose(applyMiddleware(thunk), DevTools.instrument())(createStore)(reducer);
}
