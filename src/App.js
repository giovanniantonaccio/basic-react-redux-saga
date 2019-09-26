import React from "react";
import { Provider } from "react-redux";

import Content from "./components/Content";
import Header from "./components/Header";

import store from "./store";

import GlobalStyle from "./styles/global";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Content />
      <GlobalStyle />
    </Provider>
  );
}

export default App;
