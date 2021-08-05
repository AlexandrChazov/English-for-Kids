import React from 'react';
import './App.css';
import MainContainer from "./components/Main/MainContainer";
import {Provider} from "react-redux";
import store from "./redux/redux-store";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {BrowserRouter} from "react-router-dom";
import OverlayContainer from "./components/Overlay/OverlayContainer";
import StatisticContainer from "./components/Statistic/StatisticContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <NavbarContainer/>
          <HeaderContainer/>
          <MainContainer/>
          <StatisticContainer/>
          <OverlayContainer/>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
