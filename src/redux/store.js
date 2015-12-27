import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import DevTools from "../containers/DevTools.jsx";
import reducer from "./reducer";

export default function configure() {
  return compose(applyMiddleware(thunk), DevTools.instrument())(createStore)(reducer);
}
