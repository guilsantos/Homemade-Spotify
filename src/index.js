import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Routes from "./routes";
import Store from "./store";

const AppWithStore = () => (
  <Provider store={Store}>
    <Routes />
  </Provider>
);

ReactDOM.render(<AppWithStore />, document.getElementById("app"));
