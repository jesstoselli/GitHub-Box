import React from "react";
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";

import store from "./store";

import GlobalStyle from "./styles/global";

import Routes from "./routes";
import Header from "./components/Header";

const App: React.FC = () => (
  <>
    <BrowserRouter>
      <Provider store={store}>
        <Header />
        <Routes />
      </Provider>
    </BrowserRouter>
    <GlobalStyle />
  </>
);

export default App;
