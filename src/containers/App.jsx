import React from "react";
import { Provider } from "react-redux";
import DevTools from "./DevTools.jsx";
import Hello from "./Hello.jsx";

export default class App extends React.Component {
  render() {
    const { store } = this.props;

    return (
      <Provider store={store}>
        <div>
          <Hello />
          <DevTools />
        </div>
      </Provider>
    );
  }
}
